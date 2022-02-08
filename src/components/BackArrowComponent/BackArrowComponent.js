import { ArrowCircleLeft } from "react-swm-icon-pack";
import { secondary } from "../../globalStyles";
import PropTypes from "prop-types";

const BackArrow = ({ size }) => {
  return <ArrowCircleLeft color={secondary} strokeWidth={"2px"} size={size} />;
};

BackArrow.propTypes = {
  size: PropTypes.oneOf(["70", "50"]).isRequired,
};

export default BackArrow;
