import './App.css';
import React from 'react';
import Section from './components/Section';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = feedback => {
    const value = feedback;
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  countTotalFeedback({ good, neutral, bad }) {
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage({ good, neutral, bad }) {
    const total = good + neutral + bad;
    const positivePercentage = Math.round((good * 100) / total);
    return isNaN(positivePercentage) ? 0 + '%' : positivePercentage + '%';
  }

  render() {
    return (
      <Section
        title="Please leave feedback"
        handleIncrement={this.handleIncrement}
        state={this.state}
        total={this.countTotalFeedback(this.state)}
        positivePercentage={this.countPositiveFeedbackPercentage(this.state)}
      />
    );
  }
}

export default App;
