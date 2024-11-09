import { useEffect, useState } from "react";
import "./App.css";
import { resumeData as d, TranslatableKey } from "./resumeData";
import { Experience } from "./Experience";
import { Section } from "./Section";
import { SkillTopic } from "./SkillTopic";
import { LanguagePicker } from "./LanguagePicker";
import { Header } from "./Header";
import { Recommendation } from "./Recommendation";

function App() {
  const [lang, setLang] = useState<TranslatableKey>(
    (localStorage.getItem("lang") as TranslatableKey) ?? "en"
  );

  const toggleLanguage = () => {
    const newLang: TranslatableKey = lang === "en" ? "nl" : "en";
    localStorage.setItem("lang", newLang);
    setLang(newLang);
  };

  useEffect(() => {
    console.log(`%c😍 Hi there! `, "color:rgb(14 116 144);font-size:1.3rem;");
    console.log(
      `%cThanks for checking out my resume. Happy to connect and explain it personally!`,
      "color:rgb(14 116 144);"
    );
  }, []);

  return (
    <>
      <div className="md:my-5 md:mx-5 lg:my-10 lg:mx-auto lg:w-[1024px] md:rounded-2xl px-7 py-6 text-left text-slate-700 shadow-[5px_25px_80px_-15px_rgba(0,0,0,0.2)] print:shadow-none cursor-default print:p-0 print:mt-0 leading-relaxed print:leading-[1.35rem]">
        <LanguagePicker
          lang={lang}
          tooltip={d.ui.languageToggle}
          onToggleLanguage={toggleLanguage}
        />
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
