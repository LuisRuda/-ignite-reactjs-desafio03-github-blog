import { HeaderContainer } from './styles'

import { gitHubBlogLogo } from '../../assets'

export function Header() {
  return (
    <HeaderContainer>
      <img src={gitHubBlogLogo} alt="GitHub Blog" />
    </HeaderContainer>
  )
}
