import React, { Component } from 'react'


class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: ""
        }
    }

    handleChange = (e) => {
        if (e.target.value.length > 6){
            alert('too long!')
        } 
        this.setState({
            title: e.target.value
        }) 
        
    }

    render(){
        return(
            <form>
                <label>New Todo: </label>
                <input type="text" value={this.state.value} onChange={this.handleChange}></input>
            </form>
        )
    }
}

export default Form 