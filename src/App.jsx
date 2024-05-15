import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import "./index.scss";

import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
// import MyPlans from './pages/Plantpage'
// import Calendar from './pages/Calendarpage'
// import News from './pages/Newspage'
// import Forum from './pages/Forumpage'
// import Home from './pages/Homepage'
// import Contact from './pages/Contactpage'
// // import SignIn from './pages/'
// // import Recognition from './pages/'

function App() {
  return (
    <>
      <Navbar />
      <Searchbar />
      <h1>Hello</h1>
      <Footer />
    </>
  );
}

export default App;

// {/* <Router>
//       <Navbar />
//       <Routes>
//       <Route path="/" element={<Home/>} />
//       <Route path="/myplans" element={<MyPlans/>} />
//       <Route path="/calendar" element={<Calendar/>} />
//       {/* <Route path="/recognition" element={<Recognition/>} /> */}
//       <Route path="/news" element={<News/>} />
//       <Route path="/forum" element={<Forum/>} />
//       <Route path="/contact" element={<Contact/>} />
//       {/* <Route path="/signIn" element={<SignIn/>} /> */}
//       </Routes>
//     </Router> */}
