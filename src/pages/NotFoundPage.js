import styled from "styled-components";
import { backgroundLight } from "../globalStyles";

const PageHolder = styled.div`
  background-color: ${backgroundLight};
  height: 100vh;
`;

const NotFoundPage = () => {
  return <PageHolder></PageHolder>;
};
export default NotFoundPage;
