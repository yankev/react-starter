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
        this.setActive = this.setActive.bind(this);
    }

    setActive(key) {
      let buttons = (this.state.buttons);
      for(let i=0; i<buttons.length; i++) {
        if(buttons[i]['title'] == key) {
          buttons[i]['status'] = "active";
          this.setState({buttons: buttons});
          this.setState({test: 'working'});
        }
        else {
          buttons[i]['status'] = "not";
        }
      }
      console.log(this.state.buttons)
    }

    render() {

        return (
            <div>
            <h1> Test: {this.state.test} </h1>
            <nav>
            <ul className="nav nav-pills pull-right">
            {this.state.buttons.map((obj) =>
                (<MenuButton link={obj.route} key={obj.title}
                    current={obj.title} status={obj.status}
                    onClick={this.setActive}>{obj.title}</MenuButton>)
            )}
            </ul>
            </nav>
            </div>
            );
    }
};

export default ButtonList;
