import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@guilhermejn7-ignite-ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/Guilherme-silva-santos.png',
    alt: 'Guilherme Silva',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
