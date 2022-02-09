import styled from "styled-components";
import { backgroundLight, secondary } from "../globalStyles";

const PageHolder = styled.div`
  background-color: ${backgroundLight};
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Status = styled.h2`
  font-size: 70px;
  margin: 0;
  color: ${secondary};
`;
const Info = styled.h1`
  margin: 0;
  color: ${secondary};
  margin-bottom: 300px;
`;

const NotFoundPage = () => {
  return (
    <PageHolder>
      <Status>404</Status>
      <Info>Page Not Found</Info>
    </PageHolder>
  );
};
export default NotFoundPage;
