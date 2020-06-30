import React, { Component } from 'react'
import Item from './Item'
import Form from './Form'

class List extends Component {

    constructor(props){
        super(props)
        this.state = {
            list: [{id: 1, title: 'Grocery shop'}, {id: 2, title: 'Pick up dog food'}]
        }
    }

    handleDelete = (id) => {
        this.setState((prevState) => {
            const newListState = prevState.list.filter(item => item.id !== id)
            return {
                list: newListState
            }
        })
    }

    render(){

        const itemList = this.state.list.map(item => {
            return <Item key={item.id} id={item.id} title={item.title} handleOnDelete={this.handleDelete}/>
        })
        return(
           <>
                {itemList}
                <Form />
           </>
        )
    }

}

export default List