import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { secondary } from "../../globalStyles";

const BackArrow = ({ actionOnClick }) => {
  return (
    <FontAwesomeIcon
      data-testid="arrow"
      icon={faArrowLeftLong}
      size="3x"
      color={secondary}
      onClick={actionOnClick}
    />
  );
};

export default BackArrow;
