import MainPage from './mainPage/mainPage';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Easy from "./easy/easy";
import Medium from "./medium/medium";
import Hard from "./hard/hard";
import { GetContext } from './context/context';
import { EasyCont } from './easy/easycont';
import { MediumCont } from './medium/mediumCount';
import { HardCont } from './hard/hardCount';



function App() {
  return (
    <div >
      <Router>
        <GetContext>
          <EasyCont>
            <MediumCont>
              <HardCont>
        <Routes>
            <Route path='/Quizz-logo' element={<MainPage />} />
          <Route path='/easy' element={<Easy />} />
          <Route path='/medium' element={<Medium />} />
          <Route path='/hard' element={<Hard />} />
                </Routes>
                </HardCont>
              </MediumCont>
            </EasyCont>
          </GetContext>
      </Router>
        
    </div>
  );
}

export default App;
