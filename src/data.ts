export interface Language {
  name: string;
  level: string;
}

export interface Profile {
  name: string;
  title: string;
  age: number;
  email: string;
  phone: string;
  location: string;
  summary: string;
  github: string;
  linkedin: string;
  website: string;
  languages: Language[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  location: string;
  details?: string[];
}

export interface Skills {
  projectManagement: string[];
  backend: string[];
  frontend: string[];
  database: string[];
  mobile: string[];
  ai: string[];
  tools: string[];
  softSkills: string[];
}

export interface PortfolioData {
  profile: Profile;
  experience: Experience[];
  projects: Project[];
  education: Education[];
  skills: Skills;
}

export const data: PortfolioData = {
  profile: {
    name: "Valentin JEANNOT",
    title: "Ingénieur IT - Expert Web & Mobile",
    age: 33,
    email: "jeannot.valentin@orange.fr",
    phone: "06 37 42 71 37",
    location: "Chagny (08430), Ardennes",
    summary: "Ingénieur avec plus de 10 ans d'expérience dans le développement d'applications Web & Mobile, je me spécialise aujourd'hui dans la gestion de projet et l'intégration de solutions d'IA (RAG, LLM) pour transformer des concepts complexes en produits concrets. Mon expertise technique, associée à une forte culture Agile, me permet de piloter des projets innovants tout en garantissant un code fiable et une expérience utilisateur optimale.",
    github: "https://github.com/ValentinKt",
    linkedin: "https://www.linkedin.com/in/valentinkt/",
    website: "https://valentinkt.github.io",
    languages: [
      { name: "Français", level: "Maternel" },
      { name: "Anglais", level: "Courant (TOEIC 800/990)" }
    ]
  },
  experience: [
    {
      company: "DIGITSOLE PRO ®",
      role: "Ingénieur Développeur Mobile & Gestion Projet",
      period: "Mai 2021 - Avril 2024",
      location: "Nancy, Grand Est, France",
      description: [
        "Conception d'applications mobiles à destination des professionnels de santé DigitsolePro®.",
        "Référent techniques : Android (Java/Kotlin).",
        "Gestion de projet : Méthode AGILE, Cohésion d'équipes entre l'UI/UX, le back-end, le front-end (mobiles) & les firmwares."
      ]
    },
    {
      company: "MARGGRAF",
      role: "Ingénieur Analyste R&D, Développeur Android",
      period: "Juillet 2020 - Avril 2021",
      location: "Nancy",
      description: [
        "Développement et gestion d'une application mobile \"From Scratch\". Connexion à un capteur de glycémie non-invasif, avec récupération des data physiologiques (Bluetooth BLE).",
        "Technologie : Ionic (TypeScript) pour créer un premier POC, Java pour un développement en natif robuste pour mobile et montre.",
        "Gestion de projet : Méthode AGILE, Epic, User Story, Tâche."
      ]
    },
    {
      company: "PHARMAGEST INTERACTIVE",
      role: "Ingénieur Développeur R&D",
      period: "Mars 2016 - Mai 2020",
      location: "Nancy",
      description: [
        "Développement d'app dans le domaine de la santé : suivi des personnes âgées afin d'améliorer leur maintien à domicile et de retarder leur entrée en maison de retraite.",
        "Front-end : Angular 2 (TypeScript), HTML, CSS, JS.",
        "Back-end : Java, SpringBoot (API REST), Hibernate (ORM).",
        "Gestion de projet : User Story, Tâche, Daily Meeting."
      ]
    }
  ],
  projects: [
    {
      title: "DataAnalyzer",
      description: "Python library designed for statistical data analysis and automated test selection.",
      tags: ["Python"],
      github: "https://github.com/ValentinKt/DataAnalyzer"
    },
    {
      title: "AI Alchemist",
      description: "Collection of experiments, insights, and resources for training and experimenting with AI models.",
      tags: ["Jupyter Notebook", "AI"],
      github: "https://github.com/ValentinKt/AI-Alchemist"
    },
    {
      title: "AgentFlowStudio",
      description: "Modern AI agent orchestration studio.",
      tags: ["TypeScript", "AI"],
      github: "https://github.com/ValentinKt/AgentFlowStudio"
    },
    {
      title: "Zsh Preview CSV",
      description: "Zsh Script in order to preview CSV file in multiple ways.",
      tags: ["Shell"],
      github: "https://github.com/ValentinKt/zsh-preview-csv"
    }
  ],
  education: [
    {
      school: "Metz Numerics School",
      degree: "Concepteur Intégrateur en IA",
      period: "Avril 2025 - Décembre 2025",
      location: "Metz",
      details: [
        "RAG : Réponses d'un modèle alimentés par des documents.",
        "Langchain, Langgraph : Orchestration des flux de travail d'IA complexes.",
        "Docker : Déploiement Frontend/Backend dans des containers docker.",
        "SGBD : SQL Server, PostgreSQL, SQLite, MongoDB, Redis.",
        "React : Frontend responsive pour Web App, Tailwind"
      ]
    },
    {
      school: "TELECOM NANCY",
      degree: "INGÉNIEUR INFORMATIQUE",
      period: "2012 - 2016",
      location: "Villers-lès-Nancy, France",
      details: [
        "Spécialisation : Système d'Information d'Entreprise",
        "Interopérabilité des applications d’entreprise",
        "Systèmes ERP",
        "Systèmes décisionnels",
        "Systèmes distribués",
        "Langages : Java, ASSEMBLEUR, MatLab",
        "Bases de données : SQL, MySQL, PL-SQL",
        "Automatisation : Grafcet"
      ]
    },
    {
      school: "IUT CHARLEMAGNE",
      degree: "DUT INFORMATIQUE",
      period: "Septembre 2010 - Juin 2012",
      location: "Nancy, France",
      details: [
        "Langages : Java, C, Cobol",
        "Bases de données : SQL, MySQL, ORACLE (Arbre B+) - PL-SQL",
        "Algorithmie, Algorithmie avancées."
      ]
    }
  ],
  skills: {
    projectManagement: ["Méthode AGILE (SCRUM)", "Epic/Story", "Sprint", "Pair Programming", "Jira", "Confluence", "Git", "GitLab", "GitHub", "Pair Review"],
    backend: ["Java", "Spring Boot", "API REST", "Hibernate (ORM)", "Node.js", "Express"],
    frontend: ["Java", "Kotlin (Android)", "TypeScript (Angular, React)", "React", "Tailwind CSS"],
    database: ["MySQL", "SQL Server", "PostgreSQL", "SQLite", "MongoDB", "Redis"],
    mobile: ["Java", "Kotlin", "Koin", "DaggerHilt", "Clean Architecture", "Jetpack Compose", "Material3", "Coroutines", "KMP - KMM", "KTor", "GraphQL", "Retrofit", "Room"],
    ai: ["Python", "React", "Ollama", "RAG", "LangChain", "LangGraph"],
    tools: ["VS Code", "Trae", "Zed", "IntelliJ", "Android Studio"],
    softSkills: ["Empathique", "Tolérant", "Ambitieux", "Curieux", "Adaptabilité", "Flexibilité"]
  }
};
