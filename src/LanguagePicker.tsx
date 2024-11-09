import { ITranslatable, TranslatableKey } from "./resumeData";

export interface ILanguagePickerProps {
  lang: TranslatableKey;
  tooltip: ITranslatable;
  onToggleLanguage: () => void;
}

export const LanguagePicker: React.FC<ILanguagePickerProps> = ({
  lang,
  tooltip,
  onToggleLanguage,
}) => {
  return (
    <div className="text-right md:float-right print:hidden">
      {lang == "en" ? (
        <span className="font-bold">EN</span>
      ) : (
        <a
          className="cursor-pointer hover:underline"
          onClick={onToggleLanguage}
          title={tooltip[lang]}
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
          onClick={onToggleLanguage}
          title={tooltip[lang]}
        >
          NL
        </a>
      )}
    </div>
  );
};
