import React from 'react';

const Row = ({children, head}) => {

    let header;

    if(head){
        header = {
            border: "1px solid black",
            fontWeight: "900",
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '20px'
        }
    } else {
        header = {
            display: 'flex',
            justifyContent: 'space-between'
        }
    }
    return (
        <div style={header}>
            {
                children.map(item => item)
            }
        </div>
    )
}

Row.DefaultProps = {
    head: "false"
}

export default Row;