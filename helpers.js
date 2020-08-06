const constants = require('./text.js')

const validateUrls = (urls) => {
  if (!Array.isArray(urls)) {
    throw new Error(constants.errorMessage.notValidArray)
  }

  return urls.every((url) => {
    return validateUrl(url) !== false
  })
}

const validateUrl = (url) => {
  return new RegExp(
    /^(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
  ).test(url)
}

module.exports = {
  validateUrls,
  validateUrl,
}
