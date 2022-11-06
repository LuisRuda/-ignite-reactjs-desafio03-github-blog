import { useEffect, useState } from 'react'
import remarkGfm from 'remark-gfm'
import ptBR from 'date-fns/locale/pt-BR'
import ReactMarkdown from 'react-markdown'
import { formatDistanceToNow } from 'date-fns'
import { useParams, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'

import { IPost } from './types'
import { api } from '../../lib/axios'
import { gitHubIcon } from '../../assets'
import {
  PostContainer,
  PostHeaderContainer,
  InfoContainer,
  PostContent,
} from './styles'

export function Post() {
  const navigate = useNavigate()
  const { postnumber } = useParams()

  const [post, setPost] = useState({} as IPost)

  useEffect(() => {
    if (postnumber) {
      api
        .get(
          `repos/LuisRuda/ignite-reactjs-desafio03-github-blog/issues/${postnumber}`,
        )
        .then((res) => {
          setPost(res.data)
        })
    }
  }, [postnumber])

  return (
    <PostContainer>
      <PostHeaderContainer>
        <div>
          <button onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faChevronLeft} /> Voltar
          </button>
          <a href={post.html_url} target="_blank" rel="noreferrer">
            ver no GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <h1>{post.title}</h1>
        <InfoContainer>
          <span>
            <img src={gitHubIcon} alt="" />
            {post?.user?.login}
          </span>
          {post.created_at && (
            <span>
              <FontAwesomeIcon icon={faCalendarDay} />
              {formatDistanceToNow(new Date(post.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
          )}
          <span>
            <FontAwesomeIcon icon={faComment} />
            {`${post.comments} comentários`}
          </span>
        </InfoContainer>
      </PostHeaderContainer>

      <PostContent>
        <ReactMarkdown className="line-break" remarkPlugins={[remarkGfm]}>
          {post.body}
        </ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
