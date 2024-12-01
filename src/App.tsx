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
import { Project } from "./Project";
import { Page } from "./Page";
import { Projects } from "./Projects";

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
        languageTooltipTranslation={d.ui.languageToggleTooltip}
      />
      <Page>
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
      </Page>

      <Page>
        <div className="md:mt-[-30px] print:mt-[-34px] break-before-page">
          <Section title={d.ui.addendumTitle[lang]}>
            <Projects projects={d.projects} lang={lang} />
          </Section>
        </div>
      </Page>
    </>
  );
}

export default App;
