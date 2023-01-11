import styled from 'styled-components'
import headerSVG from '../../assets/cover-header-page.svg'

export const DefaultLayoutContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`

export const DefaultLayoutHeader = styled.header`
  width: 100%;
  display: block;
  background-image: url(${headerSVG});
  background-repeat: no-repeat;
  background-position: center;
  min-height: 296px;
`
