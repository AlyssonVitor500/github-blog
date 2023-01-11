import { Outlet } from 'react-router-dom'
import { DefaultLayoutContainer, DefaultLayoutHeader } from './styles'

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <DefaultLayoutHeader />
      <Outlet />
    </DefaultLayoutContainer>
  )
}
