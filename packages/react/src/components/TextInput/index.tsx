import { ComponentProps } from 'react'
import { Prefix, TextInputContainer, Input } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string // é o que vem antes do que sera escrito no input
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      {/* se houver um prefixo, coloca o componente prefix */}
      <Input {...props} />
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
