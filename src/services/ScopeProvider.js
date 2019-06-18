import React, { Component } from 'react';
import ScopeContext from './ScopeContext';

class ScopeProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
    }

    render() {
        return (
            <ScopeContext.Provider
                value = {{
                    product: this.state.product
                }}>
                {this.props.children}
            </ScopeContext.Provider>
        );
    }

}