import React, { Component } from 'react'

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: ""
        }
    }

    handleChange = (e) => {
        //console.log(e.target.value)
        // if (e.target.value.length > 6) {
        //     alert('too long!')
        // }
        this.setState({
            title: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleOnSubmit(this.state)
        this.setState({
            title: ""
        })
    }

    render(){
        return(
            <form>
                <label>New ToDo</label>
                <input type="text" value={this.state.title} onChange={this.handleChange}></input>
                <input type="submit" onClick={this.handleSubmit}></input>
            </form>
        )
    }
}

export default Form 