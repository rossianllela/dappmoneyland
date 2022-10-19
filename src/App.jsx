import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Farm from './components/Farm';
import Lottery from './components/Lottery';
import Nft from './components/Nft';
import Invite from './components/Invite';
import Trad from './components/Trad';
import Home from './components/Home';
import Banks from "./components/Banks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/marketplace",
    element: <Nft />,
  },
  {
    path: "/Lottery",
    element: <Lottery />,
  },
  {
    path: "/Trad",
    element: <Trad />,
  },
  {
    path: "/Farm",
    element: <Farm />,
  },
  {
    path: "/Invite",
    element: <Invite />,
  },
  {
    path: "/Banks",
    element: <Banks />,
  }




]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
