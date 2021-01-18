import React from 'react'

export default function ORFilter({ index: i, parentIndex, handleInputChange, handleRemoveClick, handleAddClick, handleAddarrClick, card_data, handlecardremoveClick }) {
    return (
        <div key={i}>
            <p>Card {parentIndex} Index {i}</p>
            <input
                placeholder="Enter the Firstname"
                value={card_data.firstName}
                onChange={e => handleInputChange(e, parentIndex, i)}
            /><br /><br />

            <div className="btn-box">
                {<button onClick={() => handleAddClick(parentIndex)}>OR</button>}
                {i !== 0 && <button
                    className="mr10"
                    onClick={() => handleRemoveClick(parentIndex, i)}>Remove data</button>}
            </div>
            {i === 0 && <button onClick={handleAddarrClick}>AND</button>}

            {i === 0 && parentIndex !== 0 && <button onClick={() => handlecardremoveClick(parentIndex)}>Remove Card</button>}
        </div>
    )
}
