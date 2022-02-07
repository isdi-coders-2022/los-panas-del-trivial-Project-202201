import styled from "styled-components";

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
`;

const TitleComponent = ({ size, text, textColor }) => {
  let fontSize;
  if (size === "small") {
    fontSize = "24px";
  } else if (size === "medium") {
    fontSize = "30px";
  } else {
    fontSize = "38px";
  }
  let imgSize;
  if (size === "small") {
    imgSize = "22px";
  } else if (size === "medium") {
    imgSize = "52px";
  } else {
    imgSize = "62px";
  }

  return (
    <TitleContainer fontSize={fontSize} textColor={textColor}>
      <TitleLogo
        imgSize={imgSize}
        src="images/favicon.png"
        alt="Trivial logo"
      />
      <Title fontSize={fontSize}>{text}</Title>
    </TitleContainer>
  );
};

export default TitleComponent;
