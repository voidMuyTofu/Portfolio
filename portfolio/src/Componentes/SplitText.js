import React from 'react';


class SplitText extends React.Component{
    render(){
        return(
            
            <span aria-label={this.props.copy} role={this.props.role}>
                {
                    
                    this.props.copy.split("").map(function(char, index){
                        let style = {"animationDelay": ( parseFloat(this.props.delay) + index / 10) + "s"}
                        return <span
                                    aria-hidden="true"
                                    key={index}
                                    style={style}>
                                        {char}
                                </span>
                    }.bind(this))
                }
            </span>

            
        );
    }
}

export default SplitText;
