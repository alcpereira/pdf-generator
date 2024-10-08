export interface Root {
  header: Header
  workExperience: WorkExperience[]
  projects: Project[]
  profile: Profile
  technical: Technical[]
  languages: Language[]
  education: Education[]
}

export interface Header {
  name: string
  resume: string[]
}

export interface WorkExperience {
  position: string
  company: string
  location: string
  type: string
  years: string
  bubbles: string[]
  lines: Line[]
}

export interface Line {
  text: string
  bulletPoint: boolean
}

export interface Project {
  name: string
  duration: string
  bubbles: string[]
  lines: Line2[]
}

export interface Line2 {
  text: string
  bulletPoint: boolean
}

export interface Profile {
  lines: string[]
  links: Link[]
}

export interface Link {
  type: string
  link: string
}

export interface Technical {
  category: string
  bubbles: string[]
}

export interface Language {
  language: string
  abbreviation: string
  level: string
}

export interface Education {
  degree: string
  school: string
  location: string
  years: string
}


