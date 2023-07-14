import Main from "./page/Main";
import "./base.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./page/404";
import TodayList from "./page/todaylist";
import Calendar from "./page/calendar";
import Beaver from "./page/beaver";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/todaylist" element={<TodayList />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/beaver" element={<Beaver />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
