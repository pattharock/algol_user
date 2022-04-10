import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import Header from './components/header';
import Footer from './components/footer';

import HomeScreen from './screens/HomeScreen';



function App() {
  return (
    // <Router>
    //   <Header/>
    //   <main className='py-3'>
    //     <Container>
    //       {/* <Route path='/login' component={LoginScreen} />
    //       <Route path='/product/:id' component={ProductScreen} />
    //       <Route path='/cart/:id?' component={CartScreen} /> */}
    //       <Route path='/' component={HomeScreen} exact/>
    //     </Container>
    //   </main>
    //   <Footer/>
    // </Router>
    <div class="bg-dark">
      <Header/>
      <HomeScreen/>
      <Footer/>
    </div>
  );
}

export default App;
