import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

import { gitHubIcon } from '../../assets'
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
  return (
    <HomeContainer>
      <ProfileContainer>
        <img
          src="https://avatars.githubusercontent.com/u/35377905?v=4"
          alt=""
        />
        <ProfileInfoContainer>
          <div>
            <strong>Luis Paulo Ruda</strong>
            <a href="#">
              GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <ProfileInfoFooterContainer>
            <span>
              <img src={gitHubIcon} alt="" />
              LuisRuda
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} /> Rocketseat
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} /> 32 seguidores
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
        <PostContainer>
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
        <PostContainer>
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
        <PostContainer>
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
