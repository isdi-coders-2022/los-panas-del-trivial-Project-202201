const TitleComponent = ({ size, text }) => {
  return (
    <>
      <div>
        <h1 className={size}>{text}</h1>
        <img src="images/favicon.png" alt="Trivial logo" className={size} />
      </div>
    </>
  );
};

export default TitleComponent;
