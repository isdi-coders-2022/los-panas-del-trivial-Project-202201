import styled from "styled-components";

const CardContainer = styled.div`
  background-color: ${(props) => props.color};
  min-height: 77px;
  width: 365px;
  border-radius: 9px;
`;

const QuestionComponent = ({ isSelected }) => {
  return (
    <>
      <CardContainer></CardContainer>
    </>
  );
};

export default QuestionComponent;
