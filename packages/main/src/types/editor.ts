enum MarkDownEnum {
  IMG = '![alt text](capalot "alt text")',
  HONE = '# capalot',
}

export interface Block {
  type: MarkDownEnum
  value: string
}

export {
  MarkDownEnum,
}
