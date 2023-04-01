enum MarkDownEnum {
  IMG = '![alt text](capalot "alt text")',
  H1 = '# capalot',
  H2 = '## capalot',
}

enum BlockEnum {
  IMG = 'IMG',
  H1 = 'H1',
  H2 = 'H2',
}

export interface Block {
  id: string
  type: BlockEnum
  value: string
}

export {
  MarkDownEnum,
  BlockEnum,
}
