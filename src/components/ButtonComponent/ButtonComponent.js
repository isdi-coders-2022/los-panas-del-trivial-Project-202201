import styled from "styled-components";

const RoundedButton = styled.button``;

const ButtonComponent = ({ actionOnClick, text }) => {
  return <RoundedButton onClick={actionOnClick}>{text}</RoundedButton>;
};

export default ButtonComponent;
