import ButtonComponent from "../ButtonComponent/ButtonComponent";
import TitleComponent from "../TitleComponent/TitleComponent";

const MainPage = () => {
  return (
    <>
      <TitleComponent
        text={"Trivial.Provider"}
        size={"medium"}
        textColor={"black"}
      ></TitleComponent>
      <div>
        <h2>Let's Play!</h2>
        <ButtonComponent text={"Play Now"}></ButtonComponent>
        <ButtonComponent text={"Create Game"}></ButtonComponent>
      </div>
    </>
  );
};

export default MainPage;
