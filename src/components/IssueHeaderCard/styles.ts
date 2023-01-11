import styled from 'styled-components'

export const IssueHeaderCardComponent = styled.div`
  max-width: 864px;
  min-height: 168px;
  padding: 2rem 2rem 0.5rem;

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px #00000020;
  border-radius: 10px;

  margin: 0 auto;
  margin-top: calc(0px - (168px / 2));

  header {
    display: flex;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding-bottom: 2px;

      font-weight: bold;
      font-size: 0.75rem;
      text-decoration: none;
      line-height: 1.5;
      cursor: pointer;

      color: ${(props) => props.theme.blue};
      border-bottom: 1px solid transparent;
      transition: border-bottom-color 0.2s;

      &:hover {
        border-bottom-color: ${(props) => props.theme.blue};
      }
    }
  }
`

export const IssueHeaderCardContent = styled.main`
  margin: 1.25rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > h2 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 2rem;
    color: ${(props) => props.theme['base-span']};

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`
