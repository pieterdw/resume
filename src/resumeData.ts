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
  projects: IProject[];
  ui: {
    introTitle: ITranslatable;
    skillsTitle: ITranslatable;
    experienceTitle: ITranslatable;
    educationTitle: ITranslatable;
    recommendationsTitle: ITranslatable;
    addendumTitle: ITranslatable;
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

export interface IProject {
  name: string;
  text: string[];
  role: string;
  tech?: string;
  teamSize?: string;
  url?: string;
  timeSpan: string;
  category: TProjectCategory;
}

export type TProjectCategory =
  | "CheckMarket / Medallia"
  | "BMI Leisure"
  | "Straffe Koffie"
  | "Hobby";

export const resumeData: IResumeData = {
  main: {
    name: "Pieter De Witte",
    jobTitle: "Senior Full Stack Developer & Senior Manager",
    address: { en: "Oud-Turnhout, Belgium", nl: "Oud-Turnhout, België" },
    phone: "+32 472 735 666",
    email: "pieterdewitte@gmail.com",
    websiteUrl: "straffekoffie.com/pieter",
    linkedInUrl: "linkedin.com/in/pieterdw",
  },
  intro: {
    en: `Well-rounded full stack web engineer and manager with extensive experience in defining, designing, developing, deploying, maintaining, and managing web-based applications. Over 23 years of experience in web development. Self-motivated, self-taught, dedicated, and results-oriented. Proved myself in startup and enterprise environments. Collaborative and humble attitude, ready to work in a lead role or as individual contributor.
Experience combining different roles: backend engineer, frontend engineer, database engineer, UI/UX designer, project manager, software architect, team leader, people manager, devops engineer, product owner, etc. Used to working closely with other teams and clients to deliver high quality products.
Released first standalone website in 2001, at the age of 14. Started building websites on GeoCities, when animated gifs were trendy and rounded corners were built by chopping up images and placing them in HTML tables. Ever since, building apps has been a passion. 
Always eager to learn new things and help grow businesses.`,
    nl: `Veelzijdige full stack web engineer en manager met uitgebreide ervaring in het ontwerpen, ontwikkelen, implementeren, onderhouden en beheren van webapplicaties. Meer dan 23 jaar ervaring in webontwikkeling. Gemotiveerd, autodidact, toegewijd en resultaatgericht. Succesvol in zowel startup- en enterprise-omgevingen. Constructieve houding, klaar om te werken in een leidende rol of als individuele medewerker.
Ervaring met het combineren van verschillende rollen: backend engineer, frontend engineer, database engineer, UI/UX designer, projectmanager, software architect, teamleider, people manager, devops engineer, product owner, etc. Gewend om nauw samen te werken met andere teams en klanten om hoogkwalitatieve producten op te leveren.
Eerste zelfstandige website uitgebracht in 2001, op 14-jarige leeftijd. Begonnen met het bouwen van websites op GeoCities, toen animated gifs trendy waren en afgeronde hoeken werden gemaakt door afbeeldingen in HTML-tabellen te plaatsen. Sindsdien is het bouwen van apps een passie. 
Altijd enthousiast om nieuwe dingen te leren, en bedrijven te helpen groeien.
`,
  },
  skills: [
    {
      topic: { en: "Programming Languages", nl: "Programmeertalen" },
      topSkills: ["C#", "JavaScript", "TypeScript", "Microsoft SQL"],
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
        "Bootstrap",
        "jQuery",
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
      otherSkills: ["PHP"],
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
        "GitHub Copilot",
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
      business: "CheckMarket / Medallia",
      businessDescription: {
        en: "CheckMarket is an SAAS enterprise survey platform, founded in Belgium. In 2021 we got acquired by Medallia, a global leader based in Silicon Valley. Medallia provides the #1 enterprise experience platform for mission critical insights and action.",
        nl: "CheckMarket is gestart als een Belgisch SAAS enquêteplatform. In 2021 werden we overgenomen door Medallia, een wereldleider uit Silicon Valley. Medallia is het #1 enterprise experience platform voor ervaringen van klanten, personeel, burgers en patiënten.",
      },
      location: {
        en: "Remote",
        nl: "Remote",
      },
      jobTitle: {
        en: "Senior Staff Software Engineer & Senior Manager",
        nl: "Senior Staff Software Engineer & Senior Manager",
      },
      timespan: { en: "2017 - Present", nl: "2017 - Nu" },
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
          en: "Provided mentorship to team members, coaching them to improve code quality and speed",
          nl: "Mentor en coach voor teamleden, met focus op verbeteren van code-kwaliteit en snelheid",
        },
        {
          en: "Improved software stability and reduced customer reported incidents by 40%",
          nl: "Verbetering stabiliteit software, escalaties door klanten verminderd met 40%",
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
          en: "Developed high volume email solution to unify email workflows and improve scalability",
          nl: "Oplossing ontwikkeld voor verzenden van grote emailvolumes, om e-mail workflows te stroomlijnen en de schaalbaarheid te verbeteren",
        },
      ],
    },
    {
      business: "BMI Leisure",
      businessDescription: {
        en: "World leader in karting and entertainment center software, offering SAAS solutions for all aspects of the business.",
        nl: "Wereldleider in software voor kartings en entertainment centers, met SAAS oplossingen voor alle aspecten van de zaak.",
      },
      location: {
        en: "Geel, Belgium",
        nl: "Geel, België",
      },
      jobTitle: {
        en: "Software Developer & Project Manager",
        nl: "Software Developer & Project Manager",
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
        en: "Self employed secondary occupation, creating websites and solutions for local businesses.",
        nl: "Zelfstandige in bijberoep, gericht op websites en oplossingen voor lokale bedrijven.",
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
  projects: [
    {
      name: "Migration from Classic ASP to .NET 8",
      role: "Project manager, team lead, architect, product owner, full stack developer, scrum master",
      teamSize:
        "8 (2 backend developers, 2 frontend developers, 1 database developer, 1 manual QA, 1 automation QA, and I)",
      tech: "C#, .NET 8, ASP.NET Core, React, TypeScript, Dapper, MS SQL, Micro frontends",
      timeSpan: "2021 - 2024",
      category: "CheckMarket / Medallia",
      text: [
        "In order to improve scalability and reduce costs, we set a multi year target to move our software to a cloud agnostic Docker/Kubernetes architecture. The first and initiative was to move from Windows to Linux. This required us to move away from Classic ASP.",
        "I architected a solution that allowed us to move from Classic ASP to .NET gradually, page by page. This resulted in a regular release cadence and minimal impact on clients.",
        "The backend was built using ASP.NET Core Razor Pages and WebAPI, using Dapper for data access. The frontend used micro frontends based on React, TypeScript and a in-house component library. I ensured we had building blocks to reduce boilerplate and make development straightforward.",
        "The team consisted of junior, medior and senior profiles. I implemented processes to give everyone ownership over their work. There were clear guidelines and regular checkins to ensure nobody was blocked.",
      ],
    },
    {
      name: "New Survey Interface",
      role: "Project manager, team lead, architect, product owner, full stack engineer (frontend, backend, database)",
      teamSize:
        "4 (1 frontend engineer, 1 backend engineer, 1 full stack engineer and I) + external UI development team",
      tech: "SolidJS, TypeScript, C#, .NET 8, ASP.NET Core, MS SQL, MS Test, Moq, JMeter",
      timeSpan: "2024",
      category: "CheckMarket / Medallia",
      text: [
        "The survey interface was the most important part of our software. It was used by millions of people every month to respond to surveys. As part of the migration initiative, the survey interface needed to be migrated to .NET 8. Its architecture needed to be future proof to support future growth and development.",
        "The existing in-house React component library didn't tick the right boxes for this project. We needed something that was fast, light and stylable. I managed to set up a collaboration with the company's UI team to build a new component library for this project, and SolidJS was chosen as the FE library.",
        "I built several POCs to find the optimal stack and eventually built the frontend, backend and database foundations myself. This resulted in a full end to end prototype that was ready to be worked on by multiple developers. To ensure top quality code, I implemented Test Driven Development (TDD), Dependency Injection, extensive linting, and more. I used load testing early on everything was performant and scalable.",
      ],
    },
    {
      name: "High Throughput Email Solution",
      role: "Architect, Developer",
      teamSize: "2 (1 database engineer and I)",
      tech: "C#, .NET 8, AWS Simple Email Service, Dapper, MS SQL",
      timeSpan: "2023",
      category: "CheckMarket / Medallia",
      text: [
        "I architected and implemented a new email solution to replace an outdated and slighly instable system. The new system provided one unified way of handling outgoing emails. Traceability was improved by storing all those emails in a database, replacing temporary files on web servers. By closely integrating with AWS, we were able to link every single bounce and complaint to the original email.",
        "The solution was highly scalable. Using multiple multi threaded micro services, emails went out nearly instantaneous. The system also ensured that every outgoing email was fully compliant, respecting SPF and DKIM.",
      ],
    },
    {
      name: "Environmental: Developer Productivity Tool",
      role: "Developer",
      tech: "C#, .NET 8, Git",
      timeSpan: "2022",
      category: "CheckMarket / Medallia",
      text: [
        "After noticing that the team often lost valuable time with repetitive chores, I decided to write a command line tool to automate some of those. This tool handled some configuration and git chores when switching between development environments. It also allowed developers to quickly launch pull requests.",
      ],
    },
    {
      name: "CheckMarket ReportBuilder",
      role: "Architect, designer, full stack developer (frontend + backend), devops engineer",
      teamSize: "2 (DB developer and I)",
      tech: "React, TypeScript, Redux, Bootstrap, SASS, C#, .NET 6, ASP.NET Core, Dapper, Node.js",
      timeSpan: "2019",
      category: "CheckMarket / Medallia",
      url: "https://www.checkmarket.com/survey-tool/reporting/",
      text: [
        "The CheckMarket ReportBuilder was built to replace an outdated reporting solution. Our clients wanted more ways to visualize data. This required a new solution, built from the ground up.",
        "I designed and built a reporting solution that was easy to use and still extremely powerful. The UI was built as a React Single Page Application. It featured a live preview of changes and a undo/redo option. Clients could fully customize reports to match their house style using simple controls and even custom CSS.",
        'The backend was built using ASP.NET Core, putting the foundations for many future ASP.NET Core projects. It also featured a "Smart report" option, which created a custom report based on the content of the survey. This shared a lot of code with the UI, so it was built using Node,js.',
        "To ensure a smooth user experience and fast system performance, there were several performance optimizations such as caching, lazy loading, debounced bulk saving, etc.",
      ],
    },
    {
      name: "Custom Domain Automation",
      role: "Architect, full stack developer (frontend + backend + database), AWS devops engineer",
      teamSize: "1",
      tech: "AWS CloudFront, AWS Route53, AWS Simple Email Service, AWS Certificate Manager, C#, .NET 6, ASP.NET Core, AWS SDK, Bootstrap",
      timeSpan: "2019",
      category: "CheckMarket / Medallia",
      text: [
        "As our client base kept growing, more clients wanted to use a custom domain to personalize their surveys. Setting up those domains was a tedious manual process, including lots of back and forth with clients. To save time, I proposed a plan to automate this fully.",
        "I created a solution that allowed clients to set up a custom domain without any intervention from the engineering team. After providing all details, clients would receive a page with the required DNS records. This page also indicated whether their DNS records were already correctly configured or not.",
        "Once clients had configured all DNS records, a background process would configure all infrastructure correctly on Amazon Web Services (AWS). After completion, clients could use their domain name to personalize their surveys and emails.",
      ],
    },
    {
      name: "Custom Scripting Language (CSL)",
      role: "Architect, backend developer, database developer",
      teamSize: "1",
      tech: "C#, .NET Standard, Handlebars, Dapper, MS SQL",
      timeSpan: "2019",
      category: "CheckMarket / Medallia",
      url: "https://www.checkmarket.com/kb/survey-scripting-language/",
      text: [
        "Many clients wanted more personalization and customization options for their surveys. There was an old system with variables but it was limited and the implemenation varied throughout the software.",
        "I designed a new powerful system with variables and operators, based on Handlebars. This allowed for nested variables and advanced scripting. It was implemented in a uniform way throughout the different product areas: surveys, reports, custom logic, etc. By using COM interop (ClassicBridge), even the Classic ASP code could utilize this scripting language.",
        "Based on client feedback, this was expanded over time. I added additional operators for UI like tooltips, modals, icons, etc.",
      ],
    },
    {
      name: "COM Interop between Classic ASP and .NET",
      role: "Architect, developer, devops engineer",
      teamSize: "1",
      tech: "VBScript, Classic ASP, C#, .NET 6, .NET Framework, COM interop, PowerShell",
      timeSpan: "2019",
      category: "CheckMarket / Medallia",
      text: [
        "The biggest part of our software was still written in Classic ASP, but all new development was done in .NET. We needed to allow Classic ASP to invoke this .NET code as well, but there was no good solution for this.",
        "I came up with a COM interop solution to expose the full power of our modern .NET Core codebase to Classic ASP, with very limited boilerplate code. This was a big boost to our development speed, since we didn't have to jump through hoops anymore to bring new features to Classic ASP. This was used to bring several impactful features to our Classic ASP code, including CSL, Caching, Email sending, etc.",
        "By building the right scripting and pipelines around it, deployments were fully automated.",
      ],
    },
    {
      name: "CI/CD Solution",
      role: "Architect, devops engineer",
      teamSize: "1",
      tech: "Azure DevOps, AWS CodeDeploy, PowerShell, Git",
      timeSpan: "2017",
      category: "CheckMarket / Medallia",
      text: [
        "To speed up development and releases, I set up Continuous Integration, enabling automatic builds, unit tests, and deployments to our test environments. This was built using PowerShell, and run using Azure DevOps pipelines.",
        "I also configured Continuous Delivery to production, replacing manual processes like FTP. With the new solution, you could mark a commit for production and it would automatically go live after all checks passed successfully.",
        "During this process, I also moved all code over from TFVS to Git.",
      ],
    },
    {
      name: "Music Festival Digitization",
      role: "Technical Project Lead, developer",
      teamSize: "10",
      tech: "C#, .NET Framework, WPF",
      timeSpan: "2010 - 2012",
      category: "BMI Leisure",
      text: [
        "We took on a challenging project to bring one of Europe's biggest metal music festivals to the digital era. We built and ran software for crew registration, visitor ticket scanning, and more. One of the most visible impact was the software to run all the video screens across the festival terrain. We displayed the line-up, any important information and even live football games.",
        "As the technical project lead I was involved with building the different apps. I was in close contact with different stakeholders including the festival organizers, to ensure everything went according to plan. During the festival, we ran a editorial team to control all content on the screens.",
      ],
    },
    {
      name: "Karting Positioning Software",
      role: "Technical Project Lead, developer, UI designer",
      teamSize: "2",
      tech: "C#, .NET Framework, WPF",
      timeSpan: "~ 2014",
      category: "BMI Leisure",
      url: "https://www.bmileisure.com/en/features/safety-positioning-for-karting",
      text: [
        "We built a real time kart positioning system. This software had multiple use cases, including safety: if a kart crashed, it would automatically slow down karts approaching the stopped vehicule. It also made it possible for friends to see more easily where everyone was on the track.",
        "As a technical project lead, I oversaw multiple test setups in karting tracks across Europe. We did trials with different hardware systems to find the perfect match. I worked together with an offshore engineer for the position algorithms, and developed the more visual aspects myself.",
      ],
    },
    {
      name: "Van Dun: Website and logo design",
      role: "Web developer, web designer",
      tech: "WordPress, PHP, SASS, Adobe Photoshop, Adobe Illustrator",
      timeSpan: "2020",
      category: "Straffe Koffie",
      url: "https://gevelrenovatiesvandun.be/",
      text: [
        "I designed a house style, including logo for this young home renovation business. It was meant to be a clean, modern design. The website features a few before/after sliders. The website was built using Wordpress, and some customization were built using PHP. Some of the styling was built using SASS.",
      ],
    },
    {
      name: "Mighty: Website Build and Deployment Library",
      role: "Developer",
      tech: "Node.js, TypeScript, Parcel",
      timeSpan: "2019 - 2020",
      category: "Straffe Koffie",
      url: "https://github.com/pieterdw/mighty-web",
      text: [
        'To consolidate the code to build and deploy web sites, I built a Node.js library called "Mighty". It uses Parcel to build and minify files. It can also deploy these files to a pre-configured FTP server. This library massively improved the speed of setting up new projects and deploying them.',
      ],
    },
    {
      name: "Expense Tracker App",
      role: "Developer, hobbyist",
      tech: "C#, .NET 8, Spectre",
      timeSpan: "2022",
      category: "Hobby",
      text: [
        "To track and categorize our expenses, I built a .NET console application. It imports data from our bank and credit card, and allows us to add categories and comments to all expenses. It supports smart rules to automatticaly apply the right categories.",
        "There's a number of data visualization options to see patterns and timelines.",
      ],
    },
    {
      name: "Home Automation Enhancements",
      role: "Developer, hobbyist",
      tech: "C#, .NET Framework, Loxone, HTTP, TCP, Git",
      timeSpan: "2014",
      category: "Hobby",
      text: [
        "I built a .NET console application to extend our home automation. For example, it used a API to close the blinds if it got too hot outside, or open them to prevent damage due to an upcoming storm. It could also control our Sonos speaker and third party smart plugs.",
        "As a result, our house got an infamous Barry White button. When pressed, it would dim the lights and play a Barry White song through the Sonos speaker.",
      ],
    },
    {
      name: "The Ska Is The Limit: Concert Series",
      role: "Organiser, artist booker",
      timeSpan: "2008 - 2012",
      category: "Hobby",
      text: [
        "For five years I organized a concert series in Turnhout (BE), featuring some amazing international artists. These concerts were always very popular, and attracted visitors from far away. I organized everything, ranging from from sponsorships, advertising, artist booking, etc.",
      ],
    },
    {
      name: "Backstage: Band Management Web App",
      role: "Developer, hobbyist",
      tech: "PHP, MySQL, HTML, CSS, JavaScript",
      timeSpan: "~2007",
      category: "Hobby",
      text: [
        "I was in a ska/reggae/soul band with a total of 11 band members. To help manage everything, I created a web app for all band members to discuss things and keep things organized.",
        "The web app was built using PHP and used a MySQL database. Among other things it featured a message board, calendar, and all recorded music.",
      ],
    },
    {
      name: "WebAward.nl: Website Review Service",
      role: "Developer, hobbyist",
      tech: "Perl, MySQL, HTML, CSS, JavaScript",
      timeSpan: "~2001 - 2003",
      category: "Hobby",
      text: [
        "The first web app I built, at the age of 14. Possibly younger, but that's the oldest artefact I found on the Wayback Machine :) People could submit their website to receive a review. Then someone would check their website and give feedback. If the website had a good UI/UX, it could win a golden award. That was an image people could place on their website, and many did! I eventually found some volunteers that helped me out with the reviews.",
        "This was built using Perl, that was the first language I tought myself. I had fun and learned a lot.",
      ],
    },
  ],
  ui: {
    introTitle: { en: "Intro", nl: "Introductie" },
    skillsTitle: { en: "Skills", nl: "Vaardigheden" },
    experienceTitle: { en: "Experience", nl: "Ervaring" },
    educationTitle: { en: "Education", nl: "Onderwijs" },
    recommendationsTitle: { en: "Testimonials", nl: "Referenties" },
    addendumTitle: {
      en: "Addendum: project details",
      nl: "Addendum: project details",
    },
    languageToggle: { en: "NL", nl: "EN" },
    languageToggleTooltip: {
      en: "Nederlandstalige versie bekijken",
      nl: "View English version",
    },
    readMore: { en: "Read more", nl: "Verder lezen" },
    downloadAsPdf: { en: "Download as PDF", nl: "Download als PDF" },
  },
};
