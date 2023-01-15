import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppStyled from "./appStyled";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Weather from "./components/Weather/Weather";

function App() {
  return (
    <AppStyled>
      <BrowserRouter>
        <Header/>
          <Weather/>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
      </BrowserRouter>
      <Footer/>    
    </AppStyled>
  );
}

export default App;
