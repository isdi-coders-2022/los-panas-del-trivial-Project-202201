import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { secondary } from "../../globalStyles";
import PropTypes from "prop-types";

const ArrowLeftComponent = ({ actionOnClick }) => {
  return (
    <FontAwesomeIcon
      data-testid="arrow"
      icon={faAngleLeft}
      size="2x"
      color={secondary}
      onClick={actionOnClick}
    />
  );
};

ArrowLeftComponent.propTypes = {
  actionOnClick: PropTypes.func.isRequired,
};

export default ArrowLeftComponent;
