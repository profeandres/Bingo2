import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./Layouts/MainLayout";
import { Game, Inicio, Record, Rules} from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route path="/" element={<Inicio />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/game" element={<Game />} />
          <Route path="/record" element={<Record/> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
