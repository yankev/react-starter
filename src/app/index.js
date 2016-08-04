import React, { Component } from 'react';
import reactDOM from 'react-dom';
import MenuButton from './components/menu_button'
import ButtonList from './components/button_list'
import Counter from './components/counter'

class App extends Component {

    constructor(props) {
        super();
        this.state = { txt: 'Default Text' };
    };

    update(e) {
        this.setState({ txt: e.target.value });
    }

    render() {
        let text = this.state.txt;
        return ( < div >
            < div className = "container" >
            < div className = "header clearfix" >
            < ButtonList / >

            < h3 className = "text-muted" > React Tings < /h3> < /div>

            < div className = "row marketing" >
            < div className = "col-lg-12" >
            < Counter / >
            < h4 > Subheading < /h4> < p > Stuff < /p>

            < h4 > Subheading < /h4> < p > More stuff < /p>>

            < h1 > { this.state.txt } < /h1> < Button > Click Me < /Button> < input type = "text"
            onChange = { this.update.bind(this) }
            /> < /div>

            < /div> < /div> < /div>
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
        return ( < button > { this.props.children } < /button>);
    }
}

reactDOM.render( < App / > , document.getElementById('app'));
