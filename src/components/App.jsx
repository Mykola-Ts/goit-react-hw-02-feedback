import { Component } from 'react';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Wrapper } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((prevValue, number) => {
      return prevValue + number;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { countTotalFeedback, state } = this;
    const countTotal = countTotalFeedback();

    return `${Math.round((state.good / countTotal) * 100) || 0}%`;
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { countTotalFeedback, countPositiveFeedbackPercentage } = this;
    const totalFeedback = countTotalFeedback();

    return (
      <Layout>
        <Wrapper>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>

          <Section title="Statistics">
            {totalFeedback ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalFeedback}
                positivePercentage={countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification text="There is no feedback" />
            )}
          </Section>
        </Wrapper>

        <GlobalStyle />
      </Layout>
    );
  }
}
