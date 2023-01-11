import styled from 'styled-components'

export const ProjectDetailsMain = styled.main`
  padding: 2.5rem 2rem;
  max-width: 864px;

  margin: 0 auto;

  p + p,
  h3,
  h2,
  h1,
  h4 {
    margin-top: 1rem;
  }

  p,
  h3,
  h2,
  h1,
  h4 {
    text-align: justify;
    line-height: 1.6;
  }

  li {
    margin-top: 0.5rem;
    list-style-position: inside;
    padding-left: 0.5rem;
  }

  a:not(:has(img)) {
    text-decoration: none;
    font-weight: bold;
    color: ${(props) => props.theme.blue};
    border-bottom: 1px solid transparent;

    transition: border-bottom-color 0.2s;

    :hover {
      border-bottom-color: ${(props) => props.theme.blue};
    }
  }

  img {
    max-width: 100%;
  }
`
