import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useMetaMask from "./hooks/useMetaMask";

import Header from './components/header';
import Footer from './components/footer';

import HomeScreen from './screens/HomeScreen';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from "./screens/LoginScreen";



function App() {
  const { connect, disconnect, isActive, account } = useMetaMask();
  return (
    <Router>
      <div className="bg-dark">
        <Header/>
        <main className='py-3'>
          <Routes>
            <Route path="/signup" element={<SignupScreen 
                                            connect={connect}
                                            disconnect={disconnect}
                                            isActive={isActive}
                                            account={account}
              />} 
            />
            <Route path="/login" element={<LoginScreen/>} />
            <Route path="/" element={<HomeScreen/>} exact />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
