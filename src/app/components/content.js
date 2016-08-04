import React, {Component} from 'react';
import Counter from './counter'

export default class Content extends Component {

  constructor(props) {
    super(props);
  }
  render () {
    switch(this.props.active) {
    case "Home":
      return (
        <div className="content">
          < h4 > Subheading < /h4> < p > Stuff < /p>
          < h4 > Subheading < /h4> < p > More stuff < /p>>
        </div>
      );
    case "One":
      return (<h4>fuck yall</h4>);
    case "Counter":
      return (<Counter />);
    default:
      return (<h4>Default</h4>);
  }
  }
}
