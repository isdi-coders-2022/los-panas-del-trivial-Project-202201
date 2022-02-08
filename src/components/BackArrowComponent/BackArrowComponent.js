import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { secondary } from "../../globalStyles";

const BackArrowComponent = ({ actionOnClick }) => {
  return (
    <FontAwesomeIcon
      data-testid="arrow"
      icon={faArrowLeftLong}
      size="2x"
      color={secondary}
      onClick={actionOnClick}
    />
  );
};

export default BackArrowComponent;
