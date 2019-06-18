import React from 'react';

class FooterComponent extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <footer className="ph-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 p-2 mt-3">   
                            <ul className="ph-list">
                                <li><a href="#"><img src="assets/img/logo.png" /></a></li>
                                <li><a href="tel:18001234567">800-123-4567</a></li>
                                <li><a href="#">sales@parker.com</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <h3>Products</h3>
                            <div className="row">
                                <div className="col-6">
                                    <ul className="ph-list">
                                        <li>
                                            <a href="#">Aerospace 
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">Air Preperation and Dryers</a>
                                        </li>
                                        <li>
                                            <a href="#">Cylinders and Actuators</a>
                                        </li>
                                        <li>
                                            <a href="#">EMI Shildeing </a>
                                        </li>
                                        <li>
                                            <a href="#">Filters, and Purifiers</a>
                                        </li>
                                        <li>
                                            <a href="#"> Fitings and Quick Couplings</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul className="ph-list">
                                        <li><a href="#">Gas Generators</a></li>
                                        <li><a href="#">Hose, Pipe, and Tubing </a></li>
                                        <li><a href="#">Medical and Dental</a></li>
                                        <li><a href="#"> Motors and Drives</a></li>
                                        <li><a href="#"> Pumps </a></li>
                                        <li><a href="#">Seals and O-Rings</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <form>
                                <label htmlFor="comments"><i className="icon fas fa-comment-alt"></i>Need Help? Live Chat Now.</label>
                                <textarea id="comments"></textarea>
                                <input type="submit" value="Submit" className="button accent-button round-button small-button"/>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="ph-global-footer" style={{'margin':'1.5rem 0'}}>
                    <img className="responsive-image" src="assets/img/globalfooter.png"/>
                </div>
        </footer>
        );
    }
}
export default FooterComponent; 