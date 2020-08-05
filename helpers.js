import { errorMessage } from './constants/text'

export const validateUrls = (urls) => {
  if (!Array.isArray(urls)) {
    throw new Error(errorMessage.notValidArray)
  }

  return urls.every((url) => {
    return validateUrl(url) !== false
  })
}

export const validateUrl = (url) => {
  return new RegExp(
    /^(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
  ).test(url)
}
