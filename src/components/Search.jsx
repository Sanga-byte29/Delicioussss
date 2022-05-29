import styled from "styled-components";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa/index.esm";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    // console.log("hey");
    e.preventDefault();
    navigate("./searched/" + input);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0rem 20rem;
  div {
    width: 100%;
    position: relative;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 5rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 95%;
  }
  svg {
    width: 17px;
    height: 17px;
    position: relative;
    left: 4%;
    bottom: -20%;

    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search;
