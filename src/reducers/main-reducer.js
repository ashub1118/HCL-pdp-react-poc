const initialState = {
    products:{},
    items:{},
    breadCrumb:{},
    productSupport:{},
    parkerAccount:{},
    faqInfo:{},
    relatedArticle:{}
};

const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
        {
            return (Object.assign({}, state, { products: action.payload }));
        }
        case 'GET_ITEMS':
        {
            return (Object.assign({}, state, { items: action.payload }));
        }
        case 'GET_BREADCRUMB':
        {
            return (Object.assign({}, state, { breadCrumb: action.payload }));
        }
        case 'GET_PRODUCT_SUPPORT':
        {
            return (Object.assign({}, state, { productSupport: action.payload }));
        }
        case 'GET_PARKER_ACCOUNT':
        {
            return (Object.assign({}, state, { parkerAccount: action.payload }));
        }
        case 'GET_FREQUENTLY_ASKED_QUESTION':
        {
            return (Object.assign({}, state, { faqInfo: action.payload }));
        }
        case 'GET_RELATED_ARTICLE':
        {
            return (Object.assign({}, state, { relatedArticle: action.payload }));
        }
        default:
            return state;
    }
};

export default MainReducer;