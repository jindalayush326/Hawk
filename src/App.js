// npm i react-router-dom
// npm i @material-ui/core @material-ui/lab
// app -> header -> index -> hawkcontext -> Homepage -> Bannner -> api ->Carousel -> CoinTable
// using coingecko api
import { makeStyles } from "@mui/styles";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CoinPage from './pages/CoinPage';
import HomePage from './pages/HomePage';

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "grey",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  return (
   <Router>
   <div className={classes.App}>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>} exact/>
      <Route path="/coin/:id" element={<CoinPage/>} exact />
    </Routes>
   </div>
   </Router>
  );
}

export default App;
