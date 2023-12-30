import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

const handleAnsweSelect =(questionId, selectedOption)=>{
console.log(selectedOption)
}
useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch("/quiz.json");
      const data = await res.json();
      //console.log(data)
      setQuestions(data);
    } catch (error) {
      console.error("Error fetching quiz data:", error);
    }
  };

  fetchData();
}, []);


  return (
    <section>
      <div>
        header
      </div>

      <div className='md:w-9/12 w-[90%] mx-auto'>
        <div className='md:w-[70%] w-full'>
          {
            questions.map((quest, index) => (
              <div key={quest.id}
                className='mb-3 py-3 px-4 shadow-sm border border-gray-200 rounded'>
                <p className='flex items-center text-xs cursor-pointer
                p-2 rounded '>
                  <span className='h-8 w-8 bg-yellow-300 
                  rounded-full flex items-center 
                  justify-center text-green-800 mr-3'>{index + 1} </span>
                  <span className='text-base block'>{quest.question}</span>
                </p>

                {/* show options of the questions */}
                <div className='grid grid-cols-2 gap-4 mt-5'>
                  {
                    quest.options.map((option, index) => (
                      <div onClick={() => handleAnsweSelect(quest.id, option)} key={index} className={`border p-2 border-gray-200
                        rounded tex text-xs cursor-pointer
                        ${answers[quest.id] === option ? "bg-red-200" : ''}`}>
                        <p className='text[10px] m-1'>
                          {index + 1}
                        </p>
                        <p>{option}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Quiz