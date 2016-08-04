import React, {Component} from 'react';
import MenuButton from './menu_button';

class ButtonList extends Component {

    constructor(props) {
        super(props);
        this.state = {buttons: [{title: 'Home', route: '#', status: "active"},
                                {title: 'One', route: '#', status: "not"},
                                {title: 'Two', route: '#', status: "not"}],
                      test: 'not'
                     };
    }

    setActive(element) {
      let state = this.props.status['buttons'];
      let key = this.props.current;
      alert(key);
      console.log(state);
      for(let i=0; i<state.length; i++) {
        if(state[i]['title'] == key) {
          state[i]['status'] = "active";
          this.props.status.setState({test: 'working'});
        }
        else {
          state[i]['status'] = "not";
        }
      }
    }

    render() {

        return (
            <div>
            <h1> Test: {this.state.test} </h1>
            <nav>
            <ul className="nav nav-pills pull-right">
            {this.state.buttons.map((obj) =>
                (<MenuButton link={obj.route} key={obj.title}
                    current={obj.title} status={this.state}
                    onClick={this.setActive}>{obj.title}</MenuButton>)
            )}
            </ul>
            </nav>
            </div>
            );
    }
};

export default ButtonList;
