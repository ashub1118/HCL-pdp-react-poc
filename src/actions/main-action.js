export function getProducts(payload) {
  console.log('In products');
  return { 
      type: "GET_PRODUCTS", 
      payload 
    }
}

export function getItems(payload) {
  return { 
      type: "GET_ITEMS", 
      payload 
    }
}


export function getBreadCrumb(payload) {
  return { 
      type: "GET_BREADCRUMB", 
      payload 
    }
}

export function getProductSupport(payload) {
  return { 
      type: "GET_PRODUCT_SUPPORT", 
      payload 
    }
}

export function getParkerAccount(payload) {
  return { 
      type: "GET_PARKER_ACCOUNT", 
      payload 
    }
}

export function getFrequentlyAskedQuestion(payload) {
  return { 
      type: "GET_FREQUENTLY_ASKED_QUESTION", 
      payload 
    }
}
 
export function getRelatedArticle(payload) {
  return { 
      type: "GET_RELATED_ARTICLE", 
      payload 
    }
}

export function getHeaderHTML(payload) {
  return { 
      type: "GET_HEADER_HTML", 
      payload 
    }
}

export function getFooterHTML(payload) {
  return { 
      type: "GET_FOOTER_HTML", 
      payload 
    }
}
