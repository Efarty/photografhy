import React from 'react'
import "../json/questionsAnswers.json"
import "../css/questionsAnswers.css"
import questionsData from "../json/questionsAnswers.json";


const QuestionsAnswers = () => {
    const [questions, setQuestions] = React.useState(questionsData);
    const [activeIndex, setActiveIndex] = React.useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Function to display all questions and answers
    const showAllQuestionsAnswers = () => {
        setActiveIndex("all");
    };

const imageArray = [
    // Add your image URLs or paths here
];

    return (
        <div  className='div_questions_answers'>
            <h1 className="taytel_photografhy"> -שאלות ותשובות-</h1>
            <p className='txt_photografhy'>לכל שאלה יש תשובה </p>
            {questions.map((item, index) => (
                <div className='div-txt-answer' key={index} id={`question-${index + 1}`}>
                    <div>
                        <p
                            id={`question-text-${index + 1}`}
                            className='txt-question-answer'
                            data-page="/questions_Answers"
                            onClick={() => toggleAnswer(index)}
                        >
                            {item.question}
                        </p>
                        {(activeIndex === index || activeIndex === "all") && (
                            <p id={`answer-text-${index + 1}`} className='txt-answer-answer' data-page="/questions_Answers">
                                {item.answer}
                            </p>
                        )}
                    </div>
                </div>
            ))}
 
        </div>
    )
}

export default QuestionsAnswers;
