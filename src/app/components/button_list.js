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
              <nav className="navbar navbar-default navbar-fixed-top">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand" href="#">React Tings</a>
                </div>
                <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                  {this.state.buttons.map((obj) =>
                  (<MenuButton link={obj.link} key={obj.title}
                      current={obj.title} status={obj.status}
                      onClick={this.props.setActive}>{obj.title}</MenuButton>)
                  )}
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                  <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
                </div>
              </div>
            </nav>
            </div>
            );
    }
};

export default ButtonList;
