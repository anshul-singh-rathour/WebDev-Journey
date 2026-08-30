import imageUrl from "../assets/react-core-concepts.png";
import "./Header.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
// use different function for each component and make them reusable
export default function Header() {
  const discription = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      {/* use dynamic code for source links */}
      <img src={imageUrl} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {/* code in brackets considered as javascript code */}
        {discription} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
