import { ITranslatable, TranslatableKey } from "./resumeData";

export interface IPreheaderProps {
  lang: TranslatableKey;
  downloadTranslation: ITranslatable;
  languageTranslation: ITranslatable;
  languageTooltipTranslation: ITranslatable;
}

export const Preheader: React.FC<IPreheaderProps> = ({
  lang,
  downloadTranslation,
  languageTranslation,
  languageTooltipTranslation,
}) => {
  const otherLanguage = lang === "en" ? "nl" : "en";
  return (
    <div className="mt-6 mb-6 md:mx-5 lg:mx-auto lg:w-[1024px] text-center md:text-right text-slate-700 print:hidden">
      <a
        href={`Pieter_De_Witte_Resume_${lang.toUpperCase()}.pdf`}
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
      <a
        href={"#" + otherLanguage}
        className="cursor-pointer bg-slate-100 md:bg-transparent px-3 py-1 rounded-2xl hover:bg-slate-200 hover:text-slate-800 whitespace-nowrap ml-2"
        title={languageTooltipTranslation[lang]}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="rgb(51, 65, 85)"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="relative top-[-1px] inline mr-2"
        >
          <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12m2.557 16h-5.115c.546 2.46 1.441 4.114 2.558 5.744 1.194-1.741 2.041-3.41 2.557-5.744m-7.157 0h-4.567c1.236 2.825 3.704 4.972 6.755 5.716-1.048-1.733-1.783-3.658-2.188-5.716m13.767 0h-4.567c-.391 1.988-1.095 3.887-2.175 5.694 3.012-.763 5.517-2.895 6.742-5.694m-14.005-6h-4.962c-.267 1.313-.267 2.685 0 4h4.915c-.119-1.329-.101-2.672.047-4m7.661 0h-5.647c-.165 1.326-.185 2.672-.053 4h5.753c.133-1.328.111-2.673-.053-4m6.977 0h-4.963c.148 1.328.166 2.671.048 4h4.915c.26-1.285.273-2.648 0-4m-12.156-7.729c-3.077.732-5.567 2.886-6.811 5.729h4.653c.435-2.042 1.178-3.985 2.158-5.729m2.355-.048c-1.089 1.77-1.91 3.453-2.463 5.777h4.927c-.534-2.246-1.337-3.948-2.464-5.777m2.368.069c1.013 1.812 1.733 3.76 2.146 5.708h4.654c-1.232-2.816-3.762-4.958-6.8-5.708" />
        </svg>
        {languageTranslation[lang]}
      </a>
    </div>
  );
};
