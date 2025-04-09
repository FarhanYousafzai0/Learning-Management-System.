// StudentSVG.js
import React from 'react';

const StudentSvg = ({ className }) => (
  <svg className={className} viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="250" cy="180" r="80" fill="#FFFFFF" />
    <path d="M250 260C150 260 70 340 70 440H430C430 340 350 260 250 260Z" fill="#FFFFFF" />
    <path d="M350 120C350 164.183 314.183 200 270 200C225.817 200 190 164.183 190 120C190 75.8172 225.817 40 270 40C314.183 40 350 75.8172 350 120Z" fill="#FFFFFF" />
    <path d="M270 160C316.183 160 350 126.183 350 80H190C190 126.183 223.817 160 270 160Z" fill="#FFFFFF" />
    <path d="M100 440C100 355.817 168.817 287 253 287H287C371.183 287 440 355.817 440 440" stroke="#FFFFFF" strokeWidth="20" />
  </svg>
);

export default StudentSvg;