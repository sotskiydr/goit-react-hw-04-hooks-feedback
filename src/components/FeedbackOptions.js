import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="Counter__controls">
      {options.map(el => (
        <button
          key={el}
          type="button"
          value={el}
          onClick={() => {
            onLeaveFeedback(el);
          }}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
};

export default FeedbackOptions;
