import { IconsComponents } from '../../styles/icons/icons'
import { IssueHeaderCardComponent, IssueHeaderCardContent } from './styles'
import { NavLink } from 'react-router-dom'
import { formatDistanceToNowStrict } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface IssueHeaderCardProps {
  userOwner: string
  githubIssueUrl: string
  issueTitle: string
  createdAt: Date
  commentsAmount: number
}
export function IssueHeaderCard({
  userOwner,
  githubIssueUrl,
  issueTitle,
  createdAt,
  commentsAmount,
}: IssueHeaderCardProps) {
  const formattedDate = formatDistanceToNowStrict(createdAt || new Date(), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <IssueHeaderCardComponent>
      <header>
        <NavLink to="/">
          <IconsComponents.ChevronLeft /> VOLTAR
        </NavLink>
        <a href={githubIssueUrl} target="_blank" rel="noopener noreferrer">
          VER NO GITHUB <IconsComponents.BoxArrowUpRigth />
        </a>
      </header>

      <IssueHeaderCardContent>
        <h2>{issueTitle}</h2>

        <div>
          <span>
            <IconsComponents.Github size={18} /> {userOwner}
          </span>
          <span>
            <IconsComponents.CalendarDay size={18} /> {formattedDate}
          </span>
          <span>
            <IconsComponents.Comment size={18} /> {commentsAmount}{' '}
            {commentsAmount < 2 ? 'comentário' : 'comentários'}
          </span>
        </div>
      </IssueHeaderCardContent>
    </IssueHeaderCardComponent>
  )
}
