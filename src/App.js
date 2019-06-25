import React, { Component } from 'react';
import { connect } from "react-redux";
import { Route, withRouter } from 'react-router-dom';

//import './App.css';

import HeaderComponent from "./parker/components/parker_header_component";
import BreadCrumbComponent from "./parker/components/breadcrumb_component";
import ProductGalleryComponent from "./parker/components/product_gallery_component";
import ProductDetailComponent from "./parker/components/product_detail_component";
import QuotePurchaseComponent from "./parker/components/quote_purchase_component";
import RecentOrderComponent from "./parker/components/recent_order_component";
import RelatedProductComponent from "./parker/components/related_products_component";
import SimilarItemsComponent from "./parker/components/similar_items_component";
import RecentArticlesComponent from "./parker/components/recent_articles_component";
import FrequentlyAskedQuestionsComponent from "./parker/components/frequently_asked_questions_component";
import FooterComponent from "./parker/components/parker_footer_component";

import { 
  getProductDetails, 
  getItemDetails, 
  getBreadCrumbInfo, 
  getProductSupportDetails, 
  getParkerAccountInfo,
  getFrequentlyAskedQuestionInfo,
  getRelatedArticleInfo,
  getHeaderFooterInfo
} from "./services/util";

import { 
  getProducts, 
  getItems, 
  getBreadCrumb, 
  getProductSupport,
  getParkerAccount,
  getFrequentlyAskedQuestion,
  getRelatedArticle,
  getHeaderHTML,
  getFooterHTML
} from "./actions/main-action";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      productsCatalogEntryView : [],
      itemsCatalogEntryView : [],
      headerData:[],
      footerData:[]
    }
  }

  componentDidMount() {
    getProductDetails((resp) => {
      // console.log(resp);
      // console.log(getProducts(resp));
      // console.log(this.props);
      this.props.dispatch(getProducts(resp));
    });
    getItemDetails((resp)=>{
      this.props.dispatch(getItems(resp));
    });

    getBreadCrumbInfo((resp)=>{
      this.props.dispatch(getBreadCrumb(resp));
    });

    getProductSupportDetails((resp) => {
      this.props.dispatch(getProductSupport(resp));
    });

    getParkerAccountInfo((resp) => {
       this.props.dispatch(getParkerAccount(resp));
    });

    getFrequentlyAskedQuestionInfo((resp)=>{
       this.props.dispatch(getFrequentlyAskedQuestion(resp));
    });

    getRelatedArticleInfo((resp)=>{
       this.props.dispatch(getRelatedArticle(resp));
    });

    getHeaderFooterInfo((resp) => {
      function separate (html){
        let position;

        var _1bb={html:"",script:null,style:null};
        
        if(!html){
        
        return _1bb;
        
        }
        
        var _1bc=function(_1bd,_1be){
        
        var _1bf=false;
        
        var data="";
        
        var _1c1=_1be.length;
        
        while(true){
        
        var _1c2=html.indexOf(_1bd,0);
        
        if(_1c2==-1){
        
        break;
        
        }
        
        var _1c3=html.indexOf(">",_1c2);
        
        if(_1c3==-1){
        
        position=_1c2+1;
        
        break;
        
        }
        
        ++_1c3;

       var checkTemplate = html.substring(_1c2,_1c3)
        
        var _1c4=html.indexOf(_1be,_1c3);
        
        if(_1c4==-1 ){
        
        position=_1c3;
        
        break;
        
        }
        
        _1bf=true;
        
        var _1c5=html.substring(_1c2,_1c4+_1c1);
        
        _1c5=_1c5.substring(_1c3-_1c2,_1c5.length-_1c1);
        if(_1c5.indexOf("template")!=-1){
        data+=_1c5;
        }
        if(_1c5.indexOf("template")==1){
          html = _1c5+html;
          }
        var pre=html.substring(0,_1c2);
        
        html=pre+html.substring(_1c4+_1c1);
        
        }
        
        return _1bf?data:null;
        
        };
        
        _1bb.script=_1bc("<script","</script>");
        
        _1bb.style=_1bc("<style","</style>");
        
        _1bb.html=html;
        
        return _1bb;
        
        }
        let returnedDataHeader = separate(resp.response.docs[0].HEADER);
        let returnedDataFooter = separate(resp.response.docs[0].FOOTER);
       this.props.dispatch(getHeaderHTML(returnedDataHeader));
       this.props.dispatch(getFooterHTML(returnedDataFooter));
    });
  }

  componentWillReceiveProps(newProps) {
    let productsCatalogEntryView = [];
    let itemsCatalogEntryView = [];
    // let headerData = [];

    if(Object.keys(newProps.products).length > 0) {
      productsCatalogEntryView = newProps.products.catalogEntryView;
    }

    if(Object.keys(newProps.items).length > 0) {
      itemsCatalogEntryView = newProps.items.catalogEntryView;
    }

    this.setState({
      productsCatalogEntryView,
      itemsCatalogEntryView,
      
    });
  }

  render() {
    return (
      <div>
        <HeaderComponent headerDetails={this.props.headerData}></HeaderComponent>
        <div className="container-fluid px-4">
          <BreadCrumbComponent 
            breadCrumbDetails = { this.props.breadCrumb } 
          />
          
          <div className="row">
            <ProductGalleryComponent 
              productsCatalogEntryView = { this.state.productsCatalogEntryView } 
            />
            <ProductDetailComponent 
              productsCatalogEntryView = { this.state.productsCatalogEntryView }
              itemsCatalogEntryView = { this.state.itemsCatalogEntryView }
              productSupport = { this.props.productSupport }              
            />
            <QuotePurchaseComponent 
             itemsCatalogEntryView = { this.state.itemsCatalogEntryView }
             parkerAccount = { this.props.parkerAccount } 
            />
          </div>
        </div>
        <RecentOrderComponent/>
        <RelatedProductComponent/>
        <SimilarItemsComponent/>
        <FrequentlyAskedQuestionsComponent faqInfo = { this.props.faqInfo } />
        <RecentArticlesComponent relatedArticle = { this.props.relatedArticle } />
        <FooterComponent footerDetails={this.props.footerData}></FooterComponent>
      </div>
    );
  }
}

const myRouter = withRouter(App);

const mapStateToProps = (state) => ({
  products: state.products,
  items: state.items,
  breadCrumb: state.breadCrumb,
  productSupport: state.productSupport,
  parkerAccount: state.parkerAccount,
  faqInfo: state.faqInfo,
  relatedArticle: state.relatedArticle,
  headerData : state.headerData,
  footerData: state.footerData
});

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
});
export default connect(mapStateToProps, mapDispatchToProps)(myRouter);
