import React from 'react';

class ItemInformationComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            readMore : true
        }
        this.showCompleteText = this.showCompleteText.bind(this);
        this.createMarkup = this.createMarkup.bind(this);
    }

    showCompleteText(flag){
        this.setState({
            readMore : !this.state.readMore
        });
    }

    createMarkup() { 
        return {__html: this.props.longDescription}; 
    };


    render() {
        return (
            <div className="content-section">
                 <div className="ph-content-section__header">
                    <hr/>
                    <h3 className="ph-content-section__title">Item Information</h3>
                 </div>
                 
                <div className="ph-overflow">
                    <div className={this.state.readMore ? 'ph-overflow__read-more' : ''}>
                        <div className="content">
                            <p dangerouslySetInnerHTML={this.createMarkup()}></p>
                        </div>
                        {(this.state.readMore) 
                            ? 
                            <span className="trigger" onClick = {()=>{this.showCompleteText(true)}}>
                                <i className = "icon fas fa-plus"></i>Read More
                            </span>
                            : 
                            <span className="trigger" onClick = {()=>{this.showCompleteText(false)}}>
                                <i className="icon fas fa-minus" ></i>Show Less
                            </span>
                        }                       
                        
                    </div>
                 </div>

               </div>
        );
    }
}
export default ItemInformationComponent; 