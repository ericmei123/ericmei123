
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TextEditor from './TextEditor';
import Layout from './Layout';
import SavedText from './SavedText';
import { useState } from 'react';

function App() {
  const[currID, setCurrID] = useState();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout currID={currID} setCurrID={setCurrID} />}>
          <Route path='/' element={<Navigate to='/notes' />}/>
          <Route path="/notes" element={<TextEditor  />} />
          <Route path="/notes/:noteNum/" element={<SavedText />} />
          <Route path="/notes/:noteNum/edit/" element={<TextEditor  />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
