import './App.css';
import React, { useState } from 'react';
import Section from './components/Section';

// class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleIncrement = feedback => {
//     const value = feedback;
//     this.setState(prevState => ({
//       [value]: prevState[value] + 1,
//     }));
//   };

//   countTotalFeedback({ good, neutral, bad }) {
//     return good + neutral + bad;
//   }

//   countPositiveFeedbackPercentage({ good, neutral, bad }) {
//     const total = good + neutral + bad;
//     const positivePercentage = Math.round((good * 100) / total);
//     return isNaN(positivePercentage) ? 0 + '%' : positivePercentage + '%';
//   }

//   render() {
//     return (
//       <Section
//         title="Please leave feedback"
//         handleIncrement={this.handleIncrement}
//         state={this.state}
//         total={this.countTotalFeedback(this.state)}
//         positivePercentage={this.countPositiveFeedbackPercentage(this.state)}
//       />
//     );
//   }
// }
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = feedback => {
    if (feedback === 'good') {
      setGood(good + 1);
    }
    if (feedback === 'neutral') {
      setNeutral(neutral + 1);
    }
    if (feedback === 'bad') {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = (good, neutral, bad) => {
    const total = good + neutral + bad;
    const positivePercentage = Math.round((good * 100) / total);
    return isNaN(positivePercentage) ? 0 + '%' : positivePercentage + '%';
  };

  return (
    <Section
      title="Please leave feedback"
      handleIncrement={handleIncrement}
      state={[good, neutral, bad]}
      total={countTotalFeedback(good, neutral, bad)}
      positivePercentage={countPositiveFeedbackPercentage(good, neutral, bad)}
    />
  );
}

export default App;
