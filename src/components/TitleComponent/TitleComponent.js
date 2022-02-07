import styled from "styled-components";

const TitleComponent = ({ size, text, textColor }) => {
  const fontSize = (size) => {
    if (size === "small") {
      return "24px";
    }
    if (size === "medium") {
      return "30px";
    } else {
      return "38px";
    }
  };

  const imgSize = (size) => {
    if (size === "small") {
      return "20px";
    }
    if (size === "medium") {
      return "50px";
    } else {
      return "60px";
    }
  };

  const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const TitleLogo = styled.img`
    height: ${imgSize(size)};
    width: ${imgSize(size)};
  `;

  const Title = styled.h1`
    color: ${textColor};
    font-size: ${fontSize(size)};
    font-family: Comfortaa;
    margin: 0px;
  `;

  return (
    <TitleContainer>
      <TitleLogo src="images/favicon.png" alt="Trivial logo" />
      <Title>{text}</Title>
    </TitleContainer>
  );
};

export default TitleComponent;
