import { ITranslatable, TranslatableKey } from "./resumeData";

export interface IHeaderProps {
  lang: TranslatableKey;
  name: string;
  jobTitle: string;
  address: ITranslatable;
  phone: string;
  email: string;
  websiteUrl: string;
  linkedInUrl: string;
}

export const Header: React.FC<IHeaderProps> = ({
  lang,
  name,
  jobTitle,
  address,
  phone,
  email,
  websiteUrl,
  linkedInUrl,
}) => {
  const separator = <> &nbsp;•&nbsp; </>;

  return (
    <div className="flex flex-col items-center text-center md:mt-4 md:flex-row md:items-start md:text-left print:flex-row print:items-start print:text-left gap-6 print:gap-8">
      <img
        src="pieter.jfif"
        alt="Pieter De Witte"
        className="w-[90px] h-[90px] rounded-full"
      />
      <div>
        <h1 className="text-3xl font-bold text-cyan-700">{name}</h1>
        <p className="text-lg text-slate-800">{jobTitle}</p>
        <p className="text-slate-500 print:text-slate-400 print:mt-2">
          {address[lang]}
          {separator}
          <a
            className="hover:underline"
            href={`tel:${phone.replace(/\s+/g, "")}`}
          >
            {phone}
          </a>
          {separator}
          <a
            className="hover:underline"
            href={`mailto:${email}`}
            target="_blank"
          >
            {email}
          </a>
          <span className="inline print:hidden">{separator}</span>
          <span className="hidden print:inline">
            <br />
          </span>
          <a
            className="hover:underline"
            href={`https://www.${linkedInUrl}`}
            target="_blank"
          >
            {linkedInUrl}
          </a>
          <span className="hidden print:inline">
            {separator}
            <a
              className="hover:underline"
              href={`https://www.${websiteUrl}`}
              target="_blank"
            >
              {websiteUrl}
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};
