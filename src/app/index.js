import React, {
    Component
} from 'react';
import reactDOM from 'react-dom';
import MenuButton from './components/menu_button'
import ButtonList from './components/button_list'
import Counter from './components/counter'
import Content from './components/content'

class App extends Component {

    constructor(props) {
        super();
        this.state = {
            txt: 'Default Text',
            buttons: [{
                title: "Home",
                status: "active",
                link: "#"
            }, {
                title: "One",
                status: "not",
                link: "#"
            }]
        };
        this.setActive = this.setActive.bind(this);
    };

    update(e) {
        this.setState({
            txt: e.target.value
        });
    }

    setActive(key) {
        let buttons = (this.state.buttons);
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i]['title'] == key) {
                buttons[i]['status'] = "active";
                this.setState({
                    buttons: buttons
                });
            } else {
                buttons[i]['status'] = "not";
            }
        }
      }



render() {
    let text = this.state.txt;
    return ( < div >

        <
        ButtonList buttons={this.state.buttons} setActive={this.setActive} / >
        <
        div className = "container" >
        <
        div className = "row marketing" >
        <
        div className = "col-lg-12" >
        <
        Counter / >
        <
        Content / >

        <
        h1 > {
            this.state.txt
        } < /h1> < Button > Click Me < /Button > < input type = "text"
        onChange = {
            this.update.bind(this)
        }
        /> < /div >

        <
        /div> < /div > < /div>
    );
}
}

App.PropTypes = {
    txt: React.PropTypes.string
};

// App.defaultProps = {
//     txt: 'Default Text'
// }

class Button extends Component {
    render() {
        return ( < button > {
                this.props.children
            } < /button>);
        }
    }

    reactDOM.render( < App / > , document.getElementById('app'));
