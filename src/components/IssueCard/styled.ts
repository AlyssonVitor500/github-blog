import styled from 'styled-components'

export const IssueCardComponent = styled.div`
  width: 416px;
  height: 260px;

  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  transition: opacity 0.2s;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    h3 {
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-title']};

      max-width: 283px;
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  & > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
`
