import { ArrowCircleLeft } from "react-swm-icon-pack";
import { secondary } from "../../globalStyles";

const BackArrow = ({ size }) => {
  return <ArrowCircleLeft color={secondary} strokeWidth={"2px"} size={size} />;
};

export default BackArrow;
