// InstructionsModal.js
import React from 'react';

function InstructionsModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-zinc-700 bg-opacity-90 backdrop-blur-sm text-gray-200 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h3 className="text-2xl leading-6 font-medium text-gray-100" id="modal-title">
              AB Game Instructions
            </h3>
            <div className="mt-3">
              <p className="text-lg">
                The AB Game is a code-breaking game where the codebreaker tries to guess the codemaker's secret code.
              </p>
              <ul className="list-disc list-outside text-lg space-y-2 pl-5 mt-2">
                <li>The secret code is a sequence of 4 unique digits (0-9).</li>
                <li>
                  After each guess, the codemaker provides a hint:
                  <ul className="list-disc list-outside pl-5 mt-1">
                    <li>"A" indicates a correct digit in the correct position.</li>
                    <li>"B" indicates a correct digit in the wrong position.</li>
                  </ul>
                </li>
                <li>
                  The hint format is "<span className="text-red-400">x</span>A<span className="text-blue-400">y</span>B", where:
                  <ul className="list-disc list-outside pl-5 mt-1">
                    <li>"<span className="text-red-400">x</span>" is the number of correct digits in the correct position (A).</li>
                    <li>"<span className="text-blue-400">y</span>" is the number of correct digits in the wrong position (B).</li>
                  </ul>
                </li>
              </ul>
              <p className="text-lg mt-2">
                For example, if the secret code is "<span className="text-green-400">1234</span>" and the guess is "<span className="text-red-400">1</span><span className="text-blue-400">32</span>7", the hint would be "<span className="text-red-500">1</span>A<span className="text-blue-500">2</span>B".
              </p>
            </div>
          </div>
          <div className="px-4 py-3 sm:px-6 flex justify-between">
            <button
              type="button"
              className="border-2 border-red-300 px-4 py-2 rounded-lg hover:border-red-400 text-red-300 hover:text-red-400"
              onClick={() => {
                localStorage.setItem('hasShownInstructions', 'true');
                onClose();
              }}
            >
              Don't show again
            </button>
            <button
              type="button"
              className="border-2 border-gray-300 px-4 py-2 rounded-lg hover:border-gray-100 hover:text-zinc-100"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructionsModal;