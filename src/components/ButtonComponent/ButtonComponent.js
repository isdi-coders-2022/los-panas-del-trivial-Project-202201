const ButtonComponent = ({ actionOnClick, text }) => {
  return <Button onClick={actionOnClick}>{text}</Button>;
};

export default ButtonComponent;
