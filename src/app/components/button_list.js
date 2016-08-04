import React, {Component} from 'react';
import MenuButton from './menu_button';

class ButtonList extends Component {

    constructor(props) {
        super(props);
        this.state = {buttons: this.props.buttons,
                      test: 'not'
                     };
    }

    render() {
        return (
            <div>
                <ul className="topnav">
                  {this.state.buttons.map((obj) =>
                  (<MenuButton link={obj.link} key={obj.title}
                      current={obj.title} status={obj.status}
                      onClick={this.props.setActive}>{obj.title}</MenuButton>)
                  )}
                </ul>
            </div>
            );
    }
};

export default ButtonList;
