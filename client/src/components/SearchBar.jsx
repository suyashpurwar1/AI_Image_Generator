import { SearchOutlined } from "@mui/icons-material"
import styled from "styled-components";


const SearchBar = ({ search, setSearch }) => {
  return (
    <SearchBarContainer>
      <SearchOutlined />
      <input
        style={{
          border: "none",
          outline: "none",
          width: "100%",
          color: "inherit",
          background: "transparent",
          fontSize: "16px",
        }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </SearchBarContainer>
  );
};
export default SearchBar;

const SearchBarContainer=styled.div`
max-width: 550px;
display: flex;
width: 60%;
border: 1px solid ${({ theme }) => theme.text_secondary +90};
border-radius: 8px;
padding: 12px 16px;
cursor: pointer;
gap:
6px;
align-items: center;
`;