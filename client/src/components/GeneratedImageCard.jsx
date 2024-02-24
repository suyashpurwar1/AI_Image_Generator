import { CircularProgress } from "@mui/material";
import styled from "styled-components";

const GeneratedImageCard = ({ src, loading }) => {
  return (
    <Container>
      {loading ? (
        <>
          <CircularProgress
            style={{ color: "inherit", width: "24px", height: "24px" }}
          />
          Generating Your Image ..
        </>
      ) : src ? (
        <Image src={src}/>
      ) : (
        <>Write prompt to generate image</>
      )}
    </Container>
  );
};
export default GeneratedImageCard;
const Container = styled.div`
  flex: 1;
  min-height: 300px;
  padding: 16px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px dashed ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.arrow + 80};
  border-radius: 20px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
  background: ${({ theme }) => theme.black + 50};
`;
