import { useState } from "react";
import getCyrillicText from './getCyrillicText';
import copy from "copy-to-clipboard";

function App() {

  const [latinText, setLatinText] = useState('');

  const handleLatinTextChange = (event) => {
    setLatinText(event.target.value);
  };

  const handleClear = () => {
    setLatinText('');
  }

  const handleCopy = () => {
    copy(document.getElementById('crilllic_textarea').value);
  };

  const selectAll = (event) => {
    document.getElementById('latin_textarea').select();
    
  }

  return (
    <div className="App">
      
      <div className="container">
        <div className="row">
          <h1 className="text-center m-3">Latin text to Uzbek Cyrillic text converter</h1>
          <div className="col-md-6 p-3">
            <div className="text-center">
              <button className="btn btn-primary" onClick={selectAll}>Select All</button>
              <button className="btn btn-danger m-1" onClick={handleClear}>Clear</button>
              <div className="form-group mt-2">
                <textarea id="latin_textarea" className="form-control pb-5" rows="3" placeholder="Latin text here ..." value={latinText} onChange={handleLatinTextChange}></textarea>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-3">
            <div className="text-center">
              <button className="btn btn-primary" onClick={handleCopy}>Copy</button>
              <button className="btn btn-danger m-1" onClick={handleClear} >Clear</button>
              <div className="form-group mt-2">
                <textarea className="form-control pb-5 cyrillic_textarea" readOnly={true} id="crilllic_textarea" rows="3" value={getCyrillicText(latinText)}></textarea>
              </div>
            </div>
          </div>


          <footer className="m-3">
                Copyright &copy; 2024  - Developed by: Zekhniddin
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
