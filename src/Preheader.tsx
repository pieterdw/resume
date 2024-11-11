import { ITranslatable, TranslatableKey } from "./resumeData";

export interface IPreheaderProps {
  lang: TranslatableKey;
  downloadTranslation: ITranslatable;
  languageTranslation: ITranslatable;
}

export const Preheader: React.FC<IPreheaderProps> = ({
  lang,
  downloadTranslation,
  languageTranslation,
}) => {
  const otherLanguage = lang === "en" ? "nl" : "en";
  return (
    <div className="mt-6 mb-6 md:mx-5 lg:mx-auto lg:w-[1024px] text-center md:text-right text-slate-700 print:hidden">
      <a
        href="Pieter_De_Witte_Resume_EN.pdf"
        target="_blank"
        className="px-3 py-1 rounded-2xl bg-slate-100 md:bg-transparent hover:bg-slate-200 hover:text-slate-800 whitespace-nowrap"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="rgb(51, 65, 85)"
          viewBox="0 0 24 24"
          className="relative top-[-1px] inline mr-2"
        >
          <path d="M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z" />
        </svg>
        {downloadTranslation[lang]}
      </a>
      {false && (
        <a
          href={"#" + otherLanguage}
          className="cursor-pointer bg-slate-100 md:bg-transparent px-3 py-1 rounded-2xl hover:bg-slate-200 hover:text-slate-800 whitespace-nowrap ml-2"
          title={languageTranslation[lang]}
        >
          {languageTranslation[lang]}
        </a>
      )}
    </div>
  );
};
