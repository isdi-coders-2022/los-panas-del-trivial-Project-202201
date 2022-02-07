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

  const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const TitleLogo = styled.img`
    height: 60px;
    width: 60px;
  `;

  const Title = styled.h1`
    color: ${textColor};
    font-size: ${fontSize()};
    font-family: Comfortaa;
    margin: 0px;
  `;

  return (
    <TitleContainer>
      <TitleLogo src="images/favicon.png" alt="Trivial logo" className={size} />
      <Title className={`${size} ${textColor === "" ? "black" : "white"}`}>
        {text}
      </Title>
    </TitleContainer>
  );
};

export default TitleComponent;
