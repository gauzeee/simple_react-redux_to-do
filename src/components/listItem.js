import React from 'react';

export default class ListItem extends React.Component {


    render() {
        const {text} = this.props
        return(
            <li>{text}</li>
        )
    }
}