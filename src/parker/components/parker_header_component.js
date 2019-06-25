import React from 'react';
class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            html: "",
            style: "",
            script: ""

        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({
           html: newProps.headerDetails.html,
           style: newProps.headerDetails.style,
           script: newProps.headerDetails.script
        });
    }
    componentDidMount() {
      
      }

    
    render() {
        console.log(this.state.script);
        try{
        if(this.state.script){
            window.evalScript(this.state.script,'header');
            }
        }catch(e){
            //console.log(e);
        }
        // if(this.state.script){
        //     try{
        //      var safeEval = require('safe-eval');        
        //      var evaluated = safeEval(this.state.script);
        //     //console.log(evaluated);
        //     }catch(e){console.log(e);}
        //     }
       return (
            <div  className="wrapper" dangerouslySetInnerHTML={{__html: this.state.html}}></div>
        );
    }
}
export default HeaderComponent; 