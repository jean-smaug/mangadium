export const convertSpecialCharsToText = string =>
  string.replace(/&#039;/g, "'")

export const displayAuthors = (authors = []) =>
  authors.map(
    (author, index, array) =>
      `${author}${index !== array.length - 1 ? ' & ' : ''}`
  )
