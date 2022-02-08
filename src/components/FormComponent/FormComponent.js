const FormComponent = ({ onSubmit, editing }) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <label for="name">
        <h2>Your name</h2>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Input your name"
        />
      </label>
      <label for="gameName">
        <h2>Game's name</h2>
        <input
          type="text"
          name="gameName"
          id="gameName"
          placeholder="Input the game's name"
        />
      </label>
      <div editing={editing}>
        <h2>Difficulty</h2>
        <select name="difficulty" id="difficulty">
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
    </form>
  );
};
