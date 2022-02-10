import styled from "styled-components";
import { backgroundDark, textPrimary } from "../../globalStyles";

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-bottom: 20px;
  gap: 10px;
`;

const FilterItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 4.5px;
`;

const InputTitle = styled.h2`
  font-size: 18px;
  margin: 5px 0;
  color: ${textPrimary};
`;

const SelectInput = styled.select`
  background-color: ${backgroundDark};
  color: white;

  border-radius: 0 0 10px 10px;
  border: none;

  width: 365px;
  height: 30px;

  padding-left: 20px;

  font-size: 18px;
  font-family: inherit;
`;

const FilterComponentHTML = ({
  actionOnSubmit,
  data: { type, setType, category, setCategory },
}) => {
  return (
    <FormContainer onSubmit={actionOnSubmit}>
      <FilterItem>
        <InputTitle>Category</InputTitle>
        <SelectInput
          value={category}
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        >
          <option value="Any Category"> Any Category </option>
          <option value="Sports"> Sports </option>
          <option value="Entertainment: Video Games">Video Games</option>
          <option value="Animals"> Animals </option>
          <option value="Geography"> Geography </option>
          <option value="Science: Computers"> Computers </option>
        </SelectInput>
      </FilterItem>
      <FilterItem>
        <InputTitle>Type</InputTitle>
        <SelectInput
          value={type}
          onChange={(event) => {
            setType(event.target.value);
          }}
        >
          <option value="Any Type">Any Type</option>
          <option value="boolean">True / False</option>
          <option value="multiple">Multiple Choice</option>
        </SelectInput>
      </FilterItem>
    </FormContainer>
  );
};

export default FilterComponentHTML;
