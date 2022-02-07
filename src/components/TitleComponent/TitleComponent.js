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
