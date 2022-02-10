import styled from "styled-components";
import PropTypes from "prop-types";
import { primary, secondary } from "../../globalStyles";

const buttonHeight = 75;
const buttonWidth = 318;

const RoundedButton = styled.button`
  width: ${buttonWidth}px;
  height: ${buttonHeight}px;

  background-color: ${primary};
  color: ${secondary};

  border-radius: ${buttonHeight}px;
  border: none;

  font-size: 36px;
  font-weight: 600;
  font-family: inherit;

  &:hover {
    background-color: #baacc6;
  }
`;

const ButtonComponent = ({ actionOnClick, text }) => {
  return <RoundedButton onClick={actionOnClick}>{text}</RoundedButton>;
};

ButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
  actionOnClick: PropTypes.func,
};
export default ButtonComponent;
