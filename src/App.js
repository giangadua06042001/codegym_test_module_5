
import './App.css';
import { Route, Routes} from "react-router-dom";
import CreateTour from "./test/CreateTour";
import ListTour from "./test/ListTour";
import EditTour from "./test/EditTour";
import DeleteTour from "./test/DeleteTour";
import ViewTour from "./test/ViewTour";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path={''} element={<ListTour/>}></Route>
        <Route path={'/create'} element={<CreateTour/>}></Route>
          <Route path={'/edit/:id'} element={<EditTour/>}></Route>
          <Route path={'/delete/:id'} element={<DeleteTour/>}></Route>
          <Route path={'/view/:id'} element={<ViewTour/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
