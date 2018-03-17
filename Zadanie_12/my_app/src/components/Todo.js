import React from 'react';

export default (props) => {
    let className = 'text';

    if (props.isFinished){

        className = 'finishDecoration'

    }

    return <React.Fragment>
        <ul>
            <li className = {className}>{props.name}</li>
        </ul>
    </React.Fragment>
}

