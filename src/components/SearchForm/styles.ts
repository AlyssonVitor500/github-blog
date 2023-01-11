import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 1.125rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};

    span {
      font-size: 0.875rem;
      font-weight: 400;
      color: ${(props) => props.theme['base-span']};
    }
  }

  form {
    display: flex;
    gap: 0.5rem;

    button,
    input {
      padding: 0.75rem 1rem;
      border-radius: 6px;

      background: ${(props) => props.theme['base-input']};
      color: ${(props) => props.theme['base-text']};
      border: 1px solid ${(props) => props.theme['base-border']};

      transition: border-color 0.2s;

      &:focus,
      &:hover {
        border-color: ${(props) => props.theme.blue};
      }
    }

    button {
      display: none;
      cursor: pointer;

      @media (max-width: 768px) {
        display: block;
      }
    }

    input {
      width: 100%;

      &::placeholder {
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`
