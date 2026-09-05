
export default function UserInput({userInput,handleChange}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input type="number" required value={userInput.initialInvestment} onChange={(event)=>{handleChange( 'initialInvestment',event.target.value)}}></input>
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input type="number" required value={userInput.annualInvestment} onChange={(event)=>{handleChange( 'annualInvestment',event.target.value)}}></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return </label>
          <input type="number" required value={userInput.expectedReturn} onChange={(event)=>{handleChange( 'expectedReturn',event.target.value)}}></input>
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input type="number" required value={userInput.duration} onChange={(event)=>{handleChange( 'duration',event.target.value)}}></input>
        </p>
      </div>
    </section>
  );
}
