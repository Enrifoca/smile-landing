export interface Translations {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  lang: {
    label: string;
    switch: string;
    aria: string;
  };
  nav: {
    blog: string;
    github: string;
    demo: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    target: string;
    ctaDemo: string;
    ctaGithub: string;
  };
  showcase: {
    label: string;
    videoLabel: string;
  };
  features: {
    title: string;
    headline: string;
    lede: string;
    items: Array<{ name: string; desc: string }>;
  };
  steps: {
    title: string;
    headline: string;
    lede: string;
    items: Array<{ name: string; desc: string }>;
  };
  cta: {
    title: string;
    desc: string;
    btn: string;
  };
  footer: {
    copy: string;
    blog: string;
    github: string;
    releases: string;
    linkedin: string;
    privacy: string;
    cookies: string;
    terms: string;
  };
  modal: {
    title: string;
    close: string;
    emailLabel: string;
    emailPlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    note: (email: string) => string;
  };
  mailto: {
    subject: string;
    body: (email: string, company: string, message: string) => string;
  };
}

export const it: Translations = {
  meta: {
    title: "smile:D — Open source AI workspace",
    description:
      "Ottieni il tuo workspace AI aziendale personalizzato. Usa il modello che preferisci e connettilo a tutto il tuo ecosistema. Costruito per task complessi e completamente open source.",
    ogTitle: "smile:D — Open source AI workspace",
    ogDescription:
      "Ottieni il tuo workspace AI aziendale personalizzato. Usa il modello che preferisci e connettilo a tutto il tuo ecosistema. Costruito per task complessi e completamente open source.",
  },
  lang: {
    label: "IT",
    switch: "EN",
    aria: "Passa alla versione inglese",
  },
  nav: {
    blog: "Blog",
    github: "GitHub",
    demo: "Richiedi una demo",
  },
  hero: {
    eyebrow: "Open source AI workspace",
    title: "Ottieni il tuo workspace AI aziendale personalizzato",
    subtitle:
      "Usa il modello che preferisci e connettilo a tutto il tuo ecosistema. Costruito per task complessi e completamente open source.",
    target:
      "Per le aziende che vogliono il proprio agente AI brandizzato e personale.",
    ctaDemo: "Richiedi una demo",
    ctaGithub: "Vedi su GitHub",
  },
  showcase: {
    label: "Video anteprima prodotto",
    videoLabel: "Video demo smile:D",
  },
  features: {
    title: "Cosa ottieni",
    headline: "Un workspace AI connesso a tutto ciò che usi",
    lede:
      "Offriamo un workspace AI con agenti personalizzati sul modo di lavorare dei tuoi team. Progettiamo i moduli, i connettori e i flussi di approvazione di cui hai bisogno, poi ti consegniamo un'applicazione desktop che i tuoi dipendenti possono installare.",
    items: [
      {
        name: "Open source",
        desc:
          "Codice e architettura aperti. Nessun vendor lock-in, API nascoste o black box che non puoi ispezionare.",
      },
      {
        name: "Scegli il modello",
        desc:
          "Collega i modelli che rispettano il tuo budget e le tue policy. Passa da chat a reasoning a vision in qualsiasi momento. Nessun provider imposto.",
      },
      {
        name: "Ottimizzato per modelli leggeri",
        desc:
          "Progettato per ottenere il massimo da modelli piccoli, mantenendo i costi contenuti senza rinunciare alla qualità su task reali.",
      },
      {
        name: "Connettori su misura",
        desc:
          "HubSpot, Jira, database, API interne, file. Se un connettore non esiste, lo costruiamo noi. L'agente parla con il tuo stack, non con uno generico.",
      },
      {
        name: "Report",
        desc:
          "Raccoglie il contesto, redige le sezioni e produce report strutturati nel tuo formato. Pensato per output lunghi, non risposte di una riga.",
      },
      {
        name: "Task di lunga durata",
        desc:
          "Workflow multi-step che girano per minuti o ore, salvando lo stato e ripartendo in sicurezza. L'agente non perde il contesto se una chiamata va in timeout.",
      },
    ],
  },
  steps: {
    title: "Come funziona",
    headline: "Dal tuo flusso di lavoro a un agente pronto",
    lede:
      "Agiamo come partner di delivery. Descrivi il lavoro, noi creiamo l'agente e il tuo team lo installa come un'applicazione desktop qualsiasi.",
    items: [
      {
        name: "Descrivi il lavoro",
        desc:
          "Prenota una call e raccontaci quali report o task deve gestire l'agente, quali strumenti deve usare e chi approva l'output.",
      },
      {
        name: "Lo progettiamo",
        desc:
          "Disegniamo moduli, connettori, flussi di approvazione e template di report. L'agente gira in locale e usa i modelli che scegli tu.",
      },
      {
        name: "Distribuiscilo al team",
        desc:
          "I tuoi dipendenti scaricano un'app desktop brandizzata per Mac, Windows o Linux. Nessuna competenza di sviluppo richiesta.",
      },
      {
        name: "Evolvilo con noi",
        desc:
          "Aggiorniamo connettori e moduli man mano che i processi cambiano. Tu mantieni il controllo di dati, modelli e costi.",
      },
    ],
  },
  cta: {
    title: "Pronto a ottenere il tuo agente?",
    desc:
      "Raccontaci di cosa ha bisogno il tuo team e ti mostreremo come potrebbe essere un agente smile:D personalizzato per la tua azienda.",
    btn: "Richiedi una demo",
  },
  footer: {
    copy: "Realizzato da Enrico Focaccia",
    blog: "Blog",
    github: "GitHub",
    releases: "Releases",
    linkedin: "LinkedIn",
    privacy: "Privacy Policy",
    cookies: "Cookie Policy",
    terms: "Termini di Servizio",
  },
  modal: {
    title: "Richiedi una demo",
    close: "Chiudi",
    emailLabel: "Email aziendale",
    emailPlaceholder: "tu@azienda.it",
    companyLabel: "Azienda",
    companyPlaceholder: "Acme Srl",
    messageLabel: "Cosa deve fare l'agente?",
    messagePlaceholder:
      "Es. ci serve un report settimanale che prelevi dati dal CRM e rediga un riepilogo per il team vendite.",
    submit: "Invia richiesta",
    note: (email: string) =>
      `Questo aprirà il tuo client di posta con un messaggio precompilato. Se non funziona, scrivici direttamente a <a href="mailto:${email}" style="text-decoration: underline;">${email}</a>.`,
  },
  mailto: {
    subject: "Richiesta demo per smile:D",
    body: (email: string, company: string, message: string) =>
      [
        "Ciao, vorrei richiedere una demo di smile:D.",
        "",
        `Email: ${email}`,
        company ? `Azienda: ${company}` : "",
        "",
        "Caso d'uso:",
        message,
      ].join("\n"),
  },
};

export const en: Translations = {
  meta: {
    title: "smile:D — Open source AI workspace",
    description:
      "Get your own custom enterprise AI workspace. Use any model you want and connect it to everything in your ecosystem. Built for complex tasks and fully open source.",
    ogTitle: "smile:D — Open source AI workspace",
    ogDescription:
      "Get your own custom enterprise AI workspace. Use any model you want and connect it to everything in your ecosystem. Built for complex tasks and fully open source.",
  },
  lang: {
    label: "EN",
    switch: "IT",
    aria: "Switch to Italian version",
  },
  nav: {
    blog: "Blog",
    github: "GitHub",
    demo: "Request a demo",
  },
  hero: {
    eyebrow: "Open source AI workspace",
    title: "Get your own custom enterprise AI workspace",
    subtitle:
      "Use any model you want and connect it to everything in your ecosystem. Built for complex tasks and fully open source.",
    target:
      "For companies that want their own branded, personal AI agent.",
    ctaDemo: "Request a demo",
    ctaGithub: "View on GitHub",
  },
  showcase: {
    label: "Product preview video",
    videoLabel: "smile:D demo video",
  },
  features: {
    title: "What you get",
    headline: "An AI workspace connected to everything you use",
    lede:
      "We offer an AI workspace with agents tailored to how your teams work. We design the modules, connectors, and approval flows you need, then hand you a desktop app your employees can install.",
    items: [
      {
        name: "Open source",
        desc:
          "Open code and open architecture. No vendor lock-in, no hidden APIs, no black box you cannot inspect.",
      },
      {
        name: "Use any model",
        desc:
          "Plug in the models that fit your budget and policy. Switch between chat, reasoning, and vision models anytime. No forced provider.",
      },
      {
        name: "Optimized for small models",
        desc:
          "Designed to get the most out of lightweight models, so you keep costs low without giving up quality on real tasks.",
      },
      {
        name: "Custom connectors",
        desc:
          "HubSpot, Jira, databases, internal APIs, files. If a connector doesn't exist, we build it for you. The agent talks to your stack, not a generic one.",
      },
      {
        name: "Reports",
        desc:
          "Gathers context, drafts sections, and produces structured reports in your format. Built for long-form output, not one-line answers.",
      },
      {
        name: "Long running tasks",
        desc:
          "Multi-step workflows run for minutes or hours, checkpointing progress and resuming safely. The agent does not lose state when a call times out.",
      },
    ],
  },
  steps: {
    title: "How it works",
    headline: "From your workflow to a shipped agent",
    lede:
      "We act as your delivery partner. You describe the job, we create the agent, and your team installs it like any desktop app.",
    items: [
      {
        name: "Describe the job",
        desc:
          "Book a call and tell us what reports or tasks the agent should handle, which tools it needs, and who approves the output.",
      },
      {
        name: "We create it",
        desc:
          "We design the modules, connectors, approval flows, and report templates. The agent runs locally and uses your chosen models.",
      },
      {
        name: "Ship to your team",
        desc:
          "Your employees download a branded desktop app for Mac, Windows, or Linux. No coding required on their side.",
      },
      {
        name: "Iterate together",
        desc:
          "We refine connectors and modules as your processes change. You stay in control of data, models, and costs.",
      },
    ],
  },
  cta: {
    title: "Ready to get your own agent?",
    desc:
      "Tell us what your team needs and we'll show you what a custom smile:D agent looks like for your company.",
    btn: "Request a demo",
  },
  footer: {
    copy: "Built by Enrico Focaccia",
    blog: "Blog",
    github: "GitHub",
    releases: "Releases",
    linkedin: "LinkedIn",
    privacy: "Privacy Policy",
    cookies: "Cookie Policy",
    terms: "Terms of Service",
  },
  modal: {
    title: "Request a demo",
    close: "Close",
    emailLabel: "Work email",
    emailPlaceholder: "you@company.com",
    companyLabel: "Company",
    companyPlaceholder: "Acme Inc.",
    messageLabel: "What should the agent do?",
    messagePlaceholder:
      "E.g. we need a weekly report that pulls data from our CRM and drafts a summary for the sales team.",
    submit: "Send request",
    note: (email: string) =>
      `This will open your email client with a pre-filled message. If it doesn't work, email us directly at <a href="mailto:${email}" style="text-decoration: underline;">${email}</a>.`,
  },
  mailto: {
    subject: "Demo request for smile:D",
    body: (email: string, company: string, message: string) =>
      [
        "Hi, I would like to request a demo of smile:D.",
        "",
        `Email: ${email}`,
        company ? `Company: ${company}` : "",
        "",
        "Use case:",
        message,
      ].join("\n"),
  },
};
