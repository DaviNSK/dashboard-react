import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0 22px;

  h1 {
    color: #9e9e9e;
    font-family: sans-serif;
    font-weight: bolder;
  }

  .line-1 {
    display: flex;
    margin-top: 3px;
    width: 37%;
    height: 1px;
    background-color: #d3d3d3;
  }

  .input-1 {
    width: 26%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 5px;

    p {
      display: flex;
      margin-top: 8px;
      color: #0b2167;
    }

    input {
      width: 200px;
      height: 28px;
      border: 0;
      border-radius: 5px;
      margin-left: auto;
      padding: 0 10px;
      box-shadow: 1px 1px 20px #0000001f;
    }
  }

  .input-2 {
    width: 26%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 5px;

    p {
      display: flex;
      margin-top: 8px;
      color: #0b2167;
    }

    input {
      width: 200px;
      height: 28px;
      border: 0;
      border-radius: 5px;
      margin-left: auto;
      padding: 0 10px;
      box-shadow: 1px 1px 20px #0000001f;
    }
  }

  .input-3 {
    width: 26%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 5px;

    p {
      display: flex;
      margin-top: 8px;
      color: #0b2167;
    }

    input {
      width: 200px;
      height: 28px;
      border: 0;
      border-radius: 5px;
      margin-left: auto;
      padding: 0 10px;
      box-shadow: 1px 1px 20px #0000001f;
    }
  }

  .line-2 {
    display: flex;
    margin-top: 3px;
    width: 37%;
    height: 1px;
    background-color: #d3d3d3;
  }

  a {
    width: 150px;
    margin-top: 5px;
  }

  button {
    width: 150px;
    height: 28px;
    background-color: rgba(43, 182, 201, 1);
    border: 0;
    margin-top: 5px;
    border-radius: 5px;
    box-shadow: 1px 1px 20px #0000001f;
    cursor: pointer;
    transition: all 0.4s ease-in;

    &:hover {
      background-color: #196d90;
    }
  }

`;
