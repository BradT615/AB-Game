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
              <ul className="list-disc list-outside text-lg space-y-2 pl-5">
                <li>A player (the codebreaker) tries to guess the secret code of another player (the codemaker). The code is a sequence of 4 <b>unique</b> digits (from 0 to 9).</li>
                <li>Each time the codebreaker makes a guess, the codemaker gives a hint in the form of "A"s and "B"s.</li>
                <li>An "A" means that one digit is correct and in the right position.</li>
                <li>A "B" means that one digit is correct but in the wrong position.</li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-3 sm:px-6 flex flex-row-reverse">
            <button type="button" className='border-2 border-gray-300 px-4 py-2 rounded-lg hover:bg-zinc-500 hover:border-gray-200 hover:text-gray-200' onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructionsModal;