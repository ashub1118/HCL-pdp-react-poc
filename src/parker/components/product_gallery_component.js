import React from 'react';

class ProductGalleryComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fullImage: ""
        }
    }

    componentWillReceiveProps(newProps) {
        const fullImage = newProps.productsCatalogEntryView.length ? newProps.productsCatalogEntryView[0].fullImage.split("///")[1] : "";
        this.setState({
            fullImage 
        });
    }

    render() {
        const displayNone = {
            display:'none'
        }
        return (
            <div className="col-md-3 col-lg-3 col-xl-2">
                <h1 className="show-mobile">X-Valve - Miniature Pneumatic Solenoid Valve  |  #912-000001-002 </h1>
                <div className="d-flex flex-row bd-highlight mb-3 pl-2">
                    <div className="p-2 bd-highlight show-mobile">
                        <a href="#">
                            <i className="icon fas fa-list"></i>View Series Page
                        </a>
                    </div>
                </div>
                <section id="gallery" className="simplegallery">
                    <div className="content">
                        <img src={`assets/img/X-Valve_Miniature_Pneumatic_Solenoid_Valve_zm.jpg`} className="image_1" alt="" />
                        <img src={`assets/img/Miniature_Pneumatic_Solenoid_Valve_zm.png`} className="image_2" style={displayNone} alt=""/>
                        <img src={`assets/img/X-Valve_Miniature_Pneumatic_Solenoid_Valve_zm.jpg`} className="image_3" style={displayNone} alt=""></img>     
                        <img src={`assets/img/X-Valve_Miniature_Pneumatic_Solenoid_Valve_zm.jpg`} className="image_4" style={displayNone} alt=""></img>     
                        <img src={`assets/img/Miniature_Pneumatic_Solenoid_Valve_zm.png`} className="image_5" style={displayNone} alt=""></img>     
                        <img src={`assets/img/Miniature_Pneumatic_Solenoid_Valve_zm.png`} className="image_6" style={displayNone} alt=""></img>
                    </div>
                    
                    <div className="thumbnail">
                        <div className="thumb">
                          <a href="#" rel="1">
                            <img src={`assets/img/X-Valve_Miniature_Pneumatic_Solenoid_Valve_zm.jpg`} id="thumb_1" alt=""></img>     
                          </a>
                      </div>
                      <div className="thumb">
                          <a href="#" rel="2">
                              <img src={`assets/img/Miniature_Pneumatic_Solenoid_Valve_zm.png`} id="thumb_2" alt=""></img>     
                          </a>
                      </div>
                      <div className="thumb">
                          <a href="#" rel="3">
                              <img src={`assets/img/X-Valve_Miniature_Pneumatic_Solenoid_Valve_zm.jpg`} id="thumb_3" alt=""></img>     
                          </a>
                      </div>
                      <div className="thumb">
                          <a href="#" rel="3">
                              <img src={`assets/img/Miniature_Pneumatic_Solenoid_Valve_zm.png`} id="thumb_4" alt=""></img>     
                          </a>
                      </div>
                      <div className="thumb">
                          <a href="#" rel="3">
                              <img src={`assets/img/Miniature_Pneumatic_Solenoid_Valve_zm.png`} id="thumb_5" alt=""></img>     
                          </a>
                      </div>
                      <div className="thumb last">
                          <a href="#" rel="4">
                              <img src={`assets/img/X-Valve_Miniature_Pneumatic_Solenoid_Valve_zm.jpg`} id="thumb_6" alt=""></img>     
                          </a>
                      </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default ProductGalleryComponent; 