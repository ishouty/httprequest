## FT Customer Products technical exercise

### What we expect

Write a JavaScript package that is able to:

- Fetch an array of URLs which contain JSON data
- Return their contents in a promise

When writing this package, you should consider:

- Error states
- Testing
- Documentation
- Choice of dependencies

## Features

- Javascript package, which allows to take multiple urls and returns content in promise

- Tests
- Documentation

Languages/Dependencies used

- Node
- ES6
- Babel
- Jest
- Axios
- ramda

## How to install

1. `cd ishouty_request`

2. `npm install`

## How to use (async/await) ES6 example

```
import ishouty_httpRequest from 'ishouty_httpRequest'

  const urls = [
      'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
      'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
      'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json',
    ]

  const callRequests = async (urlsParams) => {
    return await request.requestUrls(urlsParams)
  }

  callRequests(urls)

```

## How to run tests

`npm run test`

## How to watch tests

`npm run test:watch`

## Improvements and features

- Pass configuration object to include default features for requests such as baseUrl
- Update more test coverage
- Remove any dependencies to reduce size of library such as nodemon, lintrc.js etc...
