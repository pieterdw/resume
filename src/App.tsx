import { useEffect, useState } from "react";
import "./App.css";
import { resumeData as d, TranslatableKey } from "./resumeData";
import { Experience } from "./Experience";
import { Section } from "./Section";
import { SkillTopic } from "./SkillTopic";
import { Preheader } from "./Preheader";
import { Header } from "./Header";
import { Recommendation } from "./Recommendation";
import { getLanguageFromHash } from "./utils/getLanguageFromHash";

function App() {
  const [lang, setLang] = useState<TranslatableKey>(getLanguageFromHash());

  useEffect(() => {
    const onHashChange = () => setLang(getLanguageFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  useEffect(() => {
    console.log(`%c😍 Hi there! `, "color:rgb(14 116 144);font-size:1.3rem;");
    console.log(
      `%cThanks for checking out my resume. Happy to connect and explain it personally!`,
      "color:rgb(14 116 144);"
    );
  }, []);

  return (
    <>
      <Preheader
        lang={lang}
        downloadTranslation={d.ui.downloadAsPdf}
        languageTranslation={d.ui.languageToggle}
      />
      <div className="md:mb-5 md:mx-5 lg:mb-10 lg:mx-auto lg:w-[1024px] md:rounded-2xl px-4 md:px-7 py-6 text-left text-slate-700 bg-white md:shadow-[5px_25px_80px_-15px_rgba(0,0,0,0.2)] print:shadow-none cursor-default print:p-0 print:mt-0 leading-relaxed print:leading-[1.35rem]">
        <Header
          lang={lang}
          name={d.main.name}
          jobTitle={d.main.jobTitle}
          address={d.main.address}
          phone={d.main.phone}
          email={d.main.email}
          websiteUrl={d.main.websiteUrl}
          linkedInUrl={d.main.linkedInUrl}
        />
        <div className="mt-10">
          {d.intro[lang].split("\n").map((x, i) => (
            <p key={i} className="mb-3 print:mb-2">
              {x}
            </p>
          ))}
        </div>
        <Section title={d.ui.skillsTitle[lang]}>
          <div className="md:grid print:grid grid-cols-[max-content_auto] print:mb-12">
            {d.skills.map((s, i) => (
              <SkillTopic key={i} skillTopic={s} lang={lang} />
            ))}
          </div>
        </Section>
        <Section title={d.ui.experienceTitle[lang]}>
          {d.experience.map((e, i) => (
            <Experience key={i} experience={e} lang={lang} />
          ))}
        </Section>
        <Section title={d.ui.educationTitle[lang]}>
          {d.education.map((e, i) => (
            <Experience key={i} experience={e} lang={lang} />
          ))}
        </Section>
        <Section title={d.ui.recommendationsTitle[lang]}>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 print:grid-cols-3">
            {d.recommendations.map((r, i) => (
              <Recommendation key={i} recommendation={r} lang={lang} />
            ))}
          </div>
        </Section>
      </div>
    </>
  );
}

export default App;
