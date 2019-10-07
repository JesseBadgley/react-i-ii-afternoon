import React, {Component} from "react";

export default class Butt extends Component {

render(){
    return(
        <div className= "theButtons">
            <button className= "butts" onClick = {() => this.props.subtract()} ><b> &#60; Previous </b></button>
            <button className= "butts" onClick = {() => this.props.add()} ><b> Next &#62; </b></button>
        </div>

    );
}

}
