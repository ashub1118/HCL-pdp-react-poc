import React from 'react';
{/* import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion'; */}

class FrequentlyAskedQuestionsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.accordianClicked = this.accordianClicked.bind(this);
        this.createMarkup = this.createMarkup.bind(this);

    }   
    

    createMarkup() {
         const faqInfo = this.props.faqInfo;
         if(faqInfo && Object.keys(faqInfo).length) {
             const marketingSpotData = faqInfo.MarketingSpotData;
             const baseMarketingSpotActivityData = marketingSpotData[0].baseMarketingSpotActivityData;
             const marketingContentDescription = baseMarketingSpotActivityData[0].marketingContentDescription;
             const marketingText = marketingContentDescription[0].marketingText;
             return {__html: marketingText}; 
         }
         return null;
    };

    accordianClicked(evt) {

    }

    render() {
        return (
            <div className="container-fluid px-4">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <div className="content-section">
                            <div dangerouslySetInnerHTML={this.createMarkup()}></div>
                            {/* <div className="ph-content-section__header">
                                <h3 className="ph-content-section__title">Frequently Asked Questions</h3>
                            </div> */}

                            {/* <Accordion className="ph-accordion" allowMultipleExpanded = {true} allowZeroExpanded = {true}>
                                <AccordionItem className="ph-accordion__item" onClick={(evt)=>{this.accordianClicked(evt)}}>
                                    <AccordionItemHeading>
                                    <AccordionItemButton className="ph-accordion__title js-accordion-title" 
                                        >
                                        Here's a question
                                    </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                    <p className="ph-accordion__content ph-accordion__content--open js-accordion-content">
                                       By not having the imagination to imagine what the content "might" be, a design consideration is lost. Meaning becomes obfuscated because "it's just text", understandability gets compromised because nobody realized that this text stuff was actually meant to be read. Opportunities get lost because the lorem ipsum garbage that you used instead of real content didn't suggest opportunities. The text then gets made really small, because, it's not meant to be used, we might as well create loads of that lovely white space.
                                    </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="ph-accordion__item" onClick={(evt)=>{this.accordianClicked(evt)}}>
                                    <AccordionItemHeading>
                                    <AccordionItemButton className="ph-accordion__title js-accordion-title">
                                        Here's a question
                                    </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                    <p className="ph-accordion__content ph-accordion__content--open js-accordion-content">
                                       By not having the imagination to imagine what the content "might" be, a design consideration is lost. Meaning becomes obfuscated because "it's just text", understandability gets compromised because nobody realized that this text stuff was actually meant to be read. Opportunities get lost because the lorem ipsum garbage that you used instead of real content didn't suggest opportunities. The text then gets made really small, because, it's not meant to be used, we might as well create loads of that lovely white space.
                                    </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="ph-accordion__item" onClick={(evt)=>{this.accordianClicked(evt)}}>
                                    <AccordionItemHeading>
                                    <AccordionItemButton className="ph-accordion__title js-accordion-title">
                                        Here's a question
                                    </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                    <p className="ph-accordion__content ph-accordion__content--open js-accordion-content">
                                       By not having the imagination to imagine what the content "might" be, a design consideration is lost. Meaning becomes obfuscated because "it's just text", understandability gets compromised because nobody realized that this text stuff was actually meant to be read. Opportunities get lost because the lorem ipsum garbage that you used instead of real content didn't suggest opportunities. The text then gets made really small, because, it's not meant to be used, we might as well create loads of that lovely white space.
                                    </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="ph-accordion__item" onClick={(evt)=>{this.accordianClicked(evt)}}>
                                    <AccordionItemHeading>
                                    <AccordionItemButton className="ph-accordion__title js-accordion-title">
                                        Here's a question
                                    </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                    <p className="ph-accordion__content ph-accordion__content--open js-accordion-content">
                                       By not having the imagination to imagine what the content "might" be, a design consideration is lost. Meaning becomes obfuscated because "it's just text", understandability gets compromised because nobody realized that this text stuff was actually meant to be read. Opportunities get lost because the lorem ipsum garbage that you used instead of real content didn't suggest opportunities. The text then gets made really small, because, it's not meant to be used, we might as well create loads of that lovely white space.
                                    </p>
                                    </AccordionItemPanel>
                                </AccordionItem >
                                <AccordionItem className="ph-accordion__item" onClick={(evt)=>{this.accordianClicked(evt)}}>
                                    <AccordionItemHeading>
                                    <AccordionItemButton className="ph-accordion__title js-accordion-title">
                                        Here's a question
                                    </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                    <p className="ph-accordion__content ph-accordion__content--open js-accordion-content">
                                       By not having the imagination to imagine what the content "might" be, a design consideration is lost. Meaning becomes obfuscated because "it's just text", understandability gets compromised because nobody realized that this text stuff was actually meant to be read. Opportunities get lost because the lorem ipsum garbage that you used instead of real content didn't suggest opportunities. The text then gets made really small, because, it's not meant to be used, we might as well create loads of that lovely white space.
                                    </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="ph-accordion__item" onClick={(evt)=>{this.accordianClicked(evt)}}>
                                    <AccordionItemHeading>
                                    <AccordionItemButton className="ph-accordion__title js-accordion-title">
                                        Here's a question
                                    </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                    <p className="ph-accordion__content ph-accordion__content--open js-accordion-content">
                                       By not having the imagination to imagine what the content "might" be, a design consideration is lost. Meaning becomes obfuscated because "it's just text", understandability gets compromised because nobody realized that this text stuff was actually meant to be read. Opportunities get lost because the lorem ipsum garbage that you used instead of real content didn't suggest opportunities. The text then gets made really small, because, it's not meant to be used, we might as well create loads of that lovely white space.
                                    </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>*/}


                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default FrequentlyAskedQuestionsComponent; 