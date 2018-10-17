import React, { Fragment, PureComponent } from 'react';
import GlobalStyles from './GlobalStyles';
import VoiceRecognizer from './VoiceRecognizer';

class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <GlobalStyles />
        <VoiceRecognizer />
      </Fragment>
    );
  }
}

export default App;
