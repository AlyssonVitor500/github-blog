import { LoadingContainer } from './styles'
import loadingGif from '../../assets/loading.gif'

export function Loading() {
  return (
    <LoadingContainer>
      <img src={loadingGif} alt="Loading" />
    </LoadingContainer>
  )
}
