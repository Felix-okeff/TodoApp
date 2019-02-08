import React, {Component} from 'react';
import FlipMove from 'react-flip-move';

class TodoItems extends Component {
    constructor(props){
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(item) {
        return (
            <div key={item.key}>
                {item.text}
                <i className="delete-btn fa fa-times-circle" onClick={() => this.delete(item.key)} ></i>
            </div>
        )
    }

    delete(key) {
        this.props.delete(key);
    }

    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.createTasks);

        return(
            <div className='theList'>
                <FlipMove duration={250} easing='ease-out'> 
                    {listItems} 
                </FlipMove>
            </div>
        )
    }
}

export default TodoItems

