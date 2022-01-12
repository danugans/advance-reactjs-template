// create style here
const styles = {
  form: {
    margin: "15px 10px",
    backgroundColor: "gray",
  },
};

// create Form component
function Form() {
  return (
    // code inside div
    <form style={styles.form}>
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="usernameInput" style={{ display: "block", marginBottom: "5px" }}>
          Username
        </label>
        <input type="text" id="usernameInput" placeholder="Masukkan username" style={{ fontSize: "1rem", padding: "10px", borderRadius: "7px" }}></input>
      </div>
      <button
        style={{
          padding: "5px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
