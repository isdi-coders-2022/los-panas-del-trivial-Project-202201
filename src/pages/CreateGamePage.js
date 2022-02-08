import BackArrowComponent from "../components/BackArrowComponent/BackArrowComponent";
import TitleComponent from "../components/TitleComponent/TitleComponent";
import styled from "styled-components";
import { backgroundLight } from "../globalStyles";

const PageContainer = styled.div`
  background-color: ${backgroundLight};
  height: 100vh;
`;

const BackArrowContainer = styled.div`
  padding: 36px 20px;
`;

const CreateGamePage = () => {
  return (
    <>
      <PageContainer>
        <BackArrowContainer>
          <BackArrowComponent />
        </BackArrowContainer>
        <TitleComponent text={"Create Game"} size={"medium"}></TitleComponent>
      </PageContainer>
    </>
  );
};

export default CreateGamePage;
