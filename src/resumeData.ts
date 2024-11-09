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
  intro: ITranslatable;
  skills: ISkillTopic[];
  experience: IExperience[];
  education: IExperience[];
  recommendations: IRecommendation[];
  ui: {
    introTitle: ITranslatable;
    skillsTitle: ITranslatable;
    experienceTitle: ITranslatable;
    educationTitle: ITranslatable;
    recommendationsTitle: ITranslatable;
    languageToggle: ITranslatable;
    readMore: ITranslatable;
  };
}

export interface ITranslatable {
  en: string;
  nl: string;
}

export interface IHighlight extends ITranslatable {
  url?: string;
}

export type TranslatableKey = keyof ITranslatable;

export interface IExperience {
  business: string;
  location: ITranslatable;
  timespan: ITranslatable;
  jobTitle: ITranslatable;
  highlights: IHighlight[];
}

export interface ISkillTopic {
  topic: ITranslatable;
  language?: string;
  topSkills: string[];
  otherSkills: string[];
}

export interface IRecommendation {
  name: string;
  relation: ITranslatable;
  text: ITranslatable;
  isAvailableOnLinkedIn: boolean;
  linkedInUrl: string;
  thumb: string;
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
  intro: {
    en: `Well-rounded full stack web engineer with extensive experience in defining, designing, developing, deploying, maintaining, and managing web-based applications. Over 23 years of experience in web development. Self-motivated, self-taught, dedicated, and results-oriented. Proved myself in startup and enterprise environments. Collaborative and humble attitude, ready to work in lead role or as individual contributor.
Experience combining different roles: backend engineer, frontend engineer, database engineer, UI/UX designer, project manager, architect, team leader, people manager, devops engineer, product owner, etc. Used to working closely with other teams and clients to deliver high quality products.
Released first standalone website in 2001, at the age of 14. Started building websites on GeoCities, when animated gifs were trendy and rounded corners were built by chopping up images and placing them in HTML tables. Since then, building apps has been my life. I'm eager to learn new things and help grow businesses.`,
    /*
I am a full stack web engineer, with a passion for designing and building web apps that people love.
I released my first standalone website in 2001, at the age of 14. I started building websites on GeoCities, when animated gifs were trendy and rounded corners were built by chopping up images and placing them in HTML tables.  Ever since, building apps has been a hobby, and later my profession.
I love building apps and features that make a difference. I think further than the specs and create solutions that clients love. I like to collaborate with other engineers to merge different perspectives into a great product.
Throughout my career I have worn multiple hats: backend engineer, frontend engineer, database engineer, UI/UX designer, project manager, architect, team leader, people manager, devops engineer, client advocate, etc. 
I'm eager to learn new things and help grow the business wherever possible.`,*/
    nl: `Ik ben een full stack web engineer, met een passie voor het ontwerpen en bouwen van webapps waar mensen van houden.
In 2001, op 14-jarige leeftijd, heb ik mijn eerste website gelanceerd. Ik begon met het bouwen van websites op GeoCities toen geanimeerde gifs nog trendy waren en afgeronde hoeken in HTML met afbeeldingen werden gemaakt. Sindsdien is het bouwen van apps een hobby en later mijn beroep geworden.
Ik hou ervan om apps te bouwen die een een impact hebben. Ik denk verder dan de specificaties en creëer oplossingen waar klanten dol op zijn. Ik werk graag samen met andere engineers om verschillende perspectieven samen te voegen tot een geweldig product.
Gedurende mijn carrière heb ik meerdere rollen uitgevoerd: backend engineer, frontend engineer, database engineer, UI/UX designer, projectmanager, software architect, teamleider, people manager, devops engineer, client advocate, enz.
Ik sta te popelen om nieuwe dingen te leren en het bedrijf te helpen groeien.
`,
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
      otherSkills: ["JMeter", "Adobe Illustrator"],
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
      otherSkills: ["French (basic)", "German (minimal)"],
    },
    {
      topic: { en: "Languages", nl: "Talen" },
      language: "nl",
      topSkills: ["Nederlands (moedertaal)", "Engels (vloeiend)"],
      otherSkills: ["Frans (basis)", "Duits (beperkt)"],
    },
  ],
  experience: [
    {
      business: "Medallia",
      location: { en: "USA (Remote)", nl: "USA (Thuiswerk)" },
      jobTitle: {
        en: "Senior Staff Software Engineer & Manager",
        nl: "Senior Staff Software Engineer & Manager",
      },
      timespan: { en: "March 2021 - Present", nl: "Maart 2021 - Nu" },
      highlights: [
        {
          en: "Lead a global cross-functional team of 17 engineers across three continents",
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
      jobTitle: {
        en: "Senior Software Developer & Project Manager",
        nl: "Senior Software Developer & Project Manager",
      },
      timespan: {
        en: "April 2017 - March 2021",
        nl: "April 2017 - March 2021",
      },
      highlights: [
        {
          en: "Designed and built flexible reporting solution giving clients full flexibility in building reports that show the most important information, matching their house style",
          nl: "",
          url: "https://www.checkmarket.com/survey-tool/reporting/",
        },
        {
          en: "Built a custom scripting language that clients can use to personalize and enhance their surveys and reports",
          nl: "",
          url: "https://www.checkmarket.com/kb/survey-scripting-language/",
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
      jobTitle: {
        en: "Software Developer & IT Manager",
        nl: "Software Developer & IT Manager",
      },
      timespan: {
        en: "August 2009 - April 2017",
        nl: "Augustus 2009 - April 2017",
      },
      highlights: [
        {
          en: "Lead a project to modernize IT operations for one of Europe's biggest Metal music festivals, building software to scan visitors, register crew, improve communication etc.",
          nl: "",
        },
        {
          en: "Designed and implemented UI/UX for several highly used applications",
          nl: "",
        },
        {
          en: "Lead projects with international teams, delivering high quality innovative features, respecting deadlines and budget",
          nl: "",
        },
        {
          en: "Spent significant time with customers to understand their needs, and implement tailored solutions",
          nl: "",
        },
        {
          en: "Implemented several web and mobile apps using modern web technologies",
          nl: "",
        },
      ],
    },
    {
      business: "Straffe Koffie",
      location: {
        en: "Oud-Turnhout, Belgium",
        nl: "Oud-Turnhout, België",
      },
      jobTitle: {
        en: "Website developer - Self employed secondary occupation",
        nl: "Website-ontwikkelaar - Zelfstandig in bijberoep",
      },
      timespan: {
        en: "2008 - Present",
        nl: "2008 - Nu",
      },
      highlights: [
        {
          en: "Built custom WordPress websites for local businesses, mobile friendly and search engine optimized",
          nl: "",
        },
        {
          en: "Provided reliable CPanel and DirectAdmin web hosting for clients, using Postmark to enhance email deliverability",
          nl: "",
        },
        {
          en: "easter egg",
          nl: "easter egg",
        },
        {
          en: `Example: gevelrenovatiesvandun.be: website (incl. logo design) for local construction business`,
          nl: "",
          url: "https://gevelrenovatiesvandun.be/",
        },
        {
          en: "Example: justfoods.be: multilingual website for a organic food producer",
          nl: "",
          url: "https://justfoods.be/",
        },
      ],
    },
  ],
  education: [
    {
      business: "Thomas More University of Applied Sciences",
      location: { en: "Geel, Belgium", nl: "Geel, België" },
      jobTitle: {
        en: "Bachelor Applied Computer Sciences - Graduated Summa Cum Laude (With Highest Praise)",
        nl: "Bachelor Toegepaste Informatica - Afgestudeerd met grootste onderscheiding",
      },
      timespan: { en: "2006 - 2009", nl: "2006 - 2009" },
      highlights: [],
    },
  ],
  recommendations: [
    {
      name: "Brandon Smith",
      relation: {
        en: "Sr. Manager of Pieter at Medallia",
        nl: "Sr. Manager van Pieter bij Medallia",
      },
      text: {
        en: "Pieter is one of the most incredible engineers and team player that I have had the pleasure to work with.",
        nl: "Pieter is one of the most incredible engineers and team player that I have had the pleasure to work with.",
      },
      isAvailableOnLinkedIn: true,
      linkedInUrl: "https://www.linkedin.com/in/brandonsmith79/",
      thumb: "brandon.jfif",
    },
    {
      name: "Bart Mertens",
      relation: {
        en: "Team mate at CM & Medallia",
        nl: "Teamgenoot bij CM & Medallia",
      },
      text: {
        en: "He's the captain you need to ride the storm. Not afraid of making his hands dirty and enjoying the times of diving into the code.",
        nl: "He's the captain you need to ride the storm. Not afraid of making his hands dirty and enjoying the times of diving into the code.",
      },
      isAvailableOnLinkedIn: true,
      linkedInUrl: "https://www.linkedin.com/in/bart-mertens-5bab5445/",
      thumb: "bart.jfif",
    },
    {
      name: "Philippe Van Elst",
      relation: {
        en: "CEO at BMI Leisure (at the time)",
        nl: "CEO van BMI Leisure (toen)",
      },
      text: {
        en: "I am confident Pieter will make the difference at any company.",
        nl: "Ik ben ervan overtuigd dat Pieter het verschil zal maken bij elk bedrijf.",
      },
      isAvailableOnLinkedIn: false,
      linkedInUrl: "https://www.linkedin.com/in/philippe-van-elst-4750a67/",
      thumb: "philippe.jfif",
    },
    {
      name: "Abhishek Bhardwaj",
      relation: {
        en: "Team mate at Medallia",
        nl: "Teamgenoot bij Medallia",
      },
      text: {
        en: "Pieter is an overperformer who consistently exceeds expectations, not only with his technical expertise but also with his outstanding ability to lead and support his team.",
        nl: "Pieter is an overperformer who consistently exceeds expectations, not only with his technical expertise but also with his outstanding ability to lead and support his team.",
      },
      isAvailableOnLinkedIn: true,
      linkedInUrl: "https://www.linkedin.com/in/a6hishekbhardwaj",
      thumb: "abhishek.jfif",
    },
    {
      name: "Filip Meszaros",
      relation: {
        en: "Team mate at Medallia",
        nl: "Teamgenoot bij Medallia",
      },
      text: {
        en: "I am particularly impressed by Pieter’s ability to do more management work than some actual full-time managers, all on top of doing regular development.",
        nl: "I am particularly impressed by Pieter’s ability to do more management work than some actual full-time managers, all on top of doing regular development.",
      },
      isAvailableOnLinkedIn: true,
      linkedInUrl: "https://www.linkedin.com/in/filip-meszaros",
      thumb: "filip.jfif",
    },
    {
      name: "Erwin Dockx",
      relation: {
        en: "Team mate at CM & Medallia",
        nl: "Teamgenoot bij CM & Medallia",
      },
      text: {
        en: "Pieter has strong communication skills, excellent troubleshooting abilities, and is highly goal-oriented.",
        nl: "Pieter has strong communication skills, excellent troubleshooting abilities, and is highly goal-oriented.",
      },
      isAvailableOnLinkedIn: true,
      linkedInUrl: "https://www.linkedin.com/in/erwindockx",
      thumb: "erwin.jfif",
    },
  ],
  ui: {
    introTitle: { en: "Intro", nl: "Introductie" },
    skillsTitle: { en: "Skills", nl: "Vaardigheden" },
    experienceTitle: { en: "Experience", nl: "Ervaring" },
    educationTitle: { en: "Education", nl: "Onderwijs" },
    recommendationsTitle: { en: "Testimonials", nl: "Referenties" },
    languageToggle: { en: "Verander naar Nederlands", nl: "Switch to English" },
    readMore: { en: "Read more", nl: "Verder lezen" },
  },
};
