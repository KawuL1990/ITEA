import React from 'react';

const Choose = ({name, active, handler}) => {
    return(
        <div className='Choose' style={ active ? {color: 'red'} : {color: 'black'}} onClick={() => handler(name)}>
            {name}
        </div>
    );
      
};

export default Choose;