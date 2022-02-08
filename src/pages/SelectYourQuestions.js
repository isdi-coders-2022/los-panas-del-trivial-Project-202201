import styled from "styled-components";
import BackArrow from "../components/BackArrowComponent/BackArrowComponent";
import TitleComponent from "../components/TitleComponent/TitleComponent";
import { backgroundLight, secondary } from "../globalStyles";

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

const SelectYourQuestions = () => {
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
      </PageContainer>
    </>
  );
};

export default SelectYourQuestions;
