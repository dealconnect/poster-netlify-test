import { ReactNode } from "react"

export type Props = {
  children: ReactNode
  type?: HTMLButtonElement['type'],
  disabled?: boolean
}
