import styled from "styled-components";
import BackArrow from "../BackArrowComponent/BackArrowComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import TitleComponent from "../TitleComponent/TitleComponent";
import { backgroundLight, secondary } from "../../globalStyles";
import { useContext, useState } from "react";
import TrivialContext from "../../store/contexts/TrivialContext";
import QuestionComponent from "../QuestionComponent/QuestionComponent";
import { useNavigate } from "react-router-dom";
import FilterComponentHTML from "../FilterComponent/FilterComponent";
import {
  addQuestionAction,
  emptyQuestionsAction,
  removeQuestionsAction,
  toggeleSelectQuestionsAction,
} from "../../store/actions/trivial/actionsCreators";

const PageContainer = styled.div`
  background-color: ${backgroundLight};
  height: 100vh;
  padding: 36px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
  margin-bottom: 25px;
  left: 20px;
`;

const MainContainer = styled.ul`
  list-style: none;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 0;
  height: 597px;
  overflow-y: scroll;
`;

const FooterContainer = styled.div`
  height: 175px;
  width: 100vw;
  z-index: 2;
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
  const navigate = useNavigate();
  const [type, setType] = useState("Any Type");
  const [category, setCategory] = useState("Any Category");

  const {
    currentAllQuestions,
    allQuestionsDispatch,
    currentQuestions,
    questionDispatch,
  } = useContext(TrivialContext);

  const gotoMainPage = () => {
    allQuestionsDispatch(emptyQuestionsAction());
    questionDispatch(emptyQuestionsAction());
    navigate(`/home`);
  };

  return (
    <>
      <PageContainer>
        <HeaderContainer>
          <ArrowContainer>
            <BackArrow actionOnClick={gotoMainPage} />
          </ArrowContainer>
          <TitleContainer>
            <TitleComponent
              size="small"
              textColor={secondary}
              text="Select Your Questions"
            />
          </TitleContainer>
        </HeaderContainer>
        <FilterComponentHTML />
        <MainContainer>
          {currentAllQuestions.map((question, index) => (
            <QuestionComponent
              key={index}
              question={question}
              actionOnClick={() => {
                if (question.selected) {
                  questionDispatch(removeQuestionsAction(question.id));
                } else {
                  questionDispatch(addQuestionAction(question));
                }
                allQuestionsDispatch(toggeleSelectQuestionsAction(question.id));
              }}
            />
          ))}
        </MainContainer>
        <FooterContainer>
          <TotalSelectedQuestons>{`${currentQuestions.length} selected questions`}</TotalSelectedQuestons>
          <ButtonComponent text="Save" actionOnClick={() => {}} />
        </FooterContainer>
      </PageContainer>
    </>
  );
};

export default SelectYourQuestionsComponent;
