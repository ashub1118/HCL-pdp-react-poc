import React from 'react';

class BreadCrumbComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            catentryIdBreadcrumb: []
        }
    }

    componentWillReceiveProps(newProps) {
        const catentryIdBreadcrumb = Object.keys(newProps.breadCrumbDetails).length ? newProps.breadCrumbDetails.catentryIdBreadcrumb.replace(/#\d*/g, "").split("|") : [];
        this.setState({
            catentryIdBreadcrumb
        });
    }

    render() {
        return (
            <div className="row hide-mobile">
                <div className="full-container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            {(
                                this.state.catentryIdBreadcrumb.length && this.state.catentryIdBreadcrumb.map((item, index) => {
                                return (
                                        <li key={index} className="breadcrumb-item" aria-current="page"><a href="#">{item}</a></li>
                                    )
                                })
                            )}


                        </ol>
                    </nav>
                </div>
            </div>
        );
    }
}
export default BreadCrumbComponent; 