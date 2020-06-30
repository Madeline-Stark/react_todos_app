import React from 'react'

const Item = ({id, title, handleOnDelete}) => {

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

