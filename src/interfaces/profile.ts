import type { Tech } from './project'

export interface Profile {
  name: string
  role: string
  headline: string
  intro: string
  summary: string
  workStyle: string
  email: string
  linkedinUrl: string
  githubUrl: string
}

export interface SkillGroup {
  title: string
  items: Tech[]
}
