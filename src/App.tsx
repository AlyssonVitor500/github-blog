import { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Loading } from './components/Loading'
import { ProfileContext } from './contexts/profileContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  const { isOperationInProgress } = useContext(ProfileContext)

  return (
    <ThemeProvider theme={defaultTheme}>
      {isOperationInProgress && <Loading />}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
