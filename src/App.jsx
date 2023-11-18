import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import SectionJobs from "./pages/Jobs/SectionJobs";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <main>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/jobs' element={<SectionJobs/>}/>
          </Routes>
      </BrowserRouter>
      <Footer/>    
    </main>
  );
}

export default App;
