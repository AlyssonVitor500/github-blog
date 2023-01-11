import { useContext } from 'react'
import { ProfileContext } from '../../contexts/profileContext'
import { IconsComponents } from '../../styles/icons/icons'
import { ProfileCardComponent, ProfileCardResume } from './styles'

export function ProfileCard() {
  const { profileData } = useContext(ProfileContext)

  return (
    <ProfileCardComponent>
      <img src={profileData.avatarUrl} alt="" />

      <ProfileCardResume>
        <header>
          {profileData.name}
          <a
            href={profileData.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB <IconsComponents.BoxArrowUpRigth />
          </a>
        </header>

        <div>
          {profileData.biograph}
          <div>
            <span>
              <IconsComponents.Github /> {profileData.userName}
            </span>

            {profileData.companyName && (
              <span>
                <IconsComponents.Building /> {profileData.companyName}
              </span>
            )}

            <span>
              <IconsComponents.Users /> {profileData.followers} seguidores
            </span>
          </div>
        </div>
      </ProfileCardResume>
    </ProfileCardComponent>
  )
}
