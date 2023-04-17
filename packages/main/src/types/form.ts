export interface Forms {
  key: string
  label: string
  i18mKey?: string
  required?: boolean
  type?: string
  textarea?: boolean
  // 让TS可以通过form[key]来访问form的属性
  [key: string]: any
}

// Path: packages\main\src\types\form.ts
