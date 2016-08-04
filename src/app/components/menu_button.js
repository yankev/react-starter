import React, {Component} from 'react';

class MenuButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let url = this.props.link;
    return (
            <li role="presentation" onClick={this.props.onClick}><a href="#">{this.props.children}</a></li>
            );
  }
}

export default MenuButton;
