export const convertSpecialCharsToText = (string: string): string =>
  string.replace(/&#039;/g, "'")

export const displayAuthors = (authors: Array<object>): Array<string> =>
  authors.map(
    (author, index, array) =>
      `${author}${index !== array.length - 1 ? ' & ' : ''}`
  )
