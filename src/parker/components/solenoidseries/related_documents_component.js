import React from 'react';

class RelatedDocumentComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productInfo: []
        }
    }

    componentWillReceiveProps(newProps) {
        const productInfo = [];
        const productSupport = Object.keys(newProps.productSupport).length ? newProps.productSupport : null;
        const parkerSupportAssetDetailsLangMap = productSupport !== null ? productSupport.parkerSupportAssetDetailsLangMap : null;
        const objLang = parkerSupportAssetDetailsLangMap !== null ? parkerSupportAssetDetailsLangMap.EN : null;
        if (objLang !== null) {
            for (let i = 0; i < Object.keys(objLang).length; i++) {
                let obj = {
                    title: Object.keys(objLang)[i],
                    product: objLang[Object.keys(objLang)[i]]
                }
                productInfo.push(obj);
            }
        }
        this.setState({
            productInfo
        });
    }

    render() {
        return (
            <div className="content-section">
                <div className="ph-content-section__header">
                    <hr/>
                    <h3 className="ph-content-section__title">Related Documents ('Formerly Product Support') </h3>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <table className="borderless">
                            {this.state.productInfo.map((item, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <thead>
                                            <tr>
                                                <th className="bold">{item.title}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {item.product.map((subItem, indx) => {
                                                return (
                                                    <React.Fragment key={"i" + indx}>
                                                        <tr>
                                                            <td>
                                                                <a href="#">
                                                                    <i className="icon far fa-file-alt"></i>
                                                                    {subItem.description}
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </React.Fragment>
                                                )
                                            }) }

                                        </tbody>
                                    </React.Fragment>
                                )
                            }) }

                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
export default RelatedDocumentComponent; 