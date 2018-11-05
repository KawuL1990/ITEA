import React from 'react';

const Cell = ({children, color, cells, type, bcg}) => {

    
    let styles = {
        color: color,
        flexGrow: cells,
        borderLeft: `1px solid ${color}`,
        borderRight: `1px solid ${color}`,
        background: bcg,
        fontStyle: type === "Date" ? "italic" : 'normal',
        textAlign: type === "Number" ? "right" : 'normal',
    }
    
    return (
        <div style={styles}>
            {
                children
            }
        </div>
    )
}

Cell.defaultProps = {
    type: 'text',
    cells: 1,
    background: 'transparent',
    color: 'darkred'
}

export default Cell;