import styled from 'styled-components'

export const HomeContainer = styled.div``

export const ProfileContainer = styled.div`
  flex: 1;
  max-width: 100%;
  display: flex;
  border-radius: 10px;
  margin-top: -5.5rem;
  padding: 2rem 2.5rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme['ocean-blue-800']};

  > img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`

export const ProfileInfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  padding: 0.375rem 0;

  > div {
    display: flex;
    align-items: center;

    strong {
      font-size: 1.5rem;
      line-height: 1.3;
    }

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    &:first-child {
      justify-content: space-between;

      a {
        font-size: 0.75rem;
        text-decoration: none;
        font-weight: 700;
        color: ${({ theme }) => theme['blue-500']};
        border-top: 1px solid transparent;
        border-bottom: 1px solid transparent;

        svg {
          color: ${({ theme }) => theme['blue-500']};
        }

        img {
          width: 0.75rem;
          height: 0.75rem;
        }

        &:hover {
          border-bottom: 1px solid ${({ theme }) => theme['blue-500']};
        }
      }
    }
  }

  > p {
    margin-top: 0.5rem;
    line-height: 1.6;
    color: ${({ theme }) => theme['ocean-blue-300']};
  }
`

export const ProfileInfoFooterContainer = styled.div`
  gap: 1.5rem;
  margin-top: auto;

  a {
    text-decoration: none;
  }

  a,
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme['ocean-blue-200']};
  }

  svg,
  img {
    width: 1.125rem;
    height: 1.125rem;
    color: ${({ theme }) => theme['ocean-blue-500']};
  }
`
