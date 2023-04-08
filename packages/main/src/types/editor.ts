enum MarkDownEnum {
  IMG = '![alt text](capalot "alt text")',
  H1 = '# capalot',
  H2 = '## capalot',
  H3 = '### capalot',
  H4 = '#### capalot',
  H5 = '##### capalot',
  TEXT = 'capalot',
}

enum BlockEnum {
  IMG = 'IMG',
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  H5 = 'H5',
  TEXT = 'TEXT',
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
