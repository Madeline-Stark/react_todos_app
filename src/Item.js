import React from 'react';

const Item = ({id, title, handleOnDelete}) => {

    const onDelete = function() {
        handleOnDelete(id)
    }

    return (
        <div>
        <button onClick={onDelete}>X</button>
            <h2>{title}</h2>
        </div>
    )
}

export default Item