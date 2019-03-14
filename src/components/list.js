import React from 'react';
import ListItem from './listItem';
import {connect} from "react-redux";


 class List extends React.Component {

     renderItems(arr) {
         console.log("PROPS", this.props)
         console.log("STATE", this.state)
         console.log(arr)
         if(arr) {
             arr.items.map(item => {
                 return <ListItem text={item.text} className='list-item'/>
             })
         } else {
             return <span>No todos!</span>
         }
     }

    render() {
        return(
            <ul className='list'>
                {this.renderItems(this.props.state)}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        state: state.itemsReducer
    }
};

export default connect(mapStateToProps)(List);