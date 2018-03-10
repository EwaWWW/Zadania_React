import React from 'react';

export default class Header extends React.Component {
    render() {
        let style = {
            textAlign: 'center',
            textTransform: 'uppercase',
        };

        return <React.Fragment>
        <header style={style}>Supa Strikas</header>
        </React.Fragment>
    }
}