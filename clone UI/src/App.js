import logo from './logo.svg';
import './App.css';
import '../src/index.css';
import {Menubar} from './component/Menubar';
import { Introimg } from './component/Introimg';
import SocialMedia from './component/Socialmedia';

function App() {
  return (
    <>
      <Menubar />
      <Introimg/>
      <SocialMedia/>
    </>
  );
}


export default App;
