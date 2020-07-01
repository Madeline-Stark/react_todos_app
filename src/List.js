import React, { Component } from 'react'
import Item from './Item'
import Form from './Form'

class List extends Component {

    constructor(props){
        super(props)
        this.state = {
            list: [{id: 1, title: 'make tie dye shirts'}, {id: 2, title: 'make tie dye face masks'}]
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

    addNewTodo = (data) => {
        console.log(data)
        const newTodo = {
            id: this.state.list.length + 1,
            title: data.title
        }
        this.setState((prevState) => {
            return {
                list: [...prevState.list, newTodo]
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
                <Form handleOnSubmit={this.addNewTodo}/>
            </>
        )
    }
}

export default List