import React from 'react';

const Spinner: React.FC = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="spinner relative w-[120px] h-[120px]">
                <div className="spinner-before absolute top-1/2 left-1/2 w-[30px] h-[30px] bg-purple-100 from-purple-300 via-blue-200 to-green-300 shadow-[0_0_10px_rgba(0,0,0,0.25)] animate-up"></div>
                <div className="spinner-after absolute top-[calc(50%-30px)] left-[calc(50%-30px)] w-[30px] h-[30px] bg-purple-100 animate-down"></div>
            </div>
            <style>
                {`
      .animate-up {
        animation: up 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
      }

      .animate-down {
        animation: down 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
      }

      @keyframes down {
        0%, 100% {
          transform: none;
        }
        25% {
          transform: translateX(100%);
        }
        50% {
          transform: translateX(100%) translateY(100%);
        }
        75% {
          transform: translateY(100%);
        }
      }

      @keyframes up {
        0%, 100% {
          transform: none;
        }
        25% {
          transform: translateX(-100%);
        }
        50% {
          transform: translateX(-100%) translateY(-100%);
        }
        75% {
          transform: translateY(-100%);
        }
      }
    `}
            </style>
        </div>
    );
};

export default Spinner;
