import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { getFortune } from './getFortune';

const RecordButton = styled.button.attrs({ children: 'Record' })`
  background-color: papayawhip;
  border: 0;
  flex: 1;
  font-family: inherit;
  font-size: 100%;
`;

const OutputDisplay = styled.pre`
  border: 1px solid papayawhip;
  color: white;
  flex: 10;
  font-family: Fira Code, monospace;
  padding: 1em;
`;

const StatusText = styled.div`
  align-items: center;
  color: white;
  display: flex;
  flex: 1;
  justify-content: center;
`;

const Wrapper = styled.section`
  background-image: linear-gradient(22deg, palevioletred, rebeccapurple);
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 100vh;
  width: 100vw;

  & > * {
    margin: 1em;
  }
`;

class VoiceRecognizer extends PureComponent {
  constructor() {
    super();

    this.recordingStates = {
      recording: {
        text: 'Listening for input'
      },
      waiting: {
        text: 'Waiting to start'
      }
    };

    this.state = {
      capturedText: '',
      status: this.recordingStates.waiting
    };

    this.speechRecognition = new window.webkitSpeechRecognition();
    this.speechRecognition.lang = 'en-US';
    this.speechRecognition.interimResults = false;
    this.speechRecognition.maxAlternatives = 1;
    this.speechRecognition.onresult = this.handleResult;
    this.speechRecognition.onend = this.handleEnd;

    // Allow outside scripts to initiate recording
    window.startRecording = this.startRecording;
  }

  handleResult = async ({ results }) => {
    const capturedText = results[0][0].transcript;
    this.setState({ capturedText });
    await getFortune(capturedText);
    this.stopRecording();
  };

  handleEnd = () => {
    this.stopRecording();
  };

  startRecording = () => {
    this.speechRecognition.start();
    this.setState({ status: this.recordingStates.recording });
  };

  stopRecording() {
    this.speechRecognition.stop();
    this.setState({ status: this.recordingStates.waiting });
  }

  render() {
    const { capturedText, status } = this.state;

    return (
      <Wrapper>
        <RecordButton
          disabled={status === this.recordingStates.recording}
          onClick={this.startRecording}
        />

        <StatusText>{status.text}</StatusText>

        <OutputDisplay>{capturedText}</OutputDisplay>
      </Wrapper>
    );
  }
}

export default VoiceRecognizer;
