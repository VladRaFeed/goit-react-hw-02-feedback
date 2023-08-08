import React from 'react';
import css from './app.module.css'
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

// export const App = () => {
//   return (
//     <div className={css.global_wrapper}>
//       <h1>app</h1>
//       <FeedBack />
//     </div>
//   );
// };

class App extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
  }
  
  addFeedBackPoint = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1,
    }))
  };

  countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad
  }
  
  countPositiveFeedbackPercentage = () => {
      return Math.round(this.state.good / (this.countTotalFeedback()) * 100)
    }


  render() {
    const types = ['good', 'neutral', 'bad']
    const { good, neutral, bad } = this.state
    const total = this.countTotalFeedback()
    const percentage = this.countPositiveFeedbackPercentage()


    return (
      <div className={css.global_wrapper}>
      <Section title='FeedBack'>
        <FeedbackOptions options={types} onLeaveFeedBack={this.addFeedBackPoint} />
      </Section>
        <Section title='Stats'>
          {total > 0 ? <Statistics good={good} neutral={neutral} bad={bad} total={total} percentage={percentage > 0 ? percentage : 0}/> : <Notification message='No feedback given'/>}
      </Section>
      </div>
    )
  }
  
}

export default App;