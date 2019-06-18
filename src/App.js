import React, { Component } from 'react';
import { connect } from "react-redux";
import { Route, withRouter } from 'react-router-dom';

import './App.css';

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
  getRelatedArticleInfo
} from "./services/util";

import { 
  getProducts, 
  getItems, 
  getBreadCrumb, 
  getProductSupport,
  getParkerAccount,
  getFrequentlyAskedQuestion,
  getRelatedArticle
} from "./actions/main-action";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      productsCatalogEntryView : [],
      itemsCatalogEntryView : []
    }
  }

  componentDidMount() {
    getProductDetails((resp) => {
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
  }

  componentWillReceiveProps(newProps) {
    let productsCatalogEntryView = [];
    let itemsCatalogEntryView = [];

    if(Object.keys(newProps.products).length > 0) {
      productsCatalogEntryView = newProps.products.catalogEntryView;
    }

    if(Object.keys(newProps.items).length > 0) {
      itemsCatalogEntryView = newProps.items.catalogEntryView;
    }
    this.setState({
      productsCatalogEntryView,
      itemsCatalogEntryView
    });
  }

  render() {
    return (
      <div>
        <HeaderComponent></HeaderComponent>
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
        <FooterComponent/>
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
  relatedArticle: state.relatedArticle

});

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
});
export default connect(mapStateToProps, mapDispatchToProps)(myRouter);
