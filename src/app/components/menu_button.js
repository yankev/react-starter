import React, {Component} from 'react';

class MenuButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
            <li role="presentation"><a href="#">{this.props.children}</a></li>

            );
  }
}

export default MenuButton;
