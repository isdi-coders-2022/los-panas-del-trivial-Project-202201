import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { secondary, backgroundLight } from "../../globalStyles";
import PropTypes from "prop-types";
import styled from "styled-components";

const ArrowPages = styled.button`
  background-color: ${backgroundLight};
  border: none;
`;

const ArrowPagesComponent = ({ actionOnClick, disabled, showSide }) => {
  return (
    <ArrowPages onClick={actionOnClick} disabled={disabled}>
      <FontAwesomeIcon
        data-testid="pageArrow"
        icon={showSide ? faAngleLeft : faAngleRight}
        size="3x"
        color={disabled ? "dimgray" : secondary}
      />
    </ArrowPages>
  );
};

ArrowPagesComponent.propTypes = {
  actionOnClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  showSide: PropTypes.bool.isRequired,
};

export default ArrowPagesComponent;
