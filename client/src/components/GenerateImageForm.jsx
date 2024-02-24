import styled from "styled-components";
import Button from "./button.jsx";
import TextInput from "./TextInput.jsx";
import { AutoAwesome, CreateRounded } from "@mui/icons-material";
import { GenerateAIImage, CreatePosts } from "../api/index.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const GenerateImageForm = ({
  generateImageLoading,
  setGenerateImageLoading,
  createPostLoading,
  setCreatePostLoading,
  post,
  setPost,
}) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const generateImageFun = async () => {
    setGenerateImageLoading(true);
    await GenerateAIImage({ prompt: post.prompt })
      .then((res) => {
        setPost({
          ...post,
          photo: `data:image/jpge;base64,${res?.data?.photo}`,
        });
        setGenerateImageLoading(false);
      })
      .catch((error) => {
        setError(error?.response?.data?.message);
      });
  };
  const createPostFun = async () => {
    setCreatePostLoading(true);
    await CreatePosts(post)
      .then((res) => {
        setGenerateImageLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setError(error?.response?.data?.message);
      });
  };
  return (
    <Form>
      <Top>
        <Title>Generate Image With Prompt</Title>
        <Desc>Write your promt according to the image you want</Desc>
      </Top>
      <Body>
        <TextInput
          label="Author"
          name="name"
          placeholder="Enter your name"
          value={post.name}
          handelChange={(e) => {
            setPost({ ...post, name: e.target.value });
          }}
        />
        <TextInput
          label="Image Prompt "
          name="name"
          placeholder="Write a detailed prompt about the image"
          rows="8"
          textArea
          value={post.prompt}
          handelChange={(e) => {
            setPost({ ...post, prompt: e.target.value });
          }}
        />
        {error && <div style={{ color: "red" }}>{error}</div>}
        ** You can post the AI Genrated Image in Community
      </Body>
      <Action>
        <Button
          text="Generate Image"
          flex
          leftIcon={<AutoAwesome />}
          isLoading={generateImageLoading}
          isDisabled={post.prompt === ""}
          onClick={() => generateImageFun()}
        />
        <Button
          flex
          text="Post Image"
          type="secondary"
          leftIcon={<CreateRounded />}
          isLoading={createPostLoading}
          isDisabled={
            post.name === "" || post.prompt === "" || post.photo === ""
          }
          onClick={() => createPostFun()}
        />
      </Action>
    </Form>
  );
};
export default GenerateImageForm;
const Form = styled.div`
  flex: 1;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 35px;
  justify-content: center;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondaary};
`;
const Action = styled.div`
  flex: 1;
  display: flex;
  gap: 8px;
`;
const Desc = styled.div`
  font-size: 17px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
`;
