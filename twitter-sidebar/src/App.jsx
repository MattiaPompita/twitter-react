import { Sidebar, MainSection, SearchSection, Home } from './components/index';
import Stack from '@mui/material/Stack';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App h-screen w-screen xl:container mx-auto">
      <Stack direction="row">
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={
              <MainSection name="Home">
                <Home />
              </MainSection>
            }
          />
        </Routes>
        <SearchSection />
      </Stack>
    </div>
  );
}

export default App;
