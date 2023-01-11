import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

type ProfileDataType = {
  avatarUrl: string
  biograph: string
  followers: number
  name: string
  userName: string
  companyName: string
  profileUrl: string
}

type RepositoryIssue = {
  issueBody: string
  issueTitle: string
  issueNumber: number
  createdAt: Date
}

type RepositoryIssuesAmount = {
  total: number
  issues: RepositoryIssue[] | undefined
}

type IssueDetails = {
  userOwner: string
  githubIssueUrl: string
  issueTitle: string
  createdAt: Date
  commentsAmount: number
  issueBody: string
}

interface ProfileContextProviderProps {
  children: ReactNode
}

interface ProfileContextProps {
  profileData: ProfileDataType
  repositoryIssues: RepositoryIssuesAmount
  isOperationInProgress: boolean
  getIssueData: (issueNumber: number) => Promise<IssueDetails | undefined>
  loadUserIssues: (query: string) => Promise<void>
}

export const ProfileContext = createContext({} as ProfileContextProps)

export function ProfileContextProvider({
  children,
}: ProfileContextProviderProps) {
  const [profile, setProfile] = useState({} as ProfileDataType)
  const [repositoryIssues, setRepositoryIssues] = useState(
    {} as RepositoryIssuesAmount,
  )
  const [isOperationInProgress, setOperationInProgress] = useState(false)

  const getUserProfile = useCallback(async () => {
    setOperationInProgress(true)
    const response = await api.get(`users/${import.meta.env.VITE_GITHUB_USER}`)
    const data = response.data
    const profileData: ProfileDataType = {
      avatarUrl: data.avatar_url,
      biograph: data.bio,
      followers: data.followers,
      name: data.name,
      userName: data.login.toLowerCase(),
      companyName: data.company,
      profileUrl: data.html_url,
    }

    setProfile(profileData)
    setOperationInProgress(false)
  }, [])

  const loadUserIssues = useCallback(async (query?: string) => {
    setOperationInProgress(true)

    // q=${texto}%20repo:${username}/${repo}
    const queryParam = `${query ? `${query} ` : ''}repo:${
      import.meta.env.VITE_GITHUB_ISSUES_REPOSITORY_OWNER
    }/${import.meta.env.VITE_GITHUB_ISSUES_REPOSITORY_NAME}`

    const response = await api.get(`search/issues`, {
      params: {
        q: queryParam,
      },
    })

    const data = response.data
    let repositoryIssues = {} as RepositoryIssuesAmount

    if (data) {
      repositoryIssues = {
        total: data.total_count,
        issues: data.items.map((item: any) => {
          return {
            issueBody: item.body,
            issueTitle: item.title,
            issueNumber: item.number,
            createdAt: new Date(item.created_at),
          }
        }),
      }
    }

    setRepositoryIssues(repositoryIssues)
    setOperationInProgress(false)
  }, [])

  const getIssueData = useCallback(async (issueNumber: number) => {
    setOperationInProgress(true)
    const url = `repos/${import.meta.env.VITE_GITHUB_ISSUES_REPOSITORY_OWNER}/${
      import.meta.env.VITE_GITHUB_ISSUES_REPOSITORY_NAME
    }/issues/${issueNumber}`

    const response = await api.get(url)
    const data = response.data

    setOperationInProgress(false)
    if (data) {
      return {
        commentsAmount: data.comments,
        createdAt: new Date(data.created_at),
        githubIssueUrl: data.html_url,
        issueBody: data.body,
        issueTitle: data.title,
        userOwner: data.user.login ? data.user.login.toLowerCase() : null,
      }
    }

    return undefined
  }, [])

  useEffect(() => {
    getUserProfile()
    loadUserIssues()
  }, [getUserProfile, loadUserIssues])

  return (
    <ProfileContext.Provider
      value={{
        profileData: profile,
        repositoryIssues,
        getIssueData,
        loadUserIssues,
        isOperationInProgress,
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}
