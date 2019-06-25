import React from 'react';
import $ from 'jquery';
class FooterComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            html: "",
            style: "",
            script: "",
            load: false
        }
        
    };
    componentWillReceiveProps(newProps) {
        console.log(newProps);
        if(newProps.footerDetails!=null){
        this.setState({
           html: newProps.footerDetails.html,
           style: newProps.footerDetails.style,
           script: newProps.footerDetails.script,
           load: true
        });
    }
    }
    componentDidMount() {  


    }
     loadScript = function(src) {
        var tag = document.createElement('script');
        tag.async = false;
        tag.src = src;
        document.getElementsByTagName('body').appendChild(tag);
      }
      

  render() {
    // $(".panel-heading").not(".plans_section .panel-heading").on("click","a",function(){$(this).parents(".panel-group").find(".panel-heading a").filter(function(){return !$(this).hasClass("collapsed")}).not($(this)).click()});
    // //mobile view fix - If one menu is opened it should close the other menu  
    // $('.glyphicon-search_icon').click(function(){
    //     //search box traingle location fix
    //     if ( !$('.logo_section ').is(":visible") && $('.navheaderButton').hasClass( "opened" ) ) { 
    //         $(".navheaderButton").click();
    //     }
    //     setTimeout(function(){
    //       $('.triangle').css( 'margin-right',(($('.advanced-search-container').width()+$('.advanced-search-container').offset().left)-($('.search_btn').offset().left))+20+"px");
    //     }, 400);
    // });
      try{
    if(this.state.load && this.state.script){
        this.loadScript('https://www.parker.com/parker/jsp/HeaderFooterAPiTest/resources/js/globalSearch.js?path=parker')
        // const script = document.createElement("script");
        // script.src = "https://www.parker.com/parker/jsp/HeaderFooterAPiTest/resources/js/globalSearch.js?path=parker";
        // script.async = true;
        // script.onload = () => this.scriptLoaded();
        // document.body.appendChild(script);
        window.evalScript(this.state.script,'footer');
        }
    }catch(e){
        console.log()
    }
              return (
          <div  className="wrapper" dangerouslySetInnerHTML={{__html: this.state.html}}></div>
      );
  }
  
}
export default FooterComponent;