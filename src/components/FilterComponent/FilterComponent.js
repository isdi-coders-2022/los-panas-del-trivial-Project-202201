const FilterComponentHTML = ({ actionOnSubmit }) => {
  return (
    <form onSubmit={actionOnSubmit}>
      <div>
        <h2>Category</h2>
        <select>
          <option value="Sports"> Sports </option>
          <option value="Entertainment: Video Games">Video Games</option>
          <option value="Animals"> Animals </option>
          <option value="Geography"> Geography </option>
          <option value="Science: Computers"> Computers </option>
        </select>
      </div>
      <div>
        <h2>Type</h2>
        <select>
          <option value="boolean">True / False</option>
          <option value="multiple">Multiple Choice</option>
        </select>
      </div>
    </form>
  );
};

export default FilterComponentHTML;
