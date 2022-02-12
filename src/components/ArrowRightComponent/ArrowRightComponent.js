import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { secondary } from "../../globalStyles";
import PropTypes from "prop-types";

const ArrowRightComponent = ({ actionOnClick }) => {
  return (
    <FontAwesomeIcon
      data-testid="arrow"
      icon={faAngleRight}
      size="2x"
      color={secondary}
      onClick={actionOnClick}
    />
  );
};

ArrowRightComponent.propTypes = {
  actionOnClick: PropTypes.func.isRequired,
};

export default ArrowRightComponent;
