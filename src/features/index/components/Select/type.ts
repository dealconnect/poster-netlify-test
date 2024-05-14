import { ReactNode } from "react"

export type Props = {
  name: string
  label: string
  children: ReactNode
  type?: HTMLInputElement['type'],
  placeholder?: HTMLInputElement['placeholder']
}
