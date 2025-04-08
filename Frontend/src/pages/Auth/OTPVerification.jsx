import React, { useState, useRef, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { userReset, verifyOtp } from '../../features/User/userSlice';

const OTPVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const [activeInput, setActiveInput] = useState(0);
  const [isError, setIsError] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const inputRefs = useRef([]);

  const dispatch = useDispatch();
  const {  user, userError, userMessage, userSuccess } = useSelector((state) => state.auth);

  // Handle side effects
  useEffect(() => {
    if (userError) {
      toast.error(userMessage);
      setIsError(true);
      dispatch(userReset());
    }

    if (userSuccess) {
      setIsVerified(true);
      setIsError(false);
      dispatch(userReset());
    }
  }, [userError, userMessage, userSuccess, dispatch]);

  // Countdown logic
  useEffect(() => {
    if (resendDisabled) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setResendDisabled(false);
            return 30;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [resendDisabled]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setIsError(false);
      if (index < 4 && value) {
        setActiveInput(index + 1);
        inputRefs.current[index + 1].focus();
      }
    } else if (value === '') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      setActiveInput(index - 1);
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text/plain').slice(0, 5);
    if (/^[0-9]{5}$/.test(pasteData)) {
      const newOtp = pasteData.split('');
      setOtp(newOtp);
      setActiveInput(Math.min(4, newOtp.length - 1));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    if (enteredOtp.length === 5) {
      const otpData = {
        id: user?._id,
        otp,
      };
      dispatch(verifyOtp(otpData));
    } else {
      setIsError(true);
    }
  };

  const handleResend = () => {
    console.log('Resending OTP...');
    setResendDisabled(true);
    setCountdown(30);
    // You can trigger a resend API call here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-md">
        <div className="p-8">
          {isVerified ? (
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Verification Successful!</h2>
              <p className="text-gray-600 mb-6">Your account has been verified successfully.</p>
              <button
                onClick={() => {
                  setIsVerified(false);
                  setOtp(['', '', '', '', '']);
                  setActiveInput(0);
                }}
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 transition duration-200"
              >
                Continue
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">OTP Verification</h2>
                <p className="text-gray-600">
                  We've sent a 5-digit code to your email/phone
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="flex justify-between mb-8">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleChange(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      onPaste={handlePaste}
                      onFocus={() => setActiveInput(index)}
                      ref={(el) => (inputRefs.current[index] = el)}
                      className={`w-12 h-12 text-2xl text-center border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ${
                        isError
                          ? 'border-red-500 shake'
                          : activeInput === index
                          ? 'border-indigo-500'
                          : 'border-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {isError && (
                  <div className="mb-4 text-red-500 text-center">
                    Invalid OTP. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 transition duration-200 mb-4"
                >
                  Verify
                </button>

                <div className="text-center text-sm text-gray-600">
                  Didn't receive code?{' '}
                  <button
                    type="button"
                    onClick={handleResend}
                    disabled={resendDisabled}
                    className={`font-medium ${
                      resendDisabled
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-indigo-600 hover:text-indigo-800'
                    }`}
                  >
                    {resendDisabled ? `Resend in ${countdown}s` : 'Resend OTP'}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        .shake {
          animation: shake 0.5s;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
      `}</style>
    </div>
  );
};

export default OTPVerification;
