import React from 'react';

class RecentArticlesComponent extends React.Component {

    constructor(props) {
        super(props);
        this.createMarkup = this.createMarkup.bind(this);
    }

    createMarkup() {
        const relatedArticle = this.props.relatedArticle;
        if (relatedArticle && Object.keys(relatedArticle).length) {
            const marketingSpotData = relatedArticle.MarketingSpotData;
            const baseMarketingSpotActivityData = marketingSpotData[0].baseMarketingSpotActivityData;
            const marketingContentDescription = baseMarketingSpotActivityData[0].marketingContentDescription;
            const marketingText = marketingContentDescription[0].marketingText;
            return { __html: marketingText };
        }
        return null;
    };

    render() {
        return (
            <div className="container-fluid px-4">
                <div className="row">
                    <div className="col-12">
                        <div className="ph-content-section__header p-1">
                            <hr/>
                            <h3 className="ph-content-section__title">Related Articles &amp; Community Threads</h3>
                        </div>

                        <div className="ph-card-deck" dangerouslySetInnerHTML={this.createMarkup()}>

                            {/*<div className="ph-card-deck__scrollable">
                                <article className="ph-card-community">
                                    <a href="#">
                                        <header className="ph-card-community__header">
                                            <div className="ph-card-vertical__image">
                                                <img src={`assets/img/community-article.png`}/>
                                            </div>
                                            <h2 className="ph-card-community__title">Solenoid Valve Selection for Harsh Outdoor Appications</h2>
                                        </header>
                                        <div className="ph-card-community__body">
                                            <p>By: Fluid Gas Handling Team on tuesday, october 4, 2016</p>
                                        </div>
                                    </a>
                                </article>
                            </div>

                            <div className="ph-card-deck__scrollable">
                                <article className="ph-card-community">
                                    <a href="#">
                                        <header className="ph-card-community__header">
                                            <div className="ph-card-vertical__image">
                                                <img src={`assets/img/community-article.png`}/>
                                            </div>
                                            <h2 className="ph-card-community__title">Solenoid Valve Selection for Harsh Outdoor Appications</h2>
                                        </header>
                                        <div className="ph-card-community__body">
                                            <p>By: Fluid Gas Handling Team on tuesday, october 4, 2016</p>
                                        </div>
                                    </a>
                                </article>
                            </div>

                            <div className="ph-card-deck__scrollable">
                                <article className="ph-card-community">
                                    <a href="#">
                                        <header className="ph-card-community__header">
                                            <div className="ph-card-vertical__image">
                                                <img src={`assets/img/community-article.png`}/>
                                            </div>
                                            <h2 className="ph-card-community__title">Solenoid Valve Selection for Harsh Outdoor Appications</h2>
                                        </header>
                                        <div className="ph-card-community__body">
                                            <p>By: Fluid Gas Handling Team on tuesday, october 4, 2016</p>
                                        </div>
                                    </a>
                                </article>
                            </div>

                            <div className="ph-card-deck__scrollable">
                                <article className="ph-card-community">
                                    <a href="#">
                                        <header className="ph-card-community__header">
                                            <div className="ph-card-vertical__image">
                                                <img src={`assets/img/community-article.png`}/>
                                            </div>
                                            <h2 className="ph-card-community__title">Solenoid Valve Selection for Harsh Outdoor Appications</h2>
                                        </header>
                                        <div className="ph-card-community__body">
                                            <p>By: Fluid Gas Handling Team on tuesday, october 4, 2016</p>
                                        </div>
                                    </a>
                                </article>
                            </div>

                            <div className="ph-card-deck__scrollable">
                                <article className="ph-card-community">
                                    <a href="#">
                                        <header className="ph-card-community__header">
                                            <div className="ph-card-vertical__image">
                                                <img src={`assets/img/community-article.png`}/>
                                            </div>
                                            <h2 className="ph-card-community__title">Solenoid Valve Selection for Harsh Outdoor Appications</h2>
                                        </header>
                                        <div className="ph-card-community__body">
                                            <p>By: Fluid Gas Handling Team on tuesday, october 4, 2016</p>
                                        </div>
                                    </a>
                                </article>
                            </div>

                            <div className="ph-card-deck__scrollable">
                                <article className="ph-card-community">
                                    <a href="#">
                                        <header className="ph-card-community__header">
                                            <div className="ph-card-vertical__image">
                                                <img src={`assets/img/community-article.png`}/>
                                            </div>
                                            <h2 className="ph-card-community__title">Solenoid Valve Selection for Harsh Outdoor Appications</h2>
                                        </header>
                                        <div className="ph-card-community__body">
                                            <p>By: Fluid Gas Handling Team on tuesday, october 4, 2016</p>
                                        </div>
                                    </a>
                                </article>
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default RecentArticlesComponent; 