import { useState } from "react";
import "./App.css";
import { resumeData as d, TranslatableKey } from "./resumeData";
import { Experience } from "./Experience";
import { Section } from "./Section";
import { SkillTopic } from "./SkillTopic";

function App() {
  const [lang, setLang] = useState<TranslatableKey>(
    (localStorage.getItem("lang") as TranslatableKey) ?? "en"
  );

  const toggleLanguage = () => {
    const newLang: TranslatableKey = lang === "en" ? "nl" : "en";
    localStorage.setItem("lang", newLang);
    setLang(newLang);
  };

  const separator = <> &nbsp;•&nbsp; </>;

  return (
    <>
      <div className="md:my-5 md:mx-5 lg:my-10 lg:mx-auto lg:w-[960px] md:rounded-2xl px-7 py-6 text-left text-slate-700 shadow-[5px_25px_80px_-15px_rgba(0,0,0,0.2)] print:shadow-none cursor-default print:p-0 print:mt-0">
        <div className="float-right print:hidden">
          {lang == "en" ? (
            <span className="font-bold">EN</span>
          ) : (
            <a
              className="cursor-pointer hover:underline"
              onClick={toggleLanguage}
              title={d.ui.languageToggle[lang]}
            >
              EN
            </a>
          )}
          {" / "}
          {lang == "nl" ? (
            <span className="font-bold">NL</span>
          ) : (
            <a
              className="cursor-pointer hover:underline"
              onClick={toggleLanguage}
              title={d.ui.languageToggle[lang]}
            >
              NL
            </a>
          )}
        </div>
        <div className="flex gap-4">
          <img
            src="pieter.jfif"
            alt="Pieter De Witte"
            className="w-[80px] h-[80px] rounded-full print:w-[100px] print:h-[100px]"
          />
          <div>
            <h1 className="text-2xl font-bold text-cyan-700">{d.main.name}</h1>
            <p className="text-slate-800">
              Senior Full Stack Developer & Manager
            </p>
            <p className="text-sm text-slate-500">
              {d.main.address[lang]}
              {separator}
              <a
                className="hover:underline"
                href={`tel:${d.main.phone.replace(/\s+/g, "")}`}
              >
                {d.main.phone}
              </a>
              {separator}
              <a
                className="hover:underline"
                href={`mailto:${d.main.email}`}
                target="_blank"
              >
                {d.main.email}
              </a>
              <span className="inline print:hidden">{separator}</span>
              <span className="hidden print:inline">
                <br />
              </span>
              <a
                className="hover:underline"
                href={`https://www.${d.main.linkedInUrl}`}
                target="_blank"
              >
                {d.main.linkedInUrl}
              </a>
              <span className="hidden print:inline">
                {separator}
                <a
                  className="hover:underline"
                  href={`https://www.${d.main.websiteUrl}`}
                  target="_blank"
                >
                  {d.main.websiteUrl}
                </a>
              </span>
            </p>
          </div>
        </div>
        <Section title={d.ui.skillsTitle[lang]}>
          {d.skills.map((s) => (
            <SkillTopic skillTopic={s} lang={lang} />
          ))}
        </Section>
        <Section title={d.ui.experienceTitle[lang]}>
          {d.experience.map((e) => (
            <Experience experience={e} lang={lang} />
          ))}
        </Section>
      </div>
    </>
  );
}

export default App;
