import styled from 'styled-components'

export const MainContentHome = styled.main`
  max-width: 864px;
  margin: 0 auto;
  padding-bottom: 2rem;

  margin-top: 4.5rem;

  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const ProjectCardGroupContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 2rem;

  @media (max-width: 910px) {
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
  }
`
