import React from 'react';
import { Button } from '@mui/material';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
      <img 
        src={course.thumbnail} 
        alt={course.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{course.students.toLocaleString()} students</p>
        
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full" 
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
          <p className="text-right text-xs text-gray-500 mt-1">{course.progress}% complete</p>
        </div>
        
        <div className="flex justify-between">
          <Button size="small" variant="outlined">
            View
          </Button>
          <Button size="small" variant="contained" color="primary">
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;