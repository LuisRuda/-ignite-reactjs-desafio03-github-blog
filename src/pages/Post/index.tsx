import { useParams } from 'react-router-dom'

export function Post() {
  const { postid } = useParams()

  return <h1>{`Post ${postid}`}</h1>
}
