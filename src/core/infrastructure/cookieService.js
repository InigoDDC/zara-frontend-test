export const cookieService = {
  save: (name, value) => {
    document.cookie = `${name}='${JSON.stringify(value)}'; expires=${new Date(new Date().getTime() + 60 * 60 * 1000)};`
  },

  get: name => {
    const decodedCookie = decodeURIComponent(document.cookie)
    const splitCookies = decodedCookie.split(';')
    for (let i = 0; i < splitCookies.length; i++) {
      let value = splitCookies[i]
      while (value.charAt(0) == ' ') {
        value = value.substring(1)
      }
      if (value.indexOf(name + '=') == 0) {
        return JSON.parse(value.substring(name.length, value.length))
      }
    }
    return ''
  }
}
