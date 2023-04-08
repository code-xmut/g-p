import type { Block } from '@/types/editor'
import { useMarkDown } from '@/composables'
import { BlockEnum, MarkDownEnum } from '@/types'

export const convertBlocks2MD = (blocks: Block[]) => {
  let mdString = ''

  const MarkdownMap: Record<BlockEnum, MarkDownEnum> = {
    [BlockEnum.IMG]: MarkDownEnum.IMG,
    [BlockEnum.H1]: MarkDownEnum.H1,
    [BlockEnum.H2]: MarkDownEnum.H2,
    [BlockEnum.H3]: MarkDownEnum.H3,
    [BlockEnum.H4]: MarkDownEnum.H4,
    [BlockEnum.H5]: MarkDownEnum.H5,
    [BlockEnum.TEXT]: MarkDownEnum.TEXT,
  }

  blocks.forEach((block) => {
    const { type, value } = block

    const result = useMarkDown(MarkdownMap[type], value)

    mdString += result
  })
  return mdString
}
