import moneyImage from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={moneyImage} alt="Money Image" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
