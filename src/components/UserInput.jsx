export default function UserInput({ handleChange, userInput }) {
  return (
    <section id="user-input">
      <p>
        <label htmlFor="initialInvestment">Initial Investment</label>
        <input
          id="initialInvestment"
          type="number"
          required
          value={userInput.initialInvestment}
          onChange={(event) =>
            handleChange("initialInvestment", event.target.value)
          }
        />
      </p>

      <p>
        <label htmlFor="annualInvestment">Annual Investment</label>
        <input
          id="annualInvestment"
          type="number"
          required
          value={userInput.annualInvestment}
          onChange={(event) =>
            handleChange("annualInvestment", event.target.value)
          }
        />
      </p>

      <p>
        <label htmlFor="expectedReturn">Expected Return (%)</label>
        <input
          id="expectedReturn"
          type="number"
          required
          value={userInput.expectedReturn}
          onChange={(event) =>
            handleChange("expectedReturn", event.target.value)
          }
        />
      </p>

      <p>
        <label htmlFor="duration">Investment Duration (years)</label>
        <input
          id="duration"
          type="number"
          required
          value={userInput.duration}
          onChange={(event) => handleChange("duration", event.target.value)}
        />
      </p>
    </section>
  );
}
