import axios from 'axios';

export function getProductDetails(func) {
    const url = 'json/BST-10_Product.json';
    axios.get(url)
        .then((response) => {
            if (response.status === 200) {
                func(response.data);
            }
        })
        .catch((error) => {
            console.log("error = ", error);
        });
}

export function getItemDetails(func) {
    const url = 'json/BST-10-Item.json';
    axios.get(url)
        .then((response) => {
            if (response.status === 200) {
                func(response.data);
            }

        })
        .catch((error) => {
            console.log("error = ", error);
        });
}

export function getBreadCrumbInfo(func) {
    const url = 'json/BreadCrumb.json';
    axios.get(url)
        .then((response) => {
            if (response.status === 200) {
                func(response.data);
            }

        })
        .catch((error) => {
            console.log("error = ", error);
        });
}

export function getProductSupportDetails(func) {
    const url = 'json/ProductSupport-BST10.json';
    axios.get(url)
        .then((response) => {
            if (response.status === 200) {
                func(response.data);
            }

        })
        .catch((error) => {
            console.log("error = ", error);
        });
}

export function getParkerAccountInfo(func) {
    const url = 'json/ParkerB2BLocalManufactureESpot.json';
    axios.get(url)
        .then((response) => {
            if (response.status === 200) {
                func(response.data);
            }

        })
        .catch((error) => {
            console.log("error = ", error);
        });
}

export function getFrequentlyAskedQuestionInfo(func) {
    const url = 'json/ParkerB2BEspotAskedQuestions.json';
    axios.get(url)
        .then((response) => {
            if (response.status === 200) {
                func(response.data);
            }

        })
        .catch((error) => {
            console.log("error = ", error);
        });
}

export function getRelatedArticleInfo(func) {
    const url = 'json/ParkerB2BEspotRelatedArticle.json';
    axios.get(url)
        .then((response) => {
            if (response.status === 200) {
                func(response.data);
            }
        })
        .catch((error) => {
            console.log("error = ", error);
        });
}

export function getHeaderFooterInfo(func) {
    //const url='http://cor089a034:8080/SolrApi/solr/HeaderFooter/Template?id=687PDC&languageCode=EN&Coremetrics=0';
    const url = 'http://cor089yaw38:18080/SolrApi/solr/HeaderFooterPB/Template?id=687PDC&languageCode=EN&Coremetrics=0';
   // const url = 'json/serverResponse.json';
    axios.get(url)
        .then((response) => {
            if (response.status === 200) {
                func(response.data);
            }
        })
        .catch((error) => {
            console.log("error = ", error);
        });
}
// export function getHeaderFooterInfo(func) {
// axios({
//     url: 'http://cor089yaw38:18080/SolrApi/solr/HeaderFooterPB/Template?id=687PDC&languageCode=EN&Coremetrics=0',
//     method: 'get',
//     headers: {
//         Access-Control-Allow-Origin:"*",
//         Access-Control-Allow-Credentials: true
//     }
//  })
//  .then(response => {
//     if (response.status === 200) {
//         func(response.data);
//     }
//  }) 
//  .catch(err => {
//     console.log(err);
//  })
// };