import type { MarkDownEnum } from '@/types'

export const useMarkDown = (type: MarkDownEnum, v: string): string => {
  const result = `${type.replace('capalot', v)} \\n `

  return result
}
