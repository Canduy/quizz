import { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wait from "../sounds/wait.mp3";
import wrong from "../sounds/wrong.mp3";

function Trivia({ data, setStop, questionNumber, setQuestionNmber }) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  const [playList] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);
  const [waitAnswer] = useSound(wait);

  useEffect(() => {
    waitAnswer();
  }, [waitAnswer]);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (answer) => {
    setSelectedAnswer(answer);
    setClassName("answer active");
    delay(3000, () => {
      setClassName(answer.correct ? "answer correct" : "answer wrong");
    });

    delay(5000, () => {
      if (answer.correct) {
        correctAnswer();
        delay(1000, () => {
          setQuestionNmber((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        wrongAnswer();
        delay(1000, () => {
          setStop(true);
        });
      }
    });
  };
  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((answer, index) => (
          <div
            key={index}
            className={selectedAnswer === answer ? className : "answer"}
            onClick={() => handleClick(answer)}
          >
            {answer.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trivia;
