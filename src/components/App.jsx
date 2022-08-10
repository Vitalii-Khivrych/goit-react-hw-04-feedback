import { useState } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const nameFeedbacks = ['Good', 'Neutral', 'Bad'];

  const handleLeaveFeedback = evt => {
    const name = evt.target.name;

    switch (name) {
      case 'Good':
        setGood(prevState => prevState + 1);
        break;

      case 'Neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'Bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const result = countTotalFeedback() && good / countTotalFeedback();

    return Math.round(result * 100);
  };

  const isFeedback = good > 0 || neutral > 0 || bad > 0;

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={nameFeedbacks}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {isFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}

// export class OldApp extends Component {
//   static propTypes = {};

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleLeaveFeedback = evt => {
//     const name = evt.currentTarget.name;
//     this.setState(prevState => ({
//       [name]: prevState[name] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const result =
//       this.countTotalFeedback() && good / this.countTotalFeedback();

//     return Math.round(result * 100);
//   };

//   optionsKeys = Object.keys(this.state);

//   render() {
//     const { good, neutral, bad } = this.state;
//     const isFeedback = good > 0 || neutral > 0 || bad > 0;

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={this.optionsKeys}
//             onLeaveFeedback={this.handleLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {isFeedback ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
