import React, { Component } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

export class App extends Component {
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = evt => {
    const name = evt.currentTarget.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const result =
      this.countTotalFeedback() && good / this.countTotalFeedback();

    return Math.round(result * 100);
  };

  optionsKeys = Object.keys(this.state);

  render() {
    const { good, neutral, bad } = this.state;
    const isFeedback = good > 0 || neutral > 0 || bad > 0;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.optionsKeys}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {isFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
