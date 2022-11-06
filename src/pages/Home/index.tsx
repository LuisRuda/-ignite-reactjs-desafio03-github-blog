import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { api } from '../../lib/axios'
import { gitHubIcon } from '../../assets'
import { IProfileData, IIssuesData } from './types'
import {
  HomeContainer,
  ProfileContainer,
  ProfileInfoContainer,
  ProfileInfoFooterContainer,
  SearchContainer,
  PostsListContainer,
  PostContainer,
} from './styles'

export function Home() {
  const [profileData, setProfileData] = useState<IProfileData>(
    {} as IProfileData,
  )
  const [issues, setIssues] = useState<IIssuesData>({} as IIssuesData)

  useEffect(() => {
    api.get('users/LuisRuda').then((response) => {
      setProfileData(response.data)
    })
  }, [])

  const searchPullRequests = async (q: string = '') => {
    return await api.get(`search/issues`, {
      params: {
        q: `repo:LuisRuda/ignite-reactjs-desafio03-github-blog ${q}`,
      },
    })
  }

  const loadRepos = async (search?: string) => {
    const response = await searchPullRequests(search)

    if (response.data) {
      setIssues(response.data)
    }
  }

  useEffect(() => {
    loadRepos()
  }, [])

  return (
    <HomeContainer>
      <ProfileContainer>
        <img src={profileData.avatar_url} alt={profileData.name} />
        <ProfileInfoContainer>
          <div>
            <strong>{profileData.name}</strong>
            <a href={profileData.html_url} target="_blank" rel="noreferrer">
              GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <p>{profileData.bio}</p>
          <ProfileInfoFooterContainer>
            <span>
              <img src={gitHubIcon} alt={profileData.login} />
              {profileData.login}
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              {profileData.company}
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              {`${profileData.followers} seguidores`}
            </span>
          </ProfileInfoFooterContainer>
        </ProfileInfoContainer>
      </ProfileContainer>

      <SearchContainer>
        <div>
          <strong>Publicações</strong>
          <span>{`${issues.total_count} publicações`}</span>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
      </SearchContainer>

      <PostsListContainer>
        {issues?.items?.map((issue) => (
          <PostContainer to={`/post/${issue.id}`} key={issue.id}>
            <div>
              <strong>{issue.title}</strong>
              <span>
                {formatDistanceToNow(new Date(issue.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </div>
            <p>{issue.body}</p>
          </PostContainer>
        ))}
      </PostsListContainer>
    </HomeContainer>
  )
}
