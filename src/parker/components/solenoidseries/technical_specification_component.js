import React from 'react';

class TechnicalSpecificationComponent extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="content-section">               
                  <div className="ph-content-section__header">
                    <hr/>
                    <h3 className="ph-content-section__title">Technical Specifications</h3>
                 </div>
                  
                  <div className="row">
                      <div className="col-lg-12 col-xl-6">
                          <table className="borderless">
                              <tbody>
                                  {
                                    this.props.itemsCatalogEntryViewAttributes && this.props.itemsCatalogEntryViewAttributes.map((item,index) => {
                                      if(item.usage === "Descriptive") {
                                         return (
                                            <tr key={index}>
                                              <td className="bold">{item.name}</td>
                                              <td>{item.values[0].value}</td>
                                            </tr>
                                         )
                                      }
                                    })
                                  }                                
                                  
                              </tbody>
                          </table>
                      </div>
                      <div className="col-lg-12 col-xl-6">
                         
                          <div className="ph-warning">
                            <p><i className="fas fa-exclamation-triangle" style={{'color':'#D33C40'}}></i>  WARNING: This product has some really bad stuff in it.</p>
                          </div>
                      </div>
                  </div>
              </div>
        );
    }
}
export default TechnicalSpecificationComponent; 