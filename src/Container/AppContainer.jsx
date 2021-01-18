import React from 'react'

export default function AppContainer({ children, inputList }) {
    return (
        <div>
            <div style={{ marginTop: 20 }}><p>Result Data </p>{JSON.stringify(inputList)}</div><br />
            {children}
        </div>
    )
}
