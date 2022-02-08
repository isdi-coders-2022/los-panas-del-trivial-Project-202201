import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const BackArrow = ({ size }) => {
  return <FontAwesomeIcon icon={faArrowLeftLong} />;
};

BackArrow.propTypes = {
  size: PropTypes.oneOf(["70", "50"]).isRequired,
};

export default BackArrow;
