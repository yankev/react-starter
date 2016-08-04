import React, {Component} from 'react';

class MenuButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let url = this.props.link;
    return (
            <li role="presentation" className={this.props.status}
            onClick={this.props.onClick.bind(this)}><a href={this.props.link}>
            {this.props.children}</a></li>
            );
  }
}

export default MenuButton;
