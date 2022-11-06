export interface IProfileData {
  avatar_url: string
  bio: string
  company: string
  followers: string
  html_url: string
  login: string
  name: string
}

interface IIssue {
  id: string
  title: string
  body: string
  created_at: Date
}

export interface IIssuesData {
  items: IIssue[]
  total_count: number
}
