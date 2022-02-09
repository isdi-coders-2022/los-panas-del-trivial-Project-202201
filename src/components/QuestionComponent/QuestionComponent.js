import styled from "styled-components";
import { backgroundDark, primary, textPrimary } from "../../globalStyles";

const CardContainer = styled.div`
  background-color: ${(props) => props.backgroundColor};
  min-height: 77px;
  width: 365px;
  border-radius: 9px;
`;

const QuestionComponent = ({ isSelected }) => {
  let backgroundColor = `${backgroundDark}`;
  let questionTextColor = `${textPrimary}`;
  let typeTextQuestionColor = "#fff";

  if (isSelected) {
    backgroundColor = `${primary}`;
    questionTextColor = `${backgroundDark}`;
  }

  return (
    <>
      <CardContainer isSelected={isSelected}></CardContainer>
    </>
  );
};

export default QuestionComponent;
