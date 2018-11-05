import React from 'react';

const ListItem = ({interviewed, user}) => {
    let { name, age, company, phone, balance, index } = user;

    if(index % 2 === 0){
        interviewed = true
    }

    return(
        <div className={interviewed ? 'ListItemTrue' : 'ListItemFalse'}>
            <p className="person">{name}</p>
            <p className="person">{age}</p>
            <p className="person">{company}</p>
            <p className="person">{phone}</p>
            <p className="person">{balance}</p>
        </div>
    )
}

export default ListItem;
                            