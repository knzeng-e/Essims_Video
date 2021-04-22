const renderPage = (activePage) => {
    switch (activePage) {
      case 'Series':
        return '/series'
      case 'Animes':
        return '/animes'
      case 'Films':
        return '/films'
      case 'Documentaires':
        return '/documentaires'
      case 'Clips':
        return '/clips'
      default: return '/'
    }
  }

  const rubriques = [
      'Accueil', 'Series', 'Animes', 'Films', 'Documentaires', 'Clips'
  ]

  module.exports = {
      renderPage,
      rubriques
  }