export const useMarkDownImg = (v: string, title = 'alt text'): string => {
  const template = '![alt text](imagePath "alt text") /n'

  return JSON.stringify(template.replace('alt text', title).replace('imagePath', v))
}
