import React, { Component } from 'react'

class Form extends Component {

    constructor(props){
        super(props)
        this.state = {
            title: "" 
        }
    }

    handleChange = (e) => {
        console.log(e.target.value)
    }

   
   
   

    render(){
        return(
            <form>
                <label>New Todo: </label>
                <input type="text" defaultValue="...type here" onChange={this.handleChange}></input>
                <input type="submit"  ></input>
            </form>
        )
    }
}

export default Form
