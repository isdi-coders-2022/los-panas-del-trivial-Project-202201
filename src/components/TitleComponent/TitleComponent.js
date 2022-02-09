import styled from "styled-components";
import PropTypes from "prop-types";
import { secondary } from "../../globalStyles";

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.fontSize};
`;

const TitleLogo = styled.img`
  height: ${(props) => props.imgSize};
  width: ${(props) => props.imgSize};
  margin-right: 3px;
`;

const Title = styled.h1`
  color: ${(props) => props.textColor};
  font-size: ${(props) => props.fontSize};
  font-family: Comfortaa;
  margin: 0px;
  padding-top: 2px;
  font-weight: 400;
`;

const TitleComponent = ({ size, text, textColor = secondary }) => {
  let fontSize;
  let imgSize;

  if (size === "small") {
    fontSize = "20px";
    imgSize = "22px";
  } else if (size === "medium") {
    fontSize = "36px";
    imgSize = "52px";
  } else {
    fontSize = "48px";
    imgSize = "62px";
  }

  return (
    <TitleContainer fontSize={fontSize}>
      <TitleLogo
        imgSize={imgSize}
        src="images/favicon.png"
        alt="Trivial logo"
      />
      <Title textColor={textColor} fontSize={fontSize}>
        {text}
      </Title>
    </TitleContainer>
  );
};

TitleComponent.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]).isRequired,
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
};

export default TitleComponent;
