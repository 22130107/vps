import { HashRouter, Routes, Route } from 'react-router-dom';
import Page1 from './page/1920WDefault/1920WDefault';
import Page2 from './page/1920WDefault-1/1920WDefault-1-579';

function CenterWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ 
      position: 'relative',
      width: '1920px',
      left: '50%',
      transform: 'translateX(-50%)'
    }}>
      {children}
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <div style={{ overflowX: 'hidden', minHeight: '100vh' }}>
        <CenterWrapper>
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
          </Routes>
        </CenterWrapper>
      </div>
    </HashRouter>
  );
}

export default App;
