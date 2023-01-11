import { useContext } from 'react'
import { ProfileCard } from '../../components/ProfileCard'
import { IssueCard } from '../../components/IssueCard'
import { SearchForm } from '../../components/SearchForm'
import { ProfileContext } from '../../contexts/profileContext'
import { MainContentHome, ProjectCardGroupContainer } from './styles'

export function Home() {
  const { repositoryIssues } = useContext(ProfileContext)

  return (
    <div style={{ padding: '0 0.5rem' }}>
      <ProfileCard />
      <MainContentHome>
        <SearchForm total={repositoryIssues.total} />

        <ProjectCardGroupContainer>
          {repositoryIssues.issues?.map((item) => (
            <IssueCard
              key={item.issueNumber}
              bodyContent={item.issueBody}
              createdAt={item.createdAt}
              title={item.issueTitle}
              number={item.issueNumber}
            />
          ))}
        </ProjectCardGroupContainer>
      </MainContentHome>
    </div>
  )
}
