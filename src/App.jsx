import { useCallback, useEffect, useRef, useState } from 'react';
import Length from './components/Length';
import AllowedChecked from './components/AllowedChecked';
import Password from './components/Password';
import Button from './components/Button';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%&*[]{}/?`~`';
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const passwordRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    passwordRef.current.select();

    passwordRef.current.setSelectionRange(0, 99);

    navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="container">
      <div className="password-box">
        <h1 className="header">Password Generator</h1>
        {/* Define Length with Range */}
        <Length length={length} setLength={setLength} />
        {/* Include Number  */}
        <AllowedChecked
          id="number"
          name="Numbers"
          checked={numberAllowed}
          onchange={setNumberAllowed}
        />
        {/* Include Special Character */}
        <AllowedChecked
          id="char"
          name="Special Characters"
          checked={charAllowed}
          onchange={setCharAllowed}
        />
        {/* Display Password */}
        <Password password={password} passwordRef={passwordRef} />
        {/* Copy Password */}
        <Button copyToClipboard={copyToClipboard} />
      </div>
    </div>
  );
}

export default App;
