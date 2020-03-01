import styled from "styled-components"

export const SideBar = styled.div`

    display: flex;
    flex-direction: column;
    width: 55px;
    align-items: center;
    justify-content: end;
    height: 100%;
    background: linear-gradient(180deg, rgba(43,182,201,1) 21%, rgba(43,201,197,1) 56%, rgba(0,255,171,1) 100%);
    border-radius: 3px 3px;
    margin-top: -55px;

  .btn-menu {
    display: flex;
    width: 100%;
    height: 55px;
    align-items: center;
    background-color: #209cfe;
    justify-content: center;
    font-size: 25px;
    color: #fff;
  }

  .menu-item {
    color: #fff;
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
  } 
`;
