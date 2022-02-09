import BackArrowComponent from "../components/BackArrowComponent/BackArrowComponent";
import TitleComponent from "../components/TitleComponent/TitleComponent";
import styled from "styled-components";
import { backgroundLight } from "../globalStyles";
import FormComponent from "../components/FormComponent/FormComponent";
import { useState } from "react";

const PageContainer = styled.div`
  background-color: ${backgroundLight};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 80px;
`;

const BackArrowContainer = styled.div`
  padding: 36px 20px;
  width: 100%;
`;

const CreateGamePage = () => {
  const [name, setName] = useState("");
  const [creator, setCreator] = useState("");
  const [difficulty, setDifficulty] = useState("easy");

  return (
    <PageContainer>
      <BackArrowContainer>
        <BackArrowComponent />
      </BackArrowContainer>
      <TitleComponent text={"Create Game"} size={"medium"}></TitleComponent>
      <FormComponent
        name={{ name, setName }}
        creator={{ creator, setCreator }}
        difficulty={{ difficulty, setDifficulty }}
        onSubmit={() => {}}
      ></FormComponent>
    </PageContainer>
  );
};

export default CreateGamePage;
