import React, {Component} from "react"

import {launch} from '@extjs/reactor'
import { Container, Panel} from '@extjs/ext-react'

class App extends Component {
  render() {
    return (
      <Container layout="fit" padding={10} fullscreen>
        <Panel title="ExtReact" bodyPadding={10} shadow>
          Hello World!
        </Panel>
      </Container>
    );
  }
}

launch(<App />);