import React from "react";
import ReactDOM from "react-dom"
import Main from "./components/SeasonContainer";


class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {}
  }

  render(){
      return (
          <div>
              <Main />
          </div>
      )
  }
  
}

ReactDOM.render(
    <App />, 
    document.getElementById("root")
);

//document.querySelector(#root)