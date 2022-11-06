export interface IPost {
  title: string
  body: any
  created_at: Date
  comments: number
  html_url: string
  user: {
    login: string
  }
}
