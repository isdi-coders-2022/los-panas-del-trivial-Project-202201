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
  font-weigth: 400;
`;

const TitleComponent = ({ size, text, textColor }) => {
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
