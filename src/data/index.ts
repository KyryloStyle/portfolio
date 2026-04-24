import bankaFunkaImg from '@/assets/projects/banka-funka.png'
import wrongTranslatorImg from '@/assets/projects/wrong-translator.png'
import passwodinoImg from '@/assets/projects/passwodino.png'

// Non-translatable data only.
// All user-facing text lives in src/i18n/locales/.

export interface Skill {
  name: string
  icons: string[]
}

export interface LanguageMeta {
  key: string
  level: string
  flagIcon: string
}

export interface ProjectMeta {
  key: 'bankaFunka' | 'wrongTranslator' | 'passwodino'
  image: string
  tags: string[]
  demoUrl: string
  codeUrl: string
}

export const skills: Skill[] = [
  { name: 'Vue.js', icons: ['devicon:vuejs'] },
  { name: 'React', icons: ['devicon:react'] },
  { name: 'TypeScript', icons: ['devicon:typescript'] },
  { name: 'JavaScript', icons: ['devicon:javascript'] },
  { name: 'Python', icons: ['devicon:python'] },
  { name: 'HTML & CSS', icons: ['devicon:html5', 'devicon:css3'] },
  { name: 'Tailwind', icons: ['devicon:tailwindcss'] },
]

export const languages: LanguageMeta[] = [
  { key: 'ukrainian', level: 'native', flagIcon: 'circle-flags:ua' },
  { key: 'english', level: 'B2', flagIcon: 'circle-flags:gb' },
  { key: 'german', level: 'B2', flagIcon: 'circle-flags:de' },
  { key: 'russian', level: 'C2', flagIcon: 'circle-flags:ru' },
]

export const projectsMeta: ProjectMeta[] = [
  {
    key: 'bankaFunka',
    image: bankaFunkaImg,
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://kyrylostyle.github.io/BankaFunka/',
    codeUrl: 'https://github.com/KyryloStyle/BankaFunka',
  },
  {
    key: 'wrongTranslator',
    image: wrongTranslatorImg,
    tags: ['JavaScript', 'DOM'],
    demoUrl: 'https://kyrylostyle.github.io/wrong-written-translater/',
    codeUrl: 'https://github.com/KyryloStyle/wrong-written-translater',
  },
  {
    key: 'passwodino',
    image: passwodinoImg,
    tags: ['Vue.js', 'JavaScript', 'Security'],
    demoUrl: 'https://www.passwordino.eu/',
    codeUrl: 'https://github.com/KyryloStyle/passwordino',
  },
]
