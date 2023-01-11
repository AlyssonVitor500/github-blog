import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/home'
import { IssueDetails } from './pages/IssueDetails'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/issue/:issueNumber" element={<IssueDetails />}></Route>
      </Route>
    </Routes>
  )
}
