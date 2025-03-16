import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuizData, quizReset } from '../../features/Quiz/quizSlice';
import SkeletonQuiz from '../../Loaders/SkeletonQuiz';
import { IoCaretForwardSharp } from "react-icons/io5";
import { MdArrowLeft } from "react-icons/md";
import moment from 'moment';

const Quizez = () => {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(0);
    const [startNumber, setStartNumber] = useState(0);
    const [endNumber, setEndNumber] = useState(5);

    const { quiz, quizSuccess, quizError, quizMessage, quizLoading } =
        useSelector((state) => state.quiz);

    useEffect(() => {
        dispatch(getQuizData());
        dispatch(quizReset());
    }, [dispatch]);

    const handleSelected = (index) => {
        setSelected(index);
    };

    const handleForward = () => {
        if (endNumber < quiz.length) {
            setStartNumber(startNumber + 5);
            setEndNumber(endNumber + 5);
            setSelected(startNumber + 5);  // Auto-select first quiz in the next batch
        }
    };

    const handleBackward = () => {
        if (startNumber > 0) {
            setStartNumber(startNumber - 5);
            setEndNumber(endNumber - 5);
            setSelected(startNumber - 5); // Auto-select first quiz in the previous batch
        }
    };

    return (
        <div className='rounded-lg border-1 border-gray-300 w-full'>
            {quizLoading ? <SkeletonQuiz /> : (
                <>
                    <div className="flex p-2 overflow-hidden items-center gap-5">
                        <div className="overflow-hidden">
                            <img 
                                src='https://cdn-1.webcatalog.io/catalog/poki-brain-quiz-3d/poki-brain-quiz-3d-icon-filled-256.png?v=1714778866113' 
                                className='object-contain object-center'
                            />
                        </div>
                        <div className="w-full">
                            <h1 className='font-bold text-3xl max-w-xl'>
                                {quiz[selected]?.question}
                            </h1>
                        </div>
                    </div>

                    <hr className="border-0 h-[1px] bg-gray-300 my-3" />

                    <div className="p-5">
                        <div className="border border-gray-300 p-5 rounded-lg">
                            <div className="flex items-center gap-3 justify-around">
                                {quiz?.slice(startNumber, endNumber).map((item, index) => (
                                    <React.Fragment key={startNumber + index}>
                                        <div
                                            onClick={() => handleSelected(startNumber + index)}
                                            className={`h-[80px] shrink-0 w-[80px] cursor-pointer rounded-full flex items-center justify-center 
                                                ${selected === startNumber + index ? "text-white bg-blue-600" : "text-black bg-gray-200"}`}
                                        >
                                            {startNumber + index + 1}
                                        </div>
                                        <div className="h-[2px] w-[100px] bg-gray-200"></div>
                                    </React.Fragment>
                                ))}
                            </div>

                            <div className="my-10 w-full flex items-center justify-between p-2">
                                <h4 className='font-semibold text-2xl'>{quiz[selected]?.course_name}</h4>
                                <div className='flex items-center gap-1'>
                                    <span className='font-semibold deadline capitalize text-blue-600'>
                                        Due {moment(quiz[selected]?.deadline).fromNow()}
                                    </span>
                                    :
                                    <span className='text-red-400 font-semibold time'>{quiz[selected]?.time}</span>
                                </div>
                            </div>

                            <div className="my-5 w-full flex items-center justify-between p-2">
                                <div>
                                    <span className='font-semibold text-2xl max_marks'>
                                        Max Marks: <span className='text-green-600'>{quiz[selected]?.max_marks}</span>
                                    </span>
                                </div>

                                <div className='flex gap-1 items-center'>
                                    {/* Backward Button */}
                                    {startNumber > 0 && (
                                        <MdArrowLeft
                                            onClick={handleBackward}
                                            className='text-5xl cursor-pointer text-blue-600'
                                        />
                                    )}

                                    {/* Forward Button */}
                                    {endNumber < quiz.length && (
                                        <IoCaretForwardSharp
                                            onClick={handleForward}
                                            className='text-2xl cursor-pointer text-blue-600'
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Quizez;
