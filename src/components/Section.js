import React from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statictics';
import Notification from './Notification';
import PropTypes from 'prop-types';

const Section = ({
  title,
  state,
  total,
  positivePercentage,
  handleIncrement,
}) => {
  const [good, neutral, bad] = state;
  const btnNames = ['good', 'neutral', 'bad'];
  function renderStatistic() {
    return (
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      />
    );
  }

  return (
    <div>
      <h2>{title}</h2>
      <FeedbackOptions onLeaveFeedback={handleIncrement} options={btnNames} />
      {total > 0 ? (
        renderStatistic()
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  state: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
  handleIncrement: PropTypes.func.isRequired,
};

export default Section;
