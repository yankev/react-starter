import React, {Component} from 'react';
import MenuButton from './menu_button';

class ButtonList extends Component {

    constructor(props) {
        super(props);
        this.state = {buttons: ['Home', 'One', 'Two']};
    }

    render() {

        return (
            <div>
            <nav>
            <ul className="nav nav-pills pull-right">
            {this.state.buttons.map((title) => {
                (<MenuButton>{title}</MenuButton>)
            })}
            </ul>
            </nav>
            </div>
            );
    }
};

export default ButtonList;
