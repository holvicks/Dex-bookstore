// ToggleVisibility.tsx

import React from 'react';

interface ToggleVisibilityProps {
  showPassword: boolean;
  toggleVisibility: () => void;
}

const ToggleVisibility: React.FC<ToggleVisibilityProps> = ({
  showPassword,
  toggleVisibility,
}) => {
  return (
    <div className="absolute inset-y-0 right-0  flex items-center pointer-events-none">
      <button
        type="button"
        onClick={toggleVisibility}
        className="text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500"
        aria-label={showPassword ? 'Hide password' : 'Show password'}
      >
        {showPassword ? (
          <svg
            className="h-5 w-5 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L12.586 11 9.293 7.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M5 10a1 1 0 011-1h1.268l2.606-2.606a1 1 0 111.414 1.414L8.086 10l2.793 2.793a1 1 0 11-1.414 1.414L7.268 11H6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 4a6 6 0 00-6 6c0 1.116.303 2.162.82 3.052L3.293 14.707a1 1 0 001.414 1.414l7.365-7.364A5.983 5.983 0 0016 10a6 6 0 00-6-6zm0 10a3.975 3.975 0 01-3.411-1.937l6.448-6.448A3.975 3.975 0 0110 14z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ToggleVisibility;
