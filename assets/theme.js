function languageSelectorOnChange(form) {
  const formData = new FormData(form)
  const language = formData.get('language')

  const regex = new RegExp(`^/?${ Shopify.locale }`, 'g')
  const path = location.pathname.replace(regex, '')

  location.href = [
    location.origin,
    language !== '/' && language,
    path,
    location.search,
    location.hash
  ].filter(Boolean).join('')
}
