export interface IResumeData {
  main: {
    name: string;
    jobTitle: string;
    address: ITranslatable;
    phone: string;
    email: string;
    websiteUrl: string;
    linkedInUrl: string;
  };
  about: ITranslatable;
  skills: ISkillTopic[];
  experience: IExperience[];
  ui: {
    skillsTitle: ITranslatable;
    experienceTitle: ITranslatable;
    languageToggle: ITranslatable;
  };
}

export interface ITranslatable {
  en: string;
  nl: string;
}

export type TranslatableKey = keyof ITranslatable;

export interface IExperience {
  business: string;
  location: ITranslatable;
  timespan: ITranslatable;
  jobTitle: string;
  highlights: ITranslatable[];
}

export interface ISkillTopic {
  topic: ITranslatable;
  language?: string;
  topSkills: string[];
  otherSkills: string[];
}

export const resumeData: IResumeData = {
  main: {
    name: "Pieter De Witte",
    jobTitle: "Senior Full Stack Developer & Manager",
    address: { en: "Turnhout, Belgium", nl: "Turnhout, België" },
    phone: "+32 472 735 666",
    email: "pieterdewitte@gmail.com",
    websiteUrl: "straffekoffie.com/pieter",
    linkedInUrl: "linkedin.com/in/pieterdw",
  },
  about: {
    en: "",
    nl: "",
  },
  skills: [
    {
      topic: { en: "Programming Languages", nl: "Programmeertalen" },
      topSkills: ["C#", "JavaScript (ES6+)", "TypeScript", "Microsoft SQL"],
      otherSkills: ["PowerShell", "PHP", "MySql", "VBScript", "Firebird SQL"],
    },
    {
      topic: { en: "Frontend Technologies", nl: "Frontend technologiën" },
      topSkills: [
        "ReactJS",
        "HTML",
        "CSS",
        "SASS",
        "SolidJS",
        "Tailwind",
        "Vite",
        "Parcel",
      ],
      otherSkills: ["NextJS", "Angular", "Webpack"],
    },
    {
      topic: { en: "Backend Technologies", nl: "Backend technologiën" },
      topSkills: [
        "ASP.NET Core",
        ".NET 8",
        "Node.js",
        "Classic ASP",
        "Razor Pages",
        "ASP.NET MVC",
        "Redis",
        "Dapper",
      ],
      otherSkills: [],
    },
    {
      topic: { en: "Cloud & Others", nl: "Cloud & overige" },
      topSkills: [
        "AWS Lambda",
        "Amazon Simple Email Service",
        "Amazon CloudFront",
        "Amazon EC2",
        "Cloudflare",
        "DNS Configuration",
      ],
      otherSkills: ["Docker", "Azure"],
    },
    {
      topic: { en: "Software", nl: "Software" },
      topSkills: [
        "Visual Studio Code",
        "Visual Studio",
        "Git",
        "Jira",
        "Azure DevOps",
        "Sentry",
        "Adobe Photoshop",
        "SQL Server Management Studio",
        "CPanel",
        "DirectAdmin",
        "WordPress",
        "GitHub",
        "GitLab",
      ],
      otherSkills: ["JMeter", "Adobe Illustrator", "Davinci Resolve"],
    },
    {
      topic: { en: "Soft Skills", nl: "Soft skills" },
      topSkills: [
        "Team Lead",
        "Project Manager",
        "Product Owner",
        "People Manager",
        "Scrum Master",
        "Mentor",
        "Architect",
      ],
      otherSkills: ["UX Designer", "UI Designer"],
    },
    {
      topic: { en: "Languages", nl: "Talen" },
      language: "en",
      topSkills: ["Dutch (native speaker)", "English (fluent)"],
      otherSkills: ["French (basic)", "German (basic)"],
    },
    {
      topic: { en: "Languages", nl: "Talen" },
      language: "nl",
      topSkills: ["Nederlands (moedertaal)", "Engels (vloeiend)"],
      otherSkills: ["Frans (basis)", "Duits (basis)"],
    },
  ],
  experience: [
    {
      business: "Medallia",
      location: { en: "USA (Remote)", nl: "USA (Thuiswerk)" },
      jobTitle: "Senior Staff Software Engineer & Manager",
      timespan: { en: "March 2021 - Present", nl: "Maart 2021 - Nu" },
      highlights: [
        {
          en: "Lead a global cross-functional team of 17 software developers and QA engineers based in three continents",
          nl: "Leiding gegeven aan een multidiciplinair team van 17 softwareontwikkelaars en QA engineers",
        },
        {
          en: "Designed modern app architecture using .NET 8 and ReactJS to improve performance, stability and development speed",
          nl: "Ontwerpen van moderne app-architectuur ter verbetering van performantie, stabiliteit en ontwikkelsnelheid",
        },
        {
          en: "Worked with executives and other teams to plan and execute ambitious roadmap",
          nl: "Samenwerking met management en andere teams om een ambitieuze roadmap te plannen en uit te voeren",
        },
        {
          en: "Created a tool to automate a number of repetitive, error-prone tasks for all engineers",
          nl: "",
        },
        {
          en: "Developed high volume email solution to unify email patterns and improve scalability",
          nl: "",
        },
        {
          en: "Provided mentorship to team members, coaching them to improve code quality and speed",
          nl: "",
        },
        {
          en: "Improved software stability and reduced customer reported incidents by 40%",
          nl: "",
        },
      ],
    },
    {
      business: "CheckMarket",
      location: {
        en: "Turnhout, Belgium - Acquired by Medallia",
        nl: "Turnhout, België - Overgenomen door Medallia",
      },
      jobTitle: "Senior Software Developer & Project Manager",
      timespan: {
        en: "April 2017 - March 2021",
        nl: "April 2017 - March 2021",
      },
      highlights: [
        {
          en: "Designed and built flexible reporting solution giving clients full flexibility in building reports that show the most important information, matching their house style",
          nl: "",
        },
        {
          en: "Built a custom scripting language that clients can use to personalize and enhance their surveys and reports",
          nl: "",
        },
        {
          en: "Proposed and executed several process improvements to speed up development significantly, including CI/CD",
          nl: "",
        },
        {
          en: "Implemented COM Interop solution to enable usage of modern .NET code inside Classic ASP apps",
          nl: "",
        },
        {
          en: "Designed several impactful UI/UX improvements that made the software more modern and easier to use",
          nl: "",
        },
        {
          en: "Worked directly with clients to better understand their needs, and improved the software based on this feedback",
          nl: "",
        },
        {
          en: "Fully automated a workflow to set up white label domains, saving staff and clients hundreds of hours every year",
          nl: "",
        },
      ],
    },
    {
      business: "BMI Leisure",
      location: {
        en: "Geel, Belgium",
        nl: "Geel, België",
      },
      jobTitle: "Software Developer & IT Manager",
      timespan: {
        en: "August 2009 - April 2017",
        nl: "Augustus 2009 - April 2017",
      },
      highlights: [
        {
          en: "Spent significant time with customers to understand their needs, and implement tailored solutions",
          nl: "",
        },
        {
          en: "Lead a project to modernize IT operations for one of Europe's biggest Metal music festivals, building software to scan visitors, register crew, improve communication etc.",
          nl: "",
        },
        {
          en: "Designed and implemented UI/UX for several high volume applications",
          nl: "",
        },
        {
          en: "Lead projects with international teams, delivering high quality innovative features on time",
          nl: "",
        },
        {
          en: "Implemented several web and mobile apps using modern web technologies",
          nl: "",
        },
      ],
    },
  ],
  ui: {
    skillsTitle: { en: "Skills", nl: "Vaardigheden" },
    experienceTitle: { en: "Experience", nl: "Ervaring" },
    languageToggle: { en: "Verander naar Nederlands", nl: "Switch to English" },
  },
};
