import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { secondary } from "../../globalStyles";
import PropTypes from "prop-types";

const ArrowPagesComponent = ({ actionOnClick, disabled, showSide }) => {
  return (
    <button onClick={actionOnClick} disabled={disabled}>
      <FontAwesomeIcon
        data-testid="arrow"
        icon={showSide ? faAngleLeft : faAngleRight}
        size="2x"
        color={secondary}
      />
    </button>
  );
};

ArrowPagesComponent.propTypes = {
  actionOnClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  showSide: PropTypes.bool.isRequired,
};

export default ArrowPagesComponent;
