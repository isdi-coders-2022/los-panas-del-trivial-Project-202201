const TitleComponent = ({ size, text }) => {
  return (
    <>
      <div>
        <img src="images/favicon.png" alt="Trivial logo" className={size} />
        <h1 className={size}>{text}</h1>
      </div>
    </>
  );
};

export default TitleComponent;
