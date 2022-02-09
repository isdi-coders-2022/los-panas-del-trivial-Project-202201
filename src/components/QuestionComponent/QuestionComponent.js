import styled from "styled-components";
import { backgroundDark, primary, textPrimary } from "../../globalStyles";

const CardContainer = styled.div`
  background-color: ${(props) => props.backgroundColor};
  min-height: 77px;
  width: 365px;
  border-radius: 9px;
`;

const QuestionText = styled.p`
  color: ${(props) => props.questionTextColor};
`;

const QuestionComponent = ({ isSelected }) => {
  let backgroundColor = `${backgroundDark}`;
  let questionTextColor = `${textPrimary}`;
  let typeQuestionTextColor = "#fff";

  if (isSelected) {
    backgroundColor = `${primary}`;
    questionTextColor = `${backgroundDark}`;
  }

  return (
    <>
      <CardContainer isSelected={isSelected} backgroundColor={backgroundColor}>
        <QuestionText questionTextColor={questionTextColor}>
          holiis
        </QuestionText>
      </CardContainer>
    </>
  );
};

export default QuestionComponent;
