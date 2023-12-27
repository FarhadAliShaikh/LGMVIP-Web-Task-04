import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <div className='mx-[30%] w-96 mt-10 border'>
      <div className=" text-3xl font-bold text-left bg-orange-500 px-10 py-4 rounded">{input}</div>
    <div className='bg-slate-950'>
      <div className="grid grid-cols-4 gap-5 p-4">
        <button onClick={handleClear} className="px-6 py-2 bg-cyan-400 rounded-full font-bold text-center text-2xl">
          C
        </button>
        <button onClick={handleCalculate} className="px-6 py-2 bg-cyan-400 rounded-full font-bold text-center text-2xl">
          =
        </button>
        <button onClick={() => handleButtonClick('+')} className="px-6 py-2 bg-cyan-400 rounded-full font-bold text-center text-2xl ">
          +
        </button>
        <button onClick={() => handleButtonClick('-')} className="px-6 py-2 bg-cyan-400 rounded-full font-bold text-center text-2xl ">
          -
        </button>
        <button onClick={() => handleButtonClick('7')} className="px-6 py-2 bg-red-400 rounded-full font-bold text-center text-2xl">
          7
        </button>
        <button onClick={() => handleButtonClick('8')} className="px-6 py-2 bg-red-400 rounded-full font-bold text-center text-2xl">
          8
        </button>
        <button onClick={() => handleButtonClick('9')} className="px-6 py-2 bg-red-400 rounded-full font-bold text-center text-2xl">
          9
        </button>
        <button onClick={() => handleButtonClick('*')} className="px-6 py-2 bg-cyan-400 rounded-full font-bold text-center text-2xl ">
          *
        </button>

        <button onClick={() => handleButtonClick('4')} className="px-6 py-2 bg-red-400 rounded-full font-bold text-center text-2xl">
          4
        </button>
        <button onClick={() => handleButtonClick('5')} className="px-6 py-2 bg-red-400 rounded-full font-bold text-center text-2xl">
          5
        </button>
        <button onClick={() => handleButtonClick('6')} className="px-6 py-2 bg-red-400 rounded-full font-bold text-center text-2xl">
          6
        </button>
        <button onClick={() => handleButtonClick('/')} className="px-6 py-2 bg-cyan-400 rounded-full font-bold text-center text-2xl ">
          /
        </button>

        <button onClick={() => handleButtonClick('1')} className="px-6 py-2 bg-red-400 rounded-full font-bold text-center text-2xl">
          1
        </button>
        <button onClick={() => handleButtonClick('2')} className="px-6 py-2 bg-red-400 rounded-full font-bold text-center text-2xl">
          2
        </button>
        <button onClick={() => handleButtonClick('3')} className="px-6 py-2 bg-red-400 rounded-full font-bold text-center text-2xl">
          3
        </button>
        <button onClick={() => handleButtonClick('0')} className="px-6 py-2 bg-red-400 rounded-full font-bold text-center text-2xl">
          0
        </button>
      </div>
    </div>
    </div>
  );
};

export default Calculator;
