import PropTypes from "prop-types";
import styled from "styled-components";
import { backgroundDark, textPrimary } from "../../globalStyles";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const FormContainer = styled.form`
  margin: 0 auto;
  width: 365px;
`;

const InputTitle = styled.h2`
  font-size: 30px;
  color: ${textPrimary};
`;

const InputField = styled.input`
  background-color: ${backgroundDark};
  color: white;

  border-radius: 0 0 10px 10px;
  border: none;

  width: 100%;
  height: 50px;

  padding-left: 20px;

  font-size: 24px;
  font-family: inherit;
`;

const DifficultyContainer = styled.div`
  h2 {
    color: gray;
  }

  select {
    color: gray;
  }

  pointer-events: none;
`;

const SelectInput = styled.select`
  background-color: ${backgroundDark};
  color: white;

  border-radius: 0 0 10px 10px;
  border: none;

  width: 100%;
  height: 50px;

  padding-left: 20px;

  font-size: 24px;
  font-family: inherit;
`;

const ButtonContainer = styled.div`
  margin-top: 100px;
  text-align: center;
`;

const FormComponent = ({
  onSubmit,
  editing = false,
  name: { name, setName },
  creator: { creator, setCreator },
  difficulty: { difficulty, setDifficulty },
}) => {
  return (
    <FormContainer
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <label htmlFor="name">
        <InputTitle>Your name</InputTitle>
        <InputField
          type="text"
          name="name"
          value={creator}
          id="name"
          onChange={(event) => {
            setCreator(event.target.value);
          }}
          placeholder="Input your name"
          required
        />
      </label>
      <label htmlFor="gameName">
        <InputTitle>Game's name</InputTitle>
        <InputField
          type="text"
          name="gameName"
          id="gameName"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          placeholder="Input the game's name"
          required
        />
      </label>
      {editing ? (
        <DifficultyContainer>
          <InputTitle>Difficulty</InputTitle>
          <SelectInput name="difficulty" id="difficulty">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </SelectInput>
        </DifficultyContainer>
      ) : (
        <div>
          <InputTitle>Difficulty</InputTitle>
          <SelectInput
            name="difficulty"
            id="difficulty"
            value={difficulty}
            onChange={(event) => {
              setDifficulty(event.target.value);
            }}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </SelectInput>
        </div>
      )}
      <ButtonContainer>
        <ButtonComponent type="submit" text={editing ? "Edit" : "Create"} />
      </ButtonContainer>
    </FormContainer>
  );
};

FormComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  editing: PropTypes.bool,
  name: PropTypes.shape({
    name: PropTypes.string.isRequired,
    setName: PropTypes.func.isRequired,
  }).isRequired,
  creator: PropTypes.shape({
    creator: PropTypes.string.isRequired,
    setCreator: PropTypes.func.isRequired,
  }).isRequired,
  difficulty: PropTypes.shape({
    difficulty: PropTypes.string.isRequired,
    setDifficulty: PropTypes.func.isRequired,
  }).isRequired,
};

export default FormComponent;
