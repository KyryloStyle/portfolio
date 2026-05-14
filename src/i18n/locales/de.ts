import type { MessageSchema } from '../types'

const de: MessageSchema = {
  nav: {
    about: 'Über mich',
    projects: 'Projekte',
    experience: 'Erfahrung',
    videos: 'Videos',
    contact: 'Kontakt',
  },
  lang: {
    en: 'EN',
    de: 'DE',
  },
  hero: {
    role: 'Absolvent der Softwareentwicklung',
    greeting: 'Hallo, ich bin Kyrylo Yurchenko',
    bio: 'Software-Entwickler mit Schwerpunkt auf {vue} und {js}. Ich freue mich darauf, in einem Traineeprogramm in Deutschland zu starten und mich als professioneller Entwickler weiterzuentwickeln.',
    cta: {
      projects: 'Projekte ansehen',
      contact: 'Kontakt aufnehmen',
    },
  },
  about: {
    title: 'Über mich',
    bio: 'Absolvent der Softwareentwicklung (2025) mit praktischer Erfahrung in der Entwicklung interaktiver Webanwendungen mit Vue.js, React, Tailwind CSS und Vanilla JavaScript.',
    whatICan: 'Was ich kann',
    capabilities: {
      frontend: {
        title: 'Frontend-Entwicklung',
        description:
          'Entwicklung sauberer, interaktiver Webanwendungen mit Vue.js, React und Vanilla JavaScript. Standardmäßig responsiv, zugänglich von Grund auf.',
      },
      ui: {
        title: 'UI & Gestaltung',
        description:
          'Erfahren mit Tailwind CSS und Bootstrap. Fokus auf konsistente Design-Systeme und klare visuelle Hierarchie.',
      },
      collab: {
        title: 'Teamarbeit & Wachstum',
        description:
          'Erfahrung in der Teamarbeit, Code-Review-Prozessen und dem schnellen Erlernen neuer Technologien.',
      },
    },
    skillsTitle: 'Fähigkeiten & Technologien',
    educationTitle: 'Ausbildung',
    education: {
      school: 'Zweigstelle des Charkiwer Computer- und Technologie-Fachkollegs',
      degree: 'Junior-Bachelor in Softwareentwicklung · 2025',
      grade: 'Abschluss mit Note 4/5',
      project: 'Abschlussprojekt: Full-Stack-Webentwicklung',
      competitions: 'Teilnahme an Programmierwettbewerben',
      level: 'Die Ausbildung ist auf DQR-Niveau 5 anerkannt.',
    },
    languagesTitle: 'Sprachen',
    nativeLevel: 'Muttersprache',
  },
  projects: {
    title: 'Projekte',
    subtitle:
      'Eine Auswahl von Projekten, die ich entwickelt habe, um meine Fähigkeiten zu verbessern und echte Probleme zu lösen.',
    demo: 'Live-Demo',
    code: 'Quellcode',
    items: {
      bankaFunka: {
        title: 'Tanzveranstaltungs-Website',
        description:
          'Responsive Event-Website für ein Tanzfestival mit Ticketinformationen und interaktiven Funktionen.',
      },
      wrongTranslator: {
        title: 'Falsch-getippt-Übersetzer',
        description:
          'Korrigiert Text, der im falschen Tastaturlayout eingegeben wurde – wandelt ukrainische/russische Fehleingaben zurück ins Englische.',
      },
      passwodino: {
        title: 'Passwodino',
        description:
          'Passwort-Stärkeprüfer und sicherer Generator mit Entropieanalyse, Crack-Zeit-Schätzung und Echtzeit-Sicherheitsaudit.',
      },
    },
  },
  contact: {
    title: 'Kontakt aufnehmen',
    subtitle: 'Offen für Traineestellen, Praktika und Kooperationen in Deutschland.',
    form: {
      title: 'Nachricht senden',
      namePlaceholder: 'Ihr Name',
      emailPlaceholder: 'Ihre E-Mail',
      messagePlaceholder: 'Ihre Nachricht',
      send: 'Nachricht senden',
      sending: 'Wird gesendet…',
      sent: 'Gesendet!',
      success: 'Nachricht gesendet! Ich melde mich bald bei Ihnen.',
      error: 'Etwas ist schiefgelaufen. Bitte schreiben Sie mir direkt eine E-Mail.',
    },
    reach: 'Oder direkt kontaktieren',
    labels: {
      email: 'E-Mail',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
  },
  experience: {
    title: 'Erfahrung',
    subtitle: 'Praktika und praktische Tätigkeiten, die meine Entwicklung als Ingenieur geprägt haben.',
    items: {
      freelance: {
        role: 'Freiberuflicher / Unabhängiger Entwickler',
        company: 'Selbstständig',
        period: '2024 – heute',
        location: 'Remote',
        bullets: [
          'Entwicklung persönlicher und Kundenprojekte mit Vue.js, React, Python und TypeScript.',
          'Konzeption und Deployment von Full-Stack-Webanwendungen von Anfang bis Ende.',
          'Kontinuierliches Lernen neuer Tools, Frameworks und Best Practices.',
        ],
      },
      kit: {
        role: 'Python-Lehrassistent',
        company: 'KIT — Ukrainische Schule für Programmierung und Webdesign',
        period: 'Jun. 2025 – Aug. 2025 · 3 Monate',
        location: 'Ukraine · Remote · Praktikum',
        bullets: [
          'Unterstützung bei der Durchführung eines Python-Grundlagenkurses.',
          'Vermittlung von OOP-Prinzipien, Python-Grundlagen und Django-Grundlagen.',
        ],
      },
      kharkiv: {
        role: 'Full-Stack-Entwickler (Praktikum)',
        company: 'Stadtverwaltung Charkiw — Abteilung für digitale Transformation',
        period: 'Feb. 2025 – Apr. 2025 · 3 Monate',
        location: 'Charkiw, Ukraine · Remote · Praktikum',
        bullets: [
          'Entwicklung von Full-Stack-Webanwendungen mit Vue.js und Python.',
          'Aufbau von REST-APIs und Arbeit mit PostgreSQL-Datenbanken.',
          'Teamarbeit an neuen Projekten von Grund auf.',
        ],
      },
    },
  },
  videos: {
    title: 'Sprachpräsentation',
    subtitle: 'Schau mir zu – eine kurze Vorstellung auf Englisch und Deutsch.',
    english: {
      label: 'English',
      description: 'Vorstellung auf Englisch – Niveau B2.',
    },
    german: {
      label: 'Deutsch',
      description: 'Vorstellung auf Deutsch – Niveau B2.',
    },
  },
  footer: {
    rights: 'Alle Rechte vorbehalten.',
    backToTop: 'Nach oben',
  },
}

export default de
