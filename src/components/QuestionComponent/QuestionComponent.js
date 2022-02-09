import styled from "styled-components";
import { backgroundDark, primary, textPrimary } from "../../globalStyles";

const CardContainer = styled.div`
  background-color: ${(props) => props.backgroundColor};
  min-height: 77px;
  width: 365px;
  border-radius: 9px;
  padding: 10px;
`;

const QuestionText = styled.p`
  color: ${(props) => props.questionTextColor};
  margin: 5px;
  font-size: 18px;
`;

const TypeQuestionText = styled.p`
  color: #fff;
  margin: 5px;
  font-size: 16px;
`;

const QuestionComponent = ({
  questionText,
  typeQuestionText,
  isSelected = false,
}) => {
  let backgroundColor = `${backgroundDark}`;
  let questionTextColor = `${textPrimary}`;

  if (isSelected) {
    backgroundColor = `${primary}`;
    questionTextColor = `${backgroundDark}`;
  }

  return (
    <>
      <CardContainer isSelected={isSelected} backgroundColor={backgroundColor}>
        <QuestionText questionTextColor={questionTextColor}>
          {questionText}
        </QuestionText>
        <TypeQuestionText>{typeQuestionText}</TypeQuestionText>
      </CardContainer>
    </>
  );
};

export default QuestionComponent;
