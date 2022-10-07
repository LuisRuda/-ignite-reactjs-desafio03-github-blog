import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HomeContainer = styled.div`
  padding: 0 1.5rem;
`

export const ProfileContainer = styled.div`
  flex: 1;
  display: flex;
  position: relative;
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

  @media (max-width: 568px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > img {
      margin-bottom: 2rem;
    }
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

  @media (max-width: 568px) {
    align-items: center;

    > div {
      &:first-child {
        a {
          position: absolute;
          top: 1rem;
          right: 1rem;
        }
      }
    }
  }
`

export const ProfileInfoFooterContainer = styled.div`
  gap: 1.5rem;
  margin-top: 1rem;

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

export const SearchContainer = styled.div`
  margin-top: 4.5rem;

  > div {
    gap: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      line-height: 1.6;
      font-size: 1.125rem;
      color: ${({ theme }) => theme['ocean-blue-200']};
    }

    span {
      line-height: 1.6;
      font-size: 0.875rem;
      color: ${({ theme }) => theme['ocean-blue-400']};
    }
  }

  input {
    width: 100%;
    margin-top: 0.75rem;
    padding: 0.75rem 1rem;
    color: ${(props) => props.theme['ocean-blue-100']};
    background: ${({ theme }) => theme['dark-blue-900']};
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme['ocean-blue-600']};

    &::placeholder {
      color: ${(props) => props.theme['ocean-blue-500']};
    }
  }
`

export const PostsListContainer = styled.main`
  margin-top: 3rem;
  margin-bottom: 2rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const PostContainer = styled(NavLink)`
  color: unset;
  padding: 2rem;
  border-radius: 10px;
  text-decoration: none;
  background: ${({ theme }) => theme['ocean-blue-700']};
  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${({ theme }) => theme['ocean-blue-500']};
  }

  > div {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.25rem;

    strong {
      font-size: 1.25rem;
      line-height: 1.6;
    }

    span {
      float: right;
      line-height: 1.6;
      font-size: 0.875rem;
      white-space: nowrap;
      color: ${({ theme }) => theme['ocean-blue-400']};
    }
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    -webkit-box-orient: vertical;
    line-height: 1.6;
    color: ${({ theme }) => theme['ocean-blue-300']};
  }
`
