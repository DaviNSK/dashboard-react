import styled from "styled-components";

export const Head = styled.div`
  display: flex;
  width: 100%;
  height: 55px;
  background-color: #dae8e8;
  padding-left: 55px;
 
  .header-tp {
    display: flex;
    width: 100%;
    flex-direction: row;
    margin: auto;
    padding: 0 15px;

    p {
    padding: 0 10px;
    font-family: serif;
  }

  .user {
    width: 27px;
    height: 27px;
    border-radius: 50%;
    background-color: #fff;
    padding: 0px 10px;
    font-size: 20px;
    position: relative;
    color: #b5b8ba;

    svg {
    position: absolute;
    left: 0px;
    right: 1px;
    top: 0;
    bottom: 2px;
    margin: auto;
    }
  }

  .bell {
    width: 27px;
    height: 27px;
    background-color: #fff;
    border-radius: 50%;
    padding: 0 10px;
    font-size: 20px;
    position: relative;
    color: #b5b8ba;

    svg {
    position: absolute;
    left: 0px;
    right: 1px;
    top: 0;
    bottom: 2px;
    margin: auto;
    }
  }
  }
`;

export const Search = styled.input`
display: flex;
height: 28px;
margin-left: auto;
border-radius: 27px;
border: none;
padding: 0 20px;


`;