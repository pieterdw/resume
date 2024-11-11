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
    languageToggleTooltip: ITranslatable;
    readMore: ITranslatable;
    downloadAsPdf: ITranslatable;
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
  businessDescription: ITranslatable;
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
Experience combining different roles: backend engineer, frontend engineer, database engineer, UI/UX designer, project manager, software architect, team leader, people manager, devops engineer, product owner, etc. Used to working closely with other teams and clients to deliver high quality products.
Released first standalone website in 2001, at the age of 14. Started building websites on GeoCities, when animated gifs were trendy and rounded corners were built by chopping up images and placing them in HTML tables. Ever since, building apps has been a passion. 
Always eager to learn new things and help grow businesses.`,
    nl: `Veelzijdige full stack web engineer met uitgebreide ervaring in het ontwerpen, ontwikkelen, implementeren, onderhouden en beheren van webapplicaties. Meer dan 23 jaar ervaring in webontwikkeling. Gemotiveerd, autodidact, toegewijd en resultaatgericht. Succesvol in zowel startup- en enterprise-omgevingen. Constructieve houding, klaar om te werken in een leidende rol of als individuele medewerker.
Ervaring met het combineren van verschillende rollen: backend engineer, frontend engineer, database engineer, UI/UX designer, projectmanager, software architect, teamleider, people manager, devops engineer, product owner, etc. Gewend om nauw samen te werken met andere teams en klanten om producten van hoge kwaliteit op te leveren.
Eerste zelfstandige website uitgebracht in 2001, op 14-jarige leeftijd. Begonnen met het bouwen van websites op GeoCities, toen animated gifs trendy waren en afgeronde hoeken werden gemaakt door afbeeldingen in HTML-tabellen te plaatsen. Sindsdien is het bouwen van apps een passie. 
Altijd enthousiast om nieuwe dingen te leren, en bedrijven te helpen groeien.
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
        "Tailwind",
        "SolidJS",
        "Vite",
        "Parcel",
      ],
      otherSkills: ["Accessibility", "NextJS", "Angular", "Webpack"],
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
        "Redis",
      ],
      otherSkills: ["Docker", "Azure"],
    },
    {
      topic: { en: "Software", nl: "Software" },
      topSkills: [
        "Visual Studio Code",
        "Visual Studio",
        "Jira",
        "Azure DevOps",
        "Git",
        "Sentry",
        "Adobe Photoshop",
        "SQL Server Management Studio",
        "CPanel",
        "DirectAdmin",
        "WordPress",
        "GitHub",
        "GitLab",
      ],
      otherSkills: ["JMeter", "Adobe Illustrator", "Subversion"],
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
      businessDescription: {
        en: "Silicon Valley enterprise, providing the #1 enterprise experience platform for mission critical insights and action",
        nl: "Silicon Valley bedrijf met het #1 enterprise experience platform voor ervaringen van klanten, personeel, burgers en patiënten",
      },
      location: { en: "USA (Remote)", nl: "USA (Thuiswerk)" },
      jobTitle: {
        en: "Senior Staff Software Engineer & Manager",
        nl: "Senior Staff Software Engineer & Manager",
      },
      timespan: { en: "2021 - Present", nl: "2021 - Nu" },
      highlights: [
        {
          en: "Lead a global cross-functional team of 17 software and QA engineers across three continents",
          nl: "Leiding gegeven aan een multidiciplinair team van 17 softwareontwikkelaars en QA engineers, verspreid over drie continenten",
        },
        {
          en: "Designed modern app architecture using .NET 8 and ReactJS to improve performance, stability and development speed",
          nl: "Ontwerpen van moderne app-architectuur ter verbetering van performantie, stabiliteit en ontwikkelsnelheid",
        },
        {
          en: "Worked with executives and other teams to plan and execute ambitious roadmap",
          nl: "Samenwerking met management en andere teams om ambitieuze roadmap te plannen en uit te voeren",
        },
        {
          en: "Created tool to automate multiple repetitive, error-prone tasks for all engineers",
          nl: "Tool gemaakt om een aantal repetitieve, foutgevoelige taken voor ontwikkelaars te automatiseren",
        },
        {
          en: "Developed high volume email solution to unify email workflows and improve scalability",
          nl: "Oplossing ontwikkeld voor grote e-mailvolumes, om e-mail workflows te stroomlijnen en de schaalbaarheid te verbeteren",
        },
        {
          en: "Provided mentorship to team members, coaching them to improve code quality and speed",
          nl: "Mentor en coach voor teamleden, met focus op verbeteren van code-kwaliteit en snelheid",
        },
        {
          en: "Improved software stability and reduced customer reported incidents by 40%",
          nl: "Verbetering stabiliteit software, escalaties door klanten verminderd met 40%",
        },
      ],
    },
    {
      business: "CheckMarket",
      businessDescription: {
        en: "Powerful survey software aimed at enterprises, acquired by Medallia",
        nl: "Krachtige enquêtesoftware gericht op grote ondernemingen, overgenomen door Medallia",
      },
      location: {
        en: "Turnhout, Belgium",
        nl: "Turnhout, België",
      },
      jobTitle: {
        en: "Senior Software Developer & Project Manager",
        nl: "Senior Software Developer & Project Manager",
      },
      timespan: {
        en: "2017 - 2021",
        nl: "2017 - 2021",
      },
      highlights: [
        {
          en: "Designed and built reporting solution giving clients full flexibility in building reports that show the most important information, matching their house style",
          nl: "Ontwierp en bouwde een rapportageoplossing die klanten volledige flexibiliteit biedt bij het samenstellen van rapporten die de meest nuttige info naar boven brengen",
          url: "https://www.checkmarket.com/survey-tool/reporting/",
        },
        {
          en: "Built a custom scripting language that clients can use to personalize and enhance their surveys and reports",
          nl: "Een aangepaste scripttaal ontwikkeld die klanten kunnen gebruiken om hun enquêtes en rapporten te personaliseren",
          url: "https://www.checkmarket.com/kb/survey-scripting-language/",
        },
        {
          en: "Proposed and executed several process improvements to speed up development significantly, including CI/CD",
          nl: "Diverse procesverbeteringen voorgesteld en uitgevoerd om de softwareontwikkeling aanzienlijk te versnellen, waaronder CI/CD",
        },
        {
          en: "Implemented COM Interop solution to enable usage of modern .NET code inside Classic ASP apps",
          nl: "COM Interop oplossing geïmplementeerd voor het gebruik van moderne .NET code binnen klassieke ASP apps",
        },
        {
          en: "Designed several impactful UI/UX improvements that made the software more modern and easier to use",
          nl: "Diverse ingrijpende UI/UX-verbeteringen ontworpen die de software moderner en gebruiksvriendelijker maakten",
        },
        {
          en: "Worked directly with clients to better understand their needs, and improved the software based on this feedback",
          nl: "Werkte rechtstreeks met klanten om hun behoeften beter te begrijpen, ter verbetering van de software",
        },
        {
          en: "Fully automated a workflow to set up white label domains, saving staff and clients hundreds of hours every year",
          nl: "Volledig geautomatiseerde workflow gemaakt voor het instellen van white label domeinen, waardoor klanten en medewerkers honderden uren per jaar bespaarden",
        },
      ],
    },
    {
      business: "BMI Leisure",
      businessDescription: {
        en: "World leader in karting and entertainment center software",
        nl: "Wereldleider in software voor kartings en entertainment centers",
      },
      location: {
        en: "Geel, Belgium",
        nl: "Geel, België",
      },
      jobTitle: {
        en: "Software Developer & IT Manager",
        nl: "Software Developer & IT Manager",
      },
      timespan: {
        en: "2009 - 2017",
        nl: "2009 - 2017",
      },
      highlights: [
        {
          en: "Lead a project to modernize IT operations for one of Europe's biggest Metal music festivals, building software to scan visitors, register crew, improve communication etc.",
          nl: "Leidde een project om de IT-activiteiten voor een van Europa's grootste metal muziekfestivals te moderniseren, door software te bouwen om bezoekers te scannen, personeel te registreren, communicatie te verbeteren, enz.",
        },
        {
          en: "Designed and implemented UI/UX for several highly used applications",
          nl: "UI/UX ontworpen en geïmplementeerd voor verschillende veelgebruikte applicaties",
        },
        {
          en: "Lead projects with international team, delivering high quality innovative features, respecting deadlines and budget",
          nl: "Internationaal team aangestuurd, met oplevering van hoogkwalitatieve innovaties, binnen budget en deadlines",
        },
        {
          en: "Spent significant time with customers to understand their needs, and implement tailored solutions",
          nl: "Tijd met klanten gespendeerd om hun behoeften te begrijpen en oplossingen op maat te implementeren",
        },
        {
          en: "Implemented several web and mobile apps using modern web technologies",
          nl: "Diverse web- en mobiele apps geïmplementeerd met moderne webtechnologieën",
        },
      ],
    },
    {
      business: "Straffe Koffie",
      businessDescription: {
        en: "Self employed secondary occupation, creating websites and solutions for local businesses",
        nl: "Zelfstandige in bijberoep, gericht op websites en oplossingen voor lokale bedrijven",
      },
      location: {
        en: "Oud-Turnhout, Belgium",
        nl: "Oud-Turnhout, België",
      },
      jobTitle: {
        en: "Website developer",
        nl: "Website-ontwikkelaar",
      },
      timespan: {
        en: "2008 - Present",
        nl: "2008 - Nu",
      },
      highlights: [
        {
          en: "Built custom WordPress websites for local businesses, mobile friendly and search engine optimized",
          nl: "Bouwen van aangepaste WordPress websites voor lokale bedrijven, mobielvriendelijk en geoptimaliseerd voor zoekmachines",
        },
        {
          en: "Provided reliable CPanel and DirectAdmin web hosting for clients, using Postmark to enhance email deliverability",
          nl: "Betrouwbare CPanel en DirectAdmin webhosting voor klanten, met Postmark om email deliverability te verbeteren",
        },
        {
          en: "easter egg",
          nl: "easter egg",
        },
        {
          en: "Example: gevelrenovatiesvandun.be: website and logo for local construction business",
          nl: "Voorbeeld: gevelrenovatiesvandun.be: website en logo voor bedrijf van gevelrenovaties en reinigingswerken",
          url: "https://gevelrenovatiesvandun.be/",
        },
        {
          en: "Example: justfoods.be: multilingual website for organic food producer",
          nl: "Voorbeeld: justfoods.be: meertalige website voor biologische voedselproducent",
          url: "https://justfoods.be/",
        },
        {
          en: "Example: barzoen.cafe: website for local bar/restaurant and concert venue",
          nl: "Voorbeeld: barzoen.cafe: website voor lokale brasserie en concertlocatie",
          url: "https://barzoen.cafe/",
        },
      ],
    },
  ],
  education: [
    {
      business: "Thomas More University of Applied Sciences",
      businessDescription: {
        en: "",
        nl: "",
      },
      location: { en: "Geel, Belgium", nl: "Geel, België" },
      jobTitle: {
        en: "Bachelor Applied Computer Sciences - Summa Cum Laude (With Highest Praise)",
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
        nl: "Ik ben ervan overtuigd dat Pieter het verschil zal maken bij eender welk bedrijf.",
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
        en: "I am particularly impressed by Pieter's ability to do more management work than some actual full-time managers, all on top of doing regular development.",
        nl: "I am particularly impressed by Pieter's ability to do more management work than some actual full-time managers, all on top of doing regular development.",
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
    languageToggle: { en: "NL", nl: "EN" },
    languageToggleTooltip: {
      en: "Nederlandstalige versie bekijken",
      nl: "View English version",
    },
    readMore: { en: "Read more", nl: "Verder lezen" },
    downloadAsPdf: { en: "Download as PDF", nl: "Download als PDF" },
  },
};
