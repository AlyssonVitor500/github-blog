import { useContext, useEffect, useState, useCallback } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useNavigate, useParams } from 'react-router-dom'
import { IssueHeaderCard } from '../../components/IssueHeaderCard'
import { ProfileContext } from '../../contexts/profileContext'
import { ProjectDetailsMain } from './styles'

type IssueDetailsArgs = {
  userOwner: string
  githubIssueUrl: string
  issueTitle: string
  createdAt: Date
  commentsAmount: number
  issueBody: string
}
export function IssueDetails() {
  const { getIssueData } = useContext(ProfileContext)
  const { issueNumber } = useParams()
  const navigate = useNavigate()

  const [issueDetailsValues, setIssueDetailsValues] = useState(
    {} as IssueDetailsArgs,
  )

  useEffect(() => {
    async function getIssueDatas() {
      if (Number.isNaN(Number(issueNumber))) {
        navigate('/')
      } else {
        getIssueData(Number(issueNumber))
          .then((data) => {
            let returnedValue = {} as IssueDetailsArgs
            if (data) {
              returnedValue = data
            }
            setIssueDetailsValues(returnedValue)
          })
          .catch(() => {
            navigate('/')
          })
      }
    }

    getIssueDatas()
  }, [getIssueData, issueNumber, navigate])

  const CustomLink = useCallback(({ ...props }) => {
    return <a {...props} target="_blank" rel="noopener noreferrer" />
  }, [])

  return (
    <div style={{ padding: '0 0.5rem' }}>
      <IssueHeaderCard {...issueDetailsValues} />

      <ProjectDetailsMain>
        <ReactMarkdown
          components={{ a: CustomLink }}
        >{`${issueDetailsValues.issueBody}`}</ReactMarkdown>
      </ProjectDetailsMain>
    </div>
  )
}
