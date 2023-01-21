const googleURLShortener = require('google-url')

const urlShortener = (url) => {
  const googleUrl = new googleURLShortener({
    key: "MyKey"
  })

    googleUrl.shorten(url, (err, shortUrl) => {
      if (err) {
        console.log(err)
      }
      return shortUrl
    })

}

console.log(urlShortener("https://www.google.com"))