import logo from '../assets/logo.png';
import './Header.css';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      {
        // use of inline styles in react 
      /* <p style={ {
        color:"red",
        textAlign:"left"
      }} */}
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}
