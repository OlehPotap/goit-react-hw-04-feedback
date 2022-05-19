import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import { useState } from 'react';

const App = () => {
  const [state, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = property => {
    const value = state[property];
    setFeedback({ ...state, [property]: value + 1 });
  };

  const { good, neutral, bad } = state;

  let totalFeedback = good + neutral + bad;
  
  return (
    <Section title="Please leave Feedback">
      <FeedbackOptions feedback={handleFeedback} options={state} />
      <h2 className="stats-box__heading">Statistics</h2>
      {totalFeedback === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
        />
      )}
    </Section>
  );
};

export default App;
