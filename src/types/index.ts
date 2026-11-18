export interface NavItem { id: string; label: string }

export interface Project {
  name: string
  initial: string
  tags: string[]
  desc: string
  from: string
  to: string
  logo?: string
}

export interface Service {
  icon: string
  title: string
  desc: string
  items: string[]
}

export interface TextItem { title: string; text: string }

export interface ColorToken { name: string; token: string; hex: string; use: string }
export interface TypeToken { name: string; spec: string; size: number; weight: number }
export interface TokenGroup { title: string; items: string[] }