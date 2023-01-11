import styled from 'styled-components'

export const LoadingContainer = styled.div`
  position: fixed;
  inset: 0;
  height: 100vh;
  width: 100vw;
  background: #00000095;
  z-index: 9999;

  img {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
  }
`
