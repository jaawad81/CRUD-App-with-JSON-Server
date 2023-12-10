import { Create, Users } from './components/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <section className='w-full h-screen flex justify-center items-center bg-zinc-500 text-[16px]'>
      <Router>
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/create' element={<Create />} />
          <Route path='/update' element={<Create />} />
        </Routes>
      </Router>
    </section>
  );
}

export default App;

