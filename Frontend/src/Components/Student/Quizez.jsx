import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuizData, quizReset } from '../../features/Quiz/quizSlice';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Quizez = () => {
    const dispatch = useDispatch();
    const { isLoading, quizData } = useSelector((state) => state.quiz);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(getQuizData());
        dispatch(quizReset());
        
        // Simulating delay for skeleton
        setTimeout(() => setLoading(false), 2000);
    }, [dispatch]);

    return (
        <>
            <div className='rounded-lg border-1 border-gray-300 w-full'>
                <div className='flex p-5 gap-2'>
                    <div>
                        {loading ? (
                            <Skeleton height={100} width={200} />
                        ) : (
                            <img
                                src="https://themes.stackbros.in/eduport_r/assets/01-DMWbZVrP.jpg"
                                className="rounded-md"
                                width={200}
                                height={100}
                                alt=""
                            />
                        )}
                    </div>
                    <div>
                        {loading ? (
                            <Skeleton width={400} height={30} count={3} />
                        ) : (
                            <h1 className='font-bold text-4xl max-w-xl'>
                                The Complete Digital Marketing Course - 12 Courses in 1
                            </h1>
                        )}
                    </div>
                </div>

                <hr className='text-gray-300' />

                <div className='p-5 my-4'>
                    <div className='rounded-lg border-1 border-gray-300 bg-[#F5F7F9] p-5'>
                        <div className='flex items-center w-full h-full justify-around'>
                            {loading ? (
                                <>
                                    <Skeleton circle width={40} height={40} />
                                    <Skeleton width={100} height={20} />
                                    <Skeleton circle width={40} height={40} />
                                    <Skeleton width={100} height={20} />
                                </>
                            ) : (
                                <>
                                    <div className='text-blue-500 font-bold'>1</div>
                                    <div className='text-blue-500 font-bold'>2</div>
                                    <div className='text-blue-500 font-bold'>3</div>
                                    <div className='text-blue-500 font-bold'>4</div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Quizez;
