import React, {Component} from 'react';

class MenuButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let url = this.props.link;
    let class_value = this.props.status

    return (
            <li
            onClick={() => {
              this.props.onClick(this.props.current);
            }}><a href={this.props.link} className={class_value}>
            {this.props.children}</a></li>
            );
  }
}

export default MenuButton;
