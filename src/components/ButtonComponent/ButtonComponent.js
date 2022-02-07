import styled from "styled-components";

const buttonHeight = 75;
const buttonWidth = 318;

const RoundedButton = styled.button`
  width: ${buttonWidth}px;
  height: ${buttonHeight}px;

  background-color: #9882ac;
  color: #f6f7eb;

  border-radius: ${buttonHeight}px;
  border: none;

  font-size: 36px;
  font-weight: 600;

  margin-top: 15px;
  margin-bottom: 15px;

  &:hover {
    background-color: #baacc6;
  }
`;

const ButtonComponent = ({ actionOnClick, text }) => {
  return <RoundedButton onClick={actionOnClick}>{text}</RoundedButton>;
};

export default ButtonComponent;
