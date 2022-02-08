import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { secondary } from "../../globalStyles";

const BackArrow = ({ action }) => {
  return (
    <FontAwesomeIcon
      icon={faArrowLeftLong}
      size="3x"
      color={secondary}
      onClick={action}
    />
  );
};

export default BackArrow;
