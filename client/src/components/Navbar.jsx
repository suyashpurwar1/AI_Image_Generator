import React from "react";
import styled from "styled-components";
import Button from "./button.jsx";
import { darkTheme, lightTheme } from "../utils/Theme";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import {
  AddRounded,
  ExploreRounded,
} from "@mui/icons-material";
const Navbar = ({ theme, setTheme }) => {
  const navigate = useNavigate();
  const loaction = useLocation();
  const path = loaction.pathname.split("/");
  const changeMode = () => {
    if (theme === darkTheme) {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  };

  return (
    <Container>
    <p> Gen AI</p>
      {path[1] === "post" ? (
        <Button
          onClick={() => navigate("/")}
          text="Explore post"
          leftIcon={
            <ExploreRounded
              style={{
                fontSize: "18px",
              }}
            />
          }
          type="secondary"
        />
      ) : (
        <Button
          onClick={() => navigate("/post")}
          text="Create new post"
          leftIcon={
            <AddRounded
              style={{
                fontSize: "18px",
              }}
            />
          }
        />
      )}
      <Button
        onClick={changeMode}
        leftIcon={
          theme === darkTheme ? "Light" : "Dark"
        }
      ></Button>
    </Container>
  );
};
const Container = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.navbar};
  color: ${({ theme }) => theme.text_primary};
  font-weight: bold;
  font-size: 22px;
  padding: 0px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  height: 150px;
  p{
    color: white;
  }
  @media (max-width: 650px) {
    padding: 0px 12px;
  }
`;
export default Navbar;
