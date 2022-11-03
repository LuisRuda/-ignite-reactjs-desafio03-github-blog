import { useParams, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'

import { gitHubIcon } from '../../assets'
import { PostContainer, PostHeaderContainer, InfoContainer } from './styles'

export function Post() {
  const { postid } = useParams()
  const navigate = useNavigate()

  return (
    <PostContainer>
      <PostHeaderContainer>
        <div>
          <button onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faChevronLeft} /> Voltar
          </button>
          <a href="#">
            ver no GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <h1>JavaScript data types and data structures</h1>
        <InfoContainer>
          <span>
            <img src={gitHubIcon} alt="" />
            LuisRuda
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} /> Há 1 dia
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} /> 5 comentários
          </span>
        </InfoContainer>
      </PostHeaderContainer>
    </PostContainer>
  )
}
