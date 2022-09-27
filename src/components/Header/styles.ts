import styled from 'styled-components'

import { headerBackground } from '../../assets'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  display: flex;
  justify-content: center;
  background-image: url(${headerBackground});
  background-repeat: unset;
  background-size: cover;
  background-position: center;

  img {
    height: 6.125rem;
    margin-top: 4rem;
  }
`
