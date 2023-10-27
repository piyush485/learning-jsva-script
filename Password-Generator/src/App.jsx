import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  // useState 
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  // useRef 
  const passRef = useRef(null);

  // useCallback 
  const passGenerator = useCallback( () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(num) str += "0123456789";
    if(char)  str += "!@#$%^&*(){}[]`~_+";

    for(let i = 1 ; i < length ; i++ ){
      let c = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(c);
    }
    setPassword(pass);
  }, [length, num, char, setPassword]);

  // useEffect 
  useEffect(() => {
    passGenerator()
  }, [length, num, char, passGenerator]);

  // copy the password to the clipboard 
  const copyToClipboard = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password);
  }, [password])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input type="text" ref={passRef} className='outline-none w-full py-1 px-3' value={password} placeholder='Password' readOnly/>
            <button onClick={copyToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
          </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex ites-center gap-x-1">
            <input type="range" min={8} max={100} value={length} onChange={(e) => {setLength(e.target.value)}} className='cursor-pointer'/>
            <label>Length: {length}</label>
          </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={num} id='numInput' onChange={() => {setNum((prev) => !prev)}}/>
          <label>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={char} id='charInput' onChange={() => {setChar((prev) => !prev)}}/>
          <label>Characters</label>
        </div>
        </div>
      </div>
    </>
  )

}
export default App
