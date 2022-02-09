import styled from "styled-components";
import BackArrow from "../BackArrowComponent/BackArrowComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import TitleComponent from "../TitleComponent/TitleComponent";
import { backgroundLight, secondary } from "../../globalStyles";
import { useContext } from "react";
import TrivialContext from "../../store/contexts/TrivialContext";
import QuestionComponent from "../QuestionComponent/QuestionComponent";

const PageContainer = styled.div`
  background-color: ${backgroundLight};
  height: 100vh;
  padding: 36px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ArrowContainer = styled.div`
  position: absolute;
  left: 20px;
`;

const TitleContainer = styled.div`
  position: relative;
  left: 20px;
`;

const MainContainer = styled.div``;

const FooterContainer = styled.div`
  height: 175px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TotalSelectedQuestons = styled.p`
  font-family: "Nunito";
  color: #fff;
  font-size: 25px;
  font-weight: semi-bold;
`;

const SelectYourQuestionsComponent = () => {
  let questionType = (type) => {
    if (type.correct_answer === "True" || type.correct_answer === "False") {
      return "True/False";
    } else {
      return "Multiple Choice";
    }
  };
  const { currentAllQuestions } = useContext(TrivialContext);
  return (
    <>
      <PageContainer>
        <HeaderContainer>
          <ArrowContainer>
            <BackArrow />
          </ArrowContainer>
          <TitleContainer>
            <TitleComponent
              size="small"
              textColor={secondary}
              text="Select Your Questions"
            />
          </TitleContainer>
        </HeaderContainer>
        <MainContainer>
          {currentAllQuestions.map((question, index) => (
            <QuestionComponent
              key={index}
              questionText={question.question}
              typeQuestionText={questionType(question.correct_answer)}
            />
          ))}
        </MainContainer>
        <FooterContainer>
          <TotalSelectedQuestons>20 selected questions</TotalSelectedQuestons>
          <ButtonComponent text="Save" actionOnClick={() => {}} />
        </FooterContainer>
      </PageContainer>
    </>
  );
};

export default SelectYourQuestionsComponent;
