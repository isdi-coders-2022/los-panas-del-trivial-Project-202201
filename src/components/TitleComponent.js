const TitleComponent = ({ size, text, textColor }) => {
  return (
    <div>
      <img src="images/favicon.png" alt="Trivial logo" className={size} />
      <h1 className={`${size} ${textColor === "" ? "black" : "white"}`}>
        {text}
      </h1>
    </div>
  );
};

export default TitleComponent;
