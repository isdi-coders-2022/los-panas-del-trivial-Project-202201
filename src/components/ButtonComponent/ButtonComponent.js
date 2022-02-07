import styled from "styled-components";

const buttonHeight = 75;
const buttonWidth = 318;

const RoundedButton = styled.button``;

const ButtonComponent = ({ actionOnClick, text }) => {
  return <RoundedButton onClick={actionOnClick}>{text}</RoundedButton>;
};

export default ButtonComponent;
