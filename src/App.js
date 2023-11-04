import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import AppendString from './component/Page/AppendString';
import SumofNumber from './component/Page/SumofNumber';
import WordCount from './component/Page/WordCount';
import Home from './component/Page/Home';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        < Route path="/" element={<Home/>} />
        < Route path="/AppendString" element={<AppendString/>} />
        < Route path="/SumofNumber" element={<SumofNumber/>} />
        < Route path="/WordCount" element={<WordCount/>} />
      </Routes>
     </BrowserRouter> 
    </div>
  );
}

export default App;
