import React from "react";
import ReactDOM from "react-dom"

import { Provider } from "react-redux";
import { createStore } from "redux";

//import SeasonContainer from "./apps/season/SeasonContainer";
//import SearchContainer from "./apps/pics/SearchContainer";
//import VideoContainer from "./apps/youtube/components/VideoContainer"

//below 2 files are for Songs app
import SongsContainer from "./apps/songs/components/SongsContainer";
import reducers from "./apps/songs/reducers";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Provider store={createStore(reducers)}>
          <SongsContainer />
        </Provider>
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

              <Provider store={createStore(reducers)}>
                <SongsContainer />
              </Provider>
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