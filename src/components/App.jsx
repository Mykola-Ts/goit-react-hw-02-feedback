import { Component } from 'react';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Wrapper } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = ({ good, neutral, bad } = this.state) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = ({ countTotalFeedback, state } = this) => {
    const countTotal = countTotalFeedback();

    if (countTotal) {
      const positiveFeedback = Math.round((state.good / countTotal) * 100);

      return `${positiveFeedback}%`;
    } else {
      return '0%';
    }
  };

  onLeaveFeedback = evt => {
    this.setState(prevState => {
      switch (evt.target.id) {
        case 'good':
          return {
            good: prevState.good + 1,
          };

        case 'neutral':
          return {
            neutral: prevState.neutral + 1,
          };

        case 'bad':
          return {
            bad: prevState.bad + 1,
          };

        default:
          return prevState;
      }
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { countTotalFeedback, countPositiveFeedbackPercentage } = this;

    return (
      <Layout>
        <Wrapper>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />

          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Wrapper>

        <GlobalStyle />
      </Layout>
    );
  }
}
