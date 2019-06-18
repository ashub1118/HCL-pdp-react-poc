import React from 'react';

class QuotePurchaseComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            price: ""
        }
        this.createMarkup = this.createMarkup.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            price: newProps.itemsCatalogEntryView.length ? newProps.itemsCatalogEntryView[0].price : ""
        });
    }

     createMarkup() {
         const parkerAccount = this.props.parkerAccount;
         if(parkerAccount && Object.keys(parkerAccount).length) {
             const marketingSpotData = parkerAccount.MarketingSpotData;
             const baseMarketingSpotActivityData = marketingSpotData[0].baseMarketingSpotActivityData;
             const marketingContentDescription = baseMarketingSpotActivityData[0].marketingContentDescription;
             const marketingText = marketingContentDescription[0].marketingText;
             return {__html: marketingText}; 
         }
         return null;
    };

    render() {
        return (
            <div className="order-2 col-md-3 order-md-3 col-lg-3 col-xl-2">
                <div className="content-section cart-widget pb-1">
                    {(this.state.price !== "" && this.state.price.map((item, index) => {
                        if (item.usage === "Offer") {
                            return (
                                <h2 key={index}>${item.value}/part</h2>
                            )
                        }

                    })
                    ) }

                    <table className="borderless">
                        <tbody>
                            <tr>
                                <td className="bold">Quantity: </td>
                                <td>
                                    <input type="number" className="form-control w-50" placeholder="1" />
                                </td>
                            </tr>
                            <tr>
                                <td className="bold">Availability: </td>
                                <td>In stock</td>
                            </tr>
                            <tr>
                                <td className="bold">Shipping: </td>
                                <td>Usually within 2 business</td>
                            </tr>
                        </tbody>
                    </table>
                    <a href="#" className="button round-button full-button">Buy Now</a>
                    <a href="#" className="button round-button full-button">Request a Quote</a>
                </div>
                <div className="content-section pb-1">
                    <hr/>
                    <h3>Find a Distributor</h3>
                    <a href="#" className="button accent-button round-button full-button">Where to Buy</a>
                </div>
                <div className="content-section pb-1" dangerouslySetInnerHTML={this.createMarkup()}>
                </div>

                {/* <div className="content-section pb-1">
                    <hr/>
                    <h3>Local Manufacturer</h3>
                    <p>Precision Fluidics Division<br/>26 Clinton Drive, Unit 103 Hollis, NH 03049, United States</p>
                    <p className="no-margin-bottom"><a href="tel:4401914029000"><i className="icon fas fa-phone"></i>+44 (0) 191 402 9000</a></p>
                    <p><a href="mailto:#"><i className="icon fas fa-envelope"></i>Email Manufacturer</a></p>
                </div> */}
                <div className="content-section pb-1">
                    <hr/>
                    {/*<a href="#" className="button accent-button round-button full-button mt-3 hide-mobile">Begin live chat</a>
                    <article className="ph-card-basic hide-mobile">
                        <header className="ph-card-basic__header">
                            <h2 className="ph-card-basic__title">Get your Parker account Today!</h2>
                        </header>
                        <div className="ph-card-basic__body">
                            <p>Benefits benefits benefits dolor sit amet, cons ectetur adi piscing elit, sed do eiu tem por inci didunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <footer className="ph-card-basic__footer">
                            <a href="#" className="button accent-button round-button small-button">register now</a>
                        </footer>
                    </article>*/}
                    <article className="ph-card-basic hide-mobile">
                        <header className="ph-card-basic__header">
                            <h2 className="ph-card-basic__title">Need Help?Call Now: </h2>
                            <hr/>
                        </header>
                        <div className="ph-card-basic__body">
                            <h2>1-800-272-7537</h2>
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}
export default QuotePurchaseComponent; 