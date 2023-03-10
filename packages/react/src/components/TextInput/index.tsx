import { ComponentProps, forwardRef, ElementRef } from 'react'
import { Prefix, TextInputContainer, Input } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string // é o que vem antes do que sera escrito no input
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        {/* se houver um prefixo, coloca o componente prefix */}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
