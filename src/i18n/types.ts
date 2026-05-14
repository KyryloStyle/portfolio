export interface MessageSchema {
  nav: {
    about: string
    projects: string
    experience: string
    videos: string
    contact: string
  }
  lang: {
    en: string
    de: string
  }
  hero: {
    role: string
    greeting: string
    bio: string
    cta: {
      projects: string
      contact: string
    }
  }
  about: {
    title: string
    bio: string
    whatICan: string
    capabilities: {
      frontend: { title: string; description: string }
      ui: { title: string; description: string }
      collab: { title: string; description: string }
    }
    skillsTitle: string
    educationTitle: string
    education: {
      school: string
      degree: string
      grade: string
      project: string
      competitions: string
      level: string
    }
    languagesTitle: string
    nativeLevel: string
  }
  projects: {
    title: string
    subtitle: string
    demo: string
    code: string
    items: {
      bankaFunka: { title: string; description: string }
      wrongTranslator: { title: string; description: string }
      passwodino: { title: string; description: string }
    }
  }
  contact: {
    title: string
    subtitle: string
    form: {
      title: string
      namePlaceholder: string
      emailPlaceholder: string
      messagePlaceholder: string
      send: string
      sending: string
      sent: string
      success: string
      error: string
    }
    reach: string
    labels: {
      email: string
      linkedin: string
      github: string
    }
  }
  experience: {
    title: string
    subtitle: string
    items: {
      freelance: {
        role: string
        company: string
        period: string
        location: string
        bullets: string[]
      }
      kit: {
        role: string
        company: string
        period: string
        location: string
        bullets: string[]
      }
      kharkiv: {
        role: string
        company: string
        period: string
        location: string
        bullets: string[]
      }
    }
  }
  videos: {
    title: string
    subtitle: string
    english: { label: string; description: string }
    german: { label: string; description: string }
  }
  footer: {
    rights: string
    backToTop: string
  }
}
