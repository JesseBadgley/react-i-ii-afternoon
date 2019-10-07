import React, { Component } from 'react'
import info from "./data.js"
export default class DatDisp extends Component {
    render() {
        console.log(info)
        return(
            <div className= "datDisp">
                <h1 className= "counter">{info[this.props.data.index].id}/25</h1>
                <h1 className= "underLine">{info[this.props.data.index].name.first} {info[this.props.data.index].name.last}</h1>
                <p><b>From:</b> &nbsp; {info[this.props.data.index].city}</p>
                <p><b>Title:</b> &nbsp; {info[this.props.data.index].title}</p>
                <p><b>Employer:</b> &nbsp; {info[this.props.data.index].employer}</p>
                <br></br>
                
                <ol className = "List"><b>Favorite Movies:</b> {info[this.props.data.index].favoriteMovies.map(el => <li>{el}</li>)}</ol>
                
            </div>
        );
    }


}