import React, { Component } from 'react';
import Item from './Item'
import Form from './Form'


class List extends Component {

    constructor(props){
        super(props)
        this.state = { list: [{id: 1, title: 'Buy groceries'}, {id: 2, title: 'Clean the house'}, {id: 3, title: 'Call Sam'}] }
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
        const itemList  = this.state.list.map(item => {
            return <Item id={item.id} key={item.id} title={item.title} handleOnDelete={this.handleDelete}/>
        }
    )
        return(
            <div>
                {itemList}
                <Form />
            </div>
        )
    }
}

export default List