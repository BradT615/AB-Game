import React, { useRef, useState, useEffect } from 'react';
import { RiPauseMiniLine, RiPlayMiniFill } from "react-icons/ri";



function Game() {
  const [guess, setGuess] = useState(['', '', '', '']);
  const [hints, setHints] = useState([]);
  const [secretCode, setSecretCode] = useState('');
  const [backspaceCount, setBackspaceCount] = useState([0, 0, 0, 0]);
  const [timer, setTimer] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [firstGuessEntered, setFirstGuessEntered] = useState(false);

  const inputRef0 = useRef();
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();

  const inputRefs = [inputRef0, inputRef1, inputRef2, inputRef3];

  useEffect(() => {
    generateSecretCode();
    inputRefs[0].current.focus();
  }, []);

  const hintsEndRef = useRef(null);

  useEffect(() => {
    if (hintsEndRef.current) {
      hintsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hints]);

  useEffect(() => {
    if (hints.length > 0 && isPaused === false) {
      const interval = setInterval(() => {
        setTimer(timer => timer + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [hints, isPaused]);
  
  
  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const generateSecretCode = () => {
    let code = '';
    while (code.length < 4) {
      let digit = Math.floor(Math.random() * 10);
      if (!code.includes(digit)) {
        code += digit;
      }
    }
    setSecretCode(code);
  };

  const handleGuessChange = (index, event) => {
    let newGuess = [...guess];
    newGuess[index] = event.target.value;

    setGuess(newGuess);

    if (event.target.nextSibling) {
      event.target.nextSibling.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace") {
      event.preventDefault();
      let newGuess = [...guess];
  
      if (newGuess[index] !== '') {
        newGuess[index] = '';
      } else if (index > 0) {
        newGuess[index - 1] = '';
        if (event.target.previousSibling) {
          event.target.previousSibling.focus();
        }
      }
  
      setGuess(newGuess);
    } else if (event.key === "Enter") {
      if (!firstGuessEntered) {
        setFirstGuessEntered(true);
        setIsPaused(false);
      }
      handleGuessSubmit();
    } else {
      let newBackspaceCount = [...backspaceCount];
      newBackspaceCount[index] = 0;
      setBackspaceCount(newBackspaceCount);
    }
  };

  const handleGuessSubmit = () => {
    let aCount = 0;
    let bCount = 0;
  
    for (let i = 0; i < secretCode.length; i++) {
      if (guess[i] === secretCode[i]) {
        aCount++;
      } else if (secretCode.includes(guess[i])) {
        bCount++;
      }
    }
  
    setHints([...hints, `${aCount}A${bCount}B`]);
    setGuess(['', '', '', '']);
    inputRefs[0].current.focus();
  };

  const handleNewGame = () => {
    setGuess(['', '', '', '']);
    setHints([]);
    generateSecretCode();
    inputRefs[0].current.focus();
  };

  const handleReveal = () => {
    setGuess(secretCode.split(''));
  };

  return (
    <div className='flex-grow flex flex-col lg:flex-row gap-2 max-h-[80vh] lg:max-h-[70vh] max-w-4xl w-full m-auto p-4 text-gray-300'>
      <div className='flex flex-col justify-between bg-zinc-600 p-4 rounded-lg w-full'>
        <div className='flex justify-between items-center text-2xl font-semibold  border-b-[1px] mb-4'>
          <h1 className='text-left p-2'>AB Game</h1>
          {firstGuessEntered && (
            <div className='flex items-center gap-2'>
              <h1 className='h-full no-select'>{isPaused ? formatTime(timer) : formatTime(timer)}</h1>
              <button onClick={handlePause} className='mt-1 text-4xl rounded-lg hover:text-gray-200 border-[1px] border-transparent hover:border-gray-200'>
                {isPaused ? <RiPlayMiniFill /> : <RiPauseMiniLine />}
              </button>
            </div>
          )}
        </div>
        <div className='h-2/3'>
          {guess.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              ref={inputRefs[index]}
              value={value}
              onChange={(event) => handleGuessChange(index, event)}
              onKeyDown={(event) => handleKeyDown(index, event)}
              className='w-20 h-28 text-center text-7xl text-black border-2 border-gray-400 rounded-lg mx-1 focus:outline-none focus:border-accent'
            />
          ))}
          <h1 className='text-lg'>Press Enter to Guess</h1>
        </div>
          <div className='flex justify-end w-full items-center mb-4'>
            <button className='border-2 border-gray-300 px-4 py-2 rounded-lg hover:bg-zinc-500 hover:border-gray-200 hover:text-gray-200 mr-2' onClick={handleReveal}>Reveal</button>
            <button className='border-2 border-gray-300 px-4 py-2 rounded-lg hover:bg-zinc-500 hover:border-gray-200 hover:text-gray-200' onClick={handleNewGame}>New Game</button>
          </div>
      </div>
      <div className='flex flex-col justify-between bg-zinc-600 p-4 rounded-lg w-full'>
        <h1 className='text-2xl font-semibold text-left p-2 border-b-[1px]'>
          Hints <span className='float-right'>Guess Count: {hints.length}</span>
        </h1>
        <div className='text-xl text-left p-4 overflow-auto h-full'>
          {!isPaused && (
            <div>
              {hints.map((hint, index) => (
                <p key={index}>{index + 1}. {hint}</p>
              ))}
            </div>
          )}
          <div ref={hintsEndRef} />
        </div>
      </div>
    </div>
  );
}

export default Game;