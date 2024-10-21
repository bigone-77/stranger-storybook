import React, { useState } from 'react';
import DefaultTextField from './stories/TextField/DefaultTextField';

const App = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
    // 예시로 에러 상태를 단순히 입력 값이 없을 때로 설정
    setIsError(value.length === 0);
  };

  return (
    <div className='p-6 max-w-sm mx-auto'>
      <h1 className='mb-4 text-lg font-bold'>Form Example</h1>
      <DefaultTextField
        id='example-text-field'
        type='text'
        placeholder='내용을 입력하세요'
        value={text}
        onChange={handleChange}
        isError={isError}
        errorMessage='내용을 입력해야 합니다!'
      />
      <button
        className='mt-4 px-4 py-2 bg-primary-30 text-white rounded-md'
        onClick={() => alert(`입력한 내용: ${text}`)}
      >
        Submit
      </button>
    </div>
  );
};

export default App;
