import { useContext, useEffect, useState } from 'react'
import { ProfileContext } from '../../contexts/profileContext'
import { SearchFormContainer } from './styles'

interface SearchFormProps {
  total: number
}
export function SearchForm({ total }: SearchFormProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const { loadUserIssues } = useContext(ProfileContext)

  function handleOnSubmit(e: any) {
    e.preventDefault()
    loadUserIssues(searchQuery)
  }

  return (
    <SearchFormContainer>
      <header>
        Publicações
        <span>
          {total} {total < 2 ? 'publicação' : 'publicações'}
        </span>
      </header>

      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value)
          }}
        />
        <button type="submit">Pesquisar</button>
      </form>
    </SearchFormContainer>
  )
}
