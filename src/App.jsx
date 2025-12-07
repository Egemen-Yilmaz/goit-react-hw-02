import './App.css';
import { useEffect, useState } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';

export default function App() {

  const [feedback, setFeedback] = useState( () => {
    const localFeedback = window.localStorage.getItem('feedback');

    if (localFeedback) {
      return JSON.parse(localFeedback);
    }

    return {
    good: 0,
    neutral: 0,
    bad: 0,
    };
  });


  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    window.localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);


  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;


  return (
    <div className="container">
      <Description />
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback}/>
      <Feedback feedback={feedback} totalFeedback={totalFeedback} positivePercentage={positivePercentage}/>
    </div>
  );
}

