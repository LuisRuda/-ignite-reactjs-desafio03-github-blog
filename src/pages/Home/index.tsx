import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

import { api } from '../../lib/axios'
import { gitHubIcon } from '../../assets'
import { IProfileData } from './types'
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

  useEffect(() => {
    api.get('users/LuisRuda').then((response) => {
      console.log(response.data)
      setProfileData(response.data)
    })
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
          <span>3 publicações</span>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
      </SearchContainer>

      <PostsListContainer>
        <PostContainer to="/post/1">
          <div>
            <strong>JavaScript data types and data structures</strong>
            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn. Dynamic typing JavaScript is a loosely typed and dynamic
            language. Variables in JavaScript are not directly associated with
            any particular value type, and any variable can be assigned (and
            re-assigned) values of all types: let foo = 42; // foo is now a
            number foo = 'bar'; // foo is now a string foo = true; // foo is now
            a boolean
          </p>
        </PostContainer>
        <PostContainer to="/post/2">
          <div>
            <strong>JavaScript data types and data structures</strong>
            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn. Dynamic typing JavaScript is a loosely typed and dynamic
            language. Variables in JavaScript are not directly associated with
            any particular value type, and any variable can be assigned (and
            re-assigned) values of all types: let foo = 42; // foo is now a
            number foo = 'bar'; // foo is now a string foo = true; // foo is now
            a boolean
          </p>
        </PostContainer>
        <PostContainer to="/post/3">
          <div>
            <strong>JavaScript data types and data structures</strong>
            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn. Dynamic typing JavaScript is a loosely typed and dynamic
            language. Variables in JavaScript are not directly associated with
            any particular value type, and any variable can be assigned (and
            re-assigned) values of all types: let foo = 42; // foo is now a
            number foo = 'bar'; // foo is now a string foo = true; // foo is now
            a boolean
          </p>
        </PostContainer>
      </PostsListContainer>
    </HomeContainer>
  )
}
