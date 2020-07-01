import React, { Component } from 'react'

const Item = ({title, handleOnDelete, id}) => {

    const onDelete = function(){
        handleOnDelete(id)
    }

    return (
        <>
            <h2>{title}</h2>
            <button onClick={onDelete}>X</button>
        </>
    )
}

export default Item
