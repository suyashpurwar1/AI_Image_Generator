import React, { useState } from "react";
import styled from "styled-components";
import GenerateImageForm from "../components/GenerateImageForm";
import GeneratedImageCard from "../components/GeneratedImageCard";

const CreatePost = () => {
  const [generateImageLoading,setGenerateImageLoading]=useState(false);
  const [createPostLoading, setCreatePostLoading] = useState(false);
  const [post, setPost] = useState({
    name:"",
    prompt:"",
    photo:""
  });
  return (
    <Container>
      <Wrapper>
        <GenerateImageForm
          post={post}
          setPost={setPost}
          createPostLoading={createPostLoading}
          setCreatePostLoading={setCreatePostLoading}
          generateImageLoading={generateImageLoading}
          setGenerateImageLoading={setGenerateImageLoading}
        />
        <GeneratedImageCard loading={generateImageLoading} src={post?.photo} />
      </Wrapper>
    </Container>
  );
};
export default CreatePost;
const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  padding: 25px 25px;
  padding-bottom: 50px;
  background: ${({ theme }) => theme.bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (max-width: 650px) {
    padding: 8px 16px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1250px;
  padding: 32px 0px;
  display: flex;
  justify-content: center;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;
