import React, {Component} from 'react';
import MenuButton from './menu_button';

class ButtonList extends Component {

    constructor(props) {
        super(props);
        this.state = {buttons: [{title: 'Home', route: '#'},
                                {title: 'One', route: '#'},
                                {title: 'Two', route: '#'}],
                     };
    }

    setActive(element) {
        alert(element);
    }

    render() {

        return (
            <div>
            <nav>
            <ul className="nav nav-pills pull-right">
            {this.state.buttons.map((obj) =>
                (<MenuButton link={obj.id} key={obj.title} onClick={this.setActive}>{obj.title}</MenuButton>)
            )}
            </ul>
            </nav>
            </div>
            );
    }
};

export default ButtonList;
