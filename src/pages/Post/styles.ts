import styled from 'styled-components'

export const PostContainer = styled.div`
  padding: 0 1.5rem;
`

export const PostHeaderContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin-top: -5.5rem;
  padding: 2rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme['ocean-blue-800']};

  > div {
    &:first-child {
      gap: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      a,
      button {
        border: unset;
        background: transparent;
        font-size: 0.75rem;
        text-decoration: none;
        font-weight: 700;
        text-transform: uppercase;
        color: ${({ theme }) => theme['blue-500']};
        border-top: 1px solid transparent;
        border-bottom: 1px solid transparent;
        cursor: pointer;

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

  h1 {
    font-size: 1.5rem;
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
    line-height: 1.3;
    color: ${({ theme }) => theme['ocean-blue-100']};
  }
`

export const InfoContainer = styled.div`
  gap: 2rem;
  display: flex;

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

  @media (max-width: 568px) {
    font-size: 0.8rem;
  }
`
