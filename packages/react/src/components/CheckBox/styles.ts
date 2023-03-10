import * as Checkbox from '@radix-ui/react-checkbox'
import { styled, keyframes } from '../../styles'

export const CheckBoxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderColor: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '&[data-state="checked"]': {
    backgroundColor: '$ignite300',
  },

  border: '2px solid $gray900',

  '&:focus,&[data-state="checked"] ': {
    // quando estiver com focus ou quando estiver com chacked
    border: '2px solid $ignite300',
  },
})

const slidIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slidOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckBoxIndicator = styled(Checkbox.Indicator, {
  color: 'white',
  white: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slidIn} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slidOut} 200ms ease-out`,
  },
})
