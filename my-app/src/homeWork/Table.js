import React from 'react'
import Row from './Row'
import Cell from './Cell'

const Table = () => {
    return (
        <div className="Table">
            <Row head='true'>
                <Cell cells={3} type={'Date'}  color="gray">
                    Hellow im Cell
                </Cell>
                <Cell cells={2} type={'Number'} color="blue">
                    3.1415926
                </Cell>
                <Cell cells={1} type={'Money'} bcg='yellow'>
                    28.05
                </Cell>
                <Cell cells={4} type={'Date'}>
                21.10.2018
                </Cell>
            </Row>
            <Row>
                <Cell cells={3} type={'Date'}  color="gray">
                    Hellow im Cell
                </Cell>
                <Cell cells={5} type={'Number'} color="blue">
                    3.1415926
                </Cell>
                <Cell cells={1} type={'Money'} bcg='yellow'>
                    28.05
                </Cell>
                <Cell cells={2} type={'Date'}>
                21.10.2018
                </Cell>
            </Row>
        </div>
    )
}

export default Table