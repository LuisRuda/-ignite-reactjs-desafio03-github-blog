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
            <a href="#">
              <img src={gitHubIcon} alt="" />
              LuisRuda
            </a>
            <span>
              <FontAwesomeIcon icon={faBuilding} /> Rocketseat
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} /> 32 seguidores
            </span>
          </ProfileInfoFooterContainer>
        </ProfileInfoContainer>
      </ProfileContainer>
    </HomeContainer>
  )
}
