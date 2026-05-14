import type { MessageSchema } from '../types'

const en: MessageSchema = {
  nav: {
    about: 'About',
    projects: 'Projects',
    experience: 'Experience',
    videos: 'Videos',
    contact: 'Contact',
  },
  lang: {
    en: 'EN',
    de: 'DE',
  },
  hero: {
    role: 'Software Engineering Graduate',
    greeting: "Hi, I'm Kyrylo Yurchenko",
    // {vue} and {js} are named slots for <i18n-t>
    bio: 'Software engineer focused on {vue} and {js}. Open to new opportunities and ready to grow into a professional engineering role.',
    cta: {
      projects: 'View Projects',
      contact: 'Contact Me',
    },
  },
  about: {
    title: 'About Me',
    bio: 'Software Engineering graduate (2025) with hands-on experience building interactive web applications using Vue.js, React, Tailwind CSS, and vanilla JavaScript.',
    whatICan: 'What I Can Do',
    capabilities: {
      frontend: {
        title: 'Frontend Development',
        description:
          'Building clean, interactive web apps with Vue.js, React, and vanilla JavaScript. Responsive by default, accessible by design.',
      },
      ui: {
        title: 'UI & Styling',
        description:
          'Proficient with Tailwind CSS and Bootstrap. Focused on consistent design systems and clear visual hierarchy.',
      },
      collab: {
        title: 'Collaboration & Growth',
        description:
          'Comfortable working in teams, following code review practices, and learning new technologies quickly.',
      },
    },
    skillsTitle: 'Skills & Technologies',
    educationTitle: 'Education',
    education: {
      school: 'Branch of the Kharkiv Computer and Technology Professional College',
      degree: 'Junior Bachelor in Software Engineering · 2025',
      grade: 'Graduated with grade 4/5',
      project: 'Final project: full-stack web development',
      competitions: 'Participated in coding competitions',
      level: 'Education is recognized at DQR Level 5',
    },
    languagesTitle: 'Languages',
    nativeLevel: 'Native',
  },
  projects: {
    title: 'Projects',
    subtitle: "A selection of things I've built to sharpen my skills and solve real problems.",
    demo: 'Live Demo',
    code: 'Source Code',
    items: {
      bankaFunka: {
        title: 'Dance Event Website',
        description:
          'Responsive event website for a dance festival with ticket information and interactive features.',
      },
      wrongTranslator: {
        title: 'Wrong-Written Translator',
        description:
          'Corrects text typed in the wrong keyboard layout — converts accidental Ukrainian/Russian input back to English and vice versa.',
      },
      passwodino: {
        title: 'Passwodino',
        description:
          'Password strength checker and secure generator with entropy analysis, crack-time estimation, and real-time security audit.',
      },
    },
  },
  contact: {
    title: 'Get in Touch',
    subtitle: 'Open to Trainee positions, internships, and collaborations in Germany.',
    form: {
      title: 'Send a Message',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      messagePlaceholder: 'Your Message',
      send: 'Send Message',
      sending: 'Sending…',
      sent: 'Sent!',
      success: "Message sent! I'll get back to you soon.",
      error: 'Something went wrong. Please try emailing me directly.',
    },
    reach: 'Or reach me directly',
    labels: {
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
  },
  experience: {
    title: 'Experience',
    subtitle: 'Internships and hands-on roles that shaped my engineering skills.',
    items: {
      freelance: {
        role: 'Freelance / Independent Developer',
        company: 'Self-employed',
        period: '2024 – Present',
        location: 'Remote',
        bullets: [
          'Building personal and client projects using Vue.js, React, Python, and TypeScript.',
          'Designing and deploying full-stack web applications end-to-end.',
          'Continuously learning new tools, frameworks, and engineering best practices.',
        ],
      },
      kit: {
        role: 'Python Teaching Assistant',
        company: 'KIT — Ukrainian School of Programming and Web Design',
        period: 'Jun 2025 – Aug 2025 · 3 mos',
        location: 'Ukraine · Remote · Internship',
        bullets: [
          'Assisted in delivering a beginner-level Python programming course.',
          'Taught core OOP principles, Python fundamentals, and Django web framework basics.',
        ],
      },
      kharkiv: {
        role: 'Full Stack Developer Intern',
        company: 'Kharkiv City Council — Department of Digital Transformation',
        period: 'Feb 2025 – Apr 2025 · 3 mos',
        location: 'Kharkiv, Ukraine · Remote · Internship',
        bullets: [
          'Developed full-stack web applications using Vue.js and Python.',
          'Built REST APIs and worked with PostgreSQL databases.',
          'Collaborated in a team on new projects from scratch.',
        ],
      },
    },
  },
  videos: {
    title: 'Language Showcase',
    subtitle: 'Watch me speak — a short introduction in English and German.',
    english: {
      label: 'English',
      description: 'Introduction in English — B2 level.',
    },
    german: {
      label: 'Deutsch',
      description: 'Vorstellung auf Deutsch — Niveau B2.',
    },
  },
  footer: {
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
  },
}

export default en
