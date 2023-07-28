export function limitText(text: string, limitText: number): string {
  if (text.length <= limitText) {
    return text
  }

  return text.slice(0, limitText - 3) + '...'
}
