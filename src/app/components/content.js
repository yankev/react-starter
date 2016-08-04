import React, {Component} from 'react';


export default class Content extends Component {

  constructor(props) {
    super(props);
  }
  render () {
    switch(this.props.active) {
    case "Home":
      return (
        <div>
          < h4 > Subheading < /h4> < p > Stuff < /p>
          < h4 > Subheading < /h4> < p > More stuff < /p>>
        </div>
      );
    case "One":
      return (<h4>fuck yall</h4>);
    default:
      return (<h4>Default</h4>);
  }
  }
}
