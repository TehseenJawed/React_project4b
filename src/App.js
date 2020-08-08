import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Page1 from './component/Page1';
import Page2 from './component/Page2';
import Page3 from './component/Page3';
import Page4 from './component/Page4';
import Samples from './component/Samples';
import Blogs from './component/Blog';
import Footer from './component/Footer';
function App() {
  return (
    <div>
      <Navbar />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Samples />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
