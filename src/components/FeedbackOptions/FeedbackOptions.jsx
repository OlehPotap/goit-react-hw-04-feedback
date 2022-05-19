import s from './feedback-options.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ feedback, options } = {}) => {
  const listItem = Object.keys(options).map(option => {
    return (
      <li key={option} className={s.item}>
        <button className={s.button} onClick={() => feedback(option)}>
          {option}
        </button>
      </li>
    );
  });
  return (
    <div className="feedback__buttom-box button-box">
      <h1 className="button-box__heading">Please leave feedback</h1>
      <ul className={s.list}>{listItem}</ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  feedback: PropTypes.func.isRequired,
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};

export default FeedbackOptions;
