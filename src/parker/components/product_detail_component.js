import React from 'react';
import XValueInformation from './solenoidseries/xValue_information_component';
import TechnicalSpecificationComponent from './solenoidseries/technical_specification_component';
import ItemInformationComponent from './solenoidseries/item_information_component';
import CADDrawingFilesComponent from './solenoidseries/cad_drawing_files_component'
import RelatedDocumentComponent from './solenoidseries/related_documents_component'
import CertificationComponent from './solenoidseries/certification_component'
class ProductDetailComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            shortDescription: "",
            longDescription:"",
            itemsCatalogEntryViewAttributes: []

        }
    }

    componentWillReceiveProps(newProps) {
        let itemsCatalogEntryViewAttributes = [];
        if(newProps.itemsCatalogEntryView.length && newProps.itemsCatalogEntryView[0].attributes) {
            itemsCatalogEntryViewAttributes = newProps.itemsCatalogEntryView[0].attributes;
        }

        this.setState({
            name: newProps.productsCatalogEntryView.length ? newProps.productsCatalogEntryView[0].name : "",
            shortDescription: newProps.productsCatalogEntryView.length ? newProps.productsCatalogEntryView[0].shortDescription : "",
            longDescription: newProps.productsCatalogEntryView.length ? newProps.productsCatalogEntryView[0].longDescription : "",
            itemsCatalogEntryViewAttributes
        });
    }

    render() {
        const rootProductDetailStyle = {
            borderRight: '1px #dedede solid',
            borderLeft: '1px #dedede solid'

        }
        return (
            <div className="order-3 col-md-6 order-md-2 col-lg-6 col-xl-8" style={rootProductDetailStyle}>
                <section>
                    <XValueInformation 
                        name = {this.state.name} 
                        shortDescription = {this.state.shortDescription}
                    />
                    <TechnicalSpecificationComponent 
                        itemsCatalogEntryViewAttributes = { this.state.itemsCatalogEntryViewAttributes }/>
                    <ItemInformationComponent 
                        longDescription = { this.state.longDescription } 
                    />
                    <CADDrawingFilesComponent cadDrawings = { this.props.cadDrawings } />
                    <RelatedDocumentComponent productSupport = { this.props.productSupport }/>
                    <CertificationComponent/>
                </section>
            </div>
        );
    }
}
export default ProductDetailComponent; 