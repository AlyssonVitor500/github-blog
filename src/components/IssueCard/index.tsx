import { IssueCardComponent } from './styled'

import { formatDistanceToNowStrict } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useNavigate } from 'react-router-dom'

interface IssueCardProps {
  title: string
  bodyContent: string
  createdAt: Date
  number: number
}
export function IssueCard({
  title,
  bodyContent,
  createdAt,
  number,
}: IssueCardProps) {
  const navigate = useNavigate()
  const formattedDate = formatDistanceToNowStrict(createdAt, {
    addSuffix: true,
    locale: ptBR,
  })

  function redirectToDetail() {
    navigate(`issue/${number}`)
  }

  return (
    <IssueCardComponent onClick={() => redirectToDetail()}>
      <header>
        <h3>{title}</h3> <span>{formattedDate}</span>
      </header>
      <span>{bodyContent}</span>
    </IssueCardComponent>
  )
}
