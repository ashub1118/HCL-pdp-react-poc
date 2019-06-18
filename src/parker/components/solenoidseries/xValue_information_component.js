import React from 'react';

class XValueInformation extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="content-section">
                <h1 className="hide-mobile"> { this.props.name }  |  #912-000001-002 </h1>
                <p> { this.props.shortDescription } </p>
      
                <div className="d-flex flex-row bd-highlight mb-3 pl-2">
                  <div className="p-2 bd-highlight hide-mobile"><a href="#"><i className="icon fas fa-plus"></i>Add to Compare</a></div>
                  <div className="p-2 bd-highlight"><a href="#"><i className="icon fas fa-folder-plus"></i>Add to My Projects</a></div>
                  <div className="p-2 bd-highlight hide-mobile"><a href="#"><i className="icon fas fa-list"></i>View Series Page</a></div>
                  <div className="p-2 bd-highlight"><a href="#"><i className="icon fas fa-share"></i>Share / Email</a></div>
                  <div className="p-2 bd-highlight hide-mobile"><a href="#"><i className="icon fas fa-print"></i>Print</a></div>
                </div>

              </div>
        );
    }
}
export default XValueInformation; 