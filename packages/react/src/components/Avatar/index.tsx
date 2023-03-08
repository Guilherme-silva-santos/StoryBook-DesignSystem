import { AvatarConatiner, AvatarFallback, AvatarImage } from './styles'
import { User } from 'phosphor-react'
import { ComponentProps } from 'react'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarConatiner>
      <AvatarImage />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarConatiner>
  )
}

Avatar.displayName = 'Avatar'
