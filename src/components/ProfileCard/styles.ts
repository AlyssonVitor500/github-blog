import styled from 'styled-components'

export const ProfileCardComponent = styled.div`
  max-width: 864px;
  min-height: 212px;
  padding: 2rem;

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px #00000020;
  border-radius: 10px;

  margin: 0 auto;
  margin-top: calc(0px - (212px / 2));

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  img {
    width: 148px;
    height: 148px;

    border-radius: 8px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const ProfileCardResume = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;

  header {
    font-weight: bold;
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-top: 0.5rem;

    a {
      color: ${(props) => props.theme.blue};
      font-size: 0.75rem;
      text-decoration: none;

      min-width: 4.1875rem;
      padding-bottom: 2px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      align-self: flex-start;

      cursor: pointer;

      border-bottom: 1px solid transparent;
      transition: border-bottom-color 0.2s;

      &:hover {
        border-bottom-color: ${(props) => props.theme.blue};
      }
    }
  }

  & > div {
    line-height: 1.6;

    display: flex;
    flex-direction: column;

    gap: 1.5rem;

    & > div {
      display: flex;
      gap: 1.5rem;

      span {
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 0.5rem;

        color: ${(props) => props.theme['base-subtitle']};

        svg {
          color: ${(props) => props.theme['base-label']};
        }
      }
    }
  }
`
