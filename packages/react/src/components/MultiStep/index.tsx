import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>
      <Steps css={{ '--steps-size': size }}>
        {/* com a propriedade css dentro do stitches é possivel usar variavveis jsx dentro da estilização
        como neste caso que declarou que a var --steps-size é igual ao o size que foi definido na
        interface */}
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
        {/* array.from serve para criar um array passando o lenght: size que vai pegar o valor do size da
        interface, e como lá esta como padrão 4 criará um array com 4 posições.
        (_, i) => i + 1) na segunda propriedade do array from passa uma função que percorre 
        todo o aray e pega o conteudo dele (_, i) e na segunda posição é o indice(que é 0,1.2...),
        então quando o valor for alterado ele somara esse valor mais um e no return vai retornar a div
        step */}
      </Steps>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'
