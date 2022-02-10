import styled from "styled-components";
import PropTypes from "prop-types";
import { backgroundDark, primary, textPrimary } from "../../globalStyles";

const CardContainer = styled.li`
  background-color: ${(props) => props.backgroundColor};
  width: 365px;
  border-radius: 9px;
  padding: 10px;
`;

const QuestionText = styled.p`
  color: ${(props) => props.questionTextColor};
  margin: 5px;
  font-size: 18px;
`;

const InfoHolder = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TypeQuestionText = styled.p`
  color: #fff;
  margin: 5px;
  margin-top: 10px;
  font-size: 16px;
`;

const QuestionCategory = styled.p`
  color: #fff;
  margin: 5px;
  margin-top: 10px;
  font-size: 16px;
`;

const QuestionComponent = ({
  question: { question, type, selected, category },
  actionOnClick,
}) => {
  let backgroundColor = `${backgroundDark}`;
  let questionTextColor = `${textPrimary}`;

  const decodeString = (str) => {
    const element = document.createElement("div");
    element.innerHTML = str;
    return element.childNodes.length === 0
      ? ""
      : String(element.childNodes[0].nodeValue);
  };

  const getRenderType = () =>
    type === "boolean" ? "True / False" : "Multiple Choice";

  if (selected) {
    backgroundColor = `${primary}`;
    questionTextColor = `${backgroundDark}`;
  }

  return (
    <CardContainer
      onClick={actionOnClick}
      isSelected={selected}
      backgroundColor={backgroundColor}
    >
      <QuestionText questionTextColor={questionTextColor}>
        {decodeString(question)}
      </QuestionText>
      <InfoHolder>
        <TypeQuestionText>{getRenderType(type)}</TypeQuestionText>
        <QuestionCategory>{category}</QuestionCategory>
      </InfoHolder>
    </CardContainer>
  );
};

QuestionComponent.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    category: PropTypes.string.isRequired,
  }),
};

export default QuestionComponent;
