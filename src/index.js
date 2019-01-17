import React from "react";
import ReactDOM from "react-dom"

//import SeasonContainer from "./apps/season/SeasonContainer";
//import SearchContainer from "./apps/pics/SearchContainer";
import VideoContainer from "./apps/youtube/components/VideoContainer"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <VideoContainer />
      </div>
    );
  }
  /*
  render() {
    return (
      <div>
          <header><h1>Header Tabs</h1></header>
            <section>
              <SeasonContainer />
              <SearchContainer />
              <VideoContainer />
            </section>

          <footer><i>Footer</i></footer>
        </div>
    )
  }
  */
}

ReactDOM.render(
    <App />, 
    document.getElementById("root")
);

//document.querySelector(#root)