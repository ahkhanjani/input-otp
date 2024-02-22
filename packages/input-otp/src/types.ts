export interface OTPInputRenderProps {
  slots: { isActive: boolean; char: string | null; hasFakeCaret: boolean }[]
  isFocused: boolean
  isHovering: boolean
}
type OverrideProps<T, R> = Omit<T, keyof R> & R
export type OTPInputProps = OverrideProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  {
    value?: string
    onChange?: (newValue: string) => unknown

    maxLength: number

    allowNavigation?: boolean
    inputMode?: 'numeric' | 'text'

    onComplete?: (...args: any[]) => unknown

    render: (props: OTPInputRenderProps) => React.ReactElement

    containerClassName?: string
  }
>
export enum SelectionType {
  CARET = 0,
  CHAR = 1,
  MULTI = 2,
}
export interface Metadata {
  lastClickTimestamp: number
}