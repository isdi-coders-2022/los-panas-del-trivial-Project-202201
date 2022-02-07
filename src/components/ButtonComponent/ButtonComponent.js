const ButtonComponent = ({ actionOnClick, text }) => {
  return <button onClick={actionOnClick}>{text}</button>;
};

export default ButtonComponent;
