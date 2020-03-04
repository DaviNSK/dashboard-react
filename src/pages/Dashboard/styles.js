import styled from "styled-components";

export const Dash = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px 27.5px;
  justify-content: flex-start;

  @media (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    padding: 0px 10px;
  }

  .dashb {
    padding: 7px 14px;
  }

  .container-1 {
    display: flex;
    width: 70%;
    flex-direction: column;

    @media (min-width: 320px) and (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;

  .cx {
    display: flex;
    width: 31.6%;
    justify-content: center;
    flex-direction: column;
    height: 230px;
    padding: 0 10px;
    background: #fff;
    border-radius: 5px;
    margin-right: 15px;
    box-shadow: 1px 1px 20px #0000001f;

    p {
      font-size: 17px;
      color: #8a8a8a;
    }

    h2 {
  font-size: 40px;
  background: -webkit-linear-gradient(180deg, rgba(43,182,201,1) 21%, rgba(43,201,197,1) 56%, rgba(0,255,171,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

    .p2 {
      font-size: 15px;
      color: #9e9e9e;
    }

    .icon1 {
      font-size: 50px;
      color: rgba(43,182,201,1);
    }

    @media (min-width: 320px) and (max-width: 768px) {
      width: 100%;
      margin-right: 0px;
      margin-top: 15px;
    }
  }
`;

export const Dowloads = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  overflow-y: auto;
  width: 31.6%;
  margin-top: 15px;
  border-radius: 5px;
  height: 308px;
  padding: 0 10px;
  background: #fff;
  box-shadow: 1px 1px 20px #0000001f;

  @media (min-width: 320px) and (max-width: 768px) {
    width: 100%;
  }

  p {
    padding-top: 5px;
    color: #9e9e9e;
    font-size: 15px;
  }

  .list-dowload {
    display: flex;
    width: 100%;
    list-style: none;
    flex-direction: column;

    li {
      font-size: 13px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-weight: bolder;
    }
  }
`;

export const Resgraph = styled.span`
  display: flex;
  width: 65%;
  flex-direction: column;

  @media (min-width: 320px) and (max-width: 768px) {
    width: 100%;
  }
`;

export const Resulted = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 146px;
  margin-left: 15px;
  margin-top: 15px;
  background: #fff;
  border-radius: 5px;
  padding: ${props => props.padding};
  box-shadow: 1px 1px 20px #0000001f;

  @media (min-width: 320px) and (max-width: 768px) {
    margin-left: 0px;
  }
`;

export const Container2 = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;

  @media (min-width: 320px) and (max-width: 768px) {
    width: 100%;
  }
`;

export const Description = styled.div`
  display: flex;
  width: 100%;
  height: 390px;
  background: #fff;
  flex-direction: column;
  border-radius: 5px;
  margin-top: 35px;
  overflow-y: auto;
  box-shadow: 1px 1px 20px #0000001f;


  .description {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 18px;
    margin-top: 10px;

    h1 {
      color: #6e6e6e;
      font-size: 23px;
      margin-top: 5px;
    }
  }

  .cx-text {
    display: flex;
    width: 100%;
    height: 100px;
    background-color: #dae8e8;
    padding: 0 20px;
    font-size: 12.6px;
    flex-direction: column;
    border-radius: 3px;

    strong {
      color: #6e6e6e;
      padding: 2px 0px 5px;
    }

    p {
      color: #8f8f8f;
    }
  }
`;

export const Percentage = styled.div`
  display: flex;
  width: 100%;
  height: 147px;
  flex-direction: column;
  align-items: center;
  background: #fff;
  margin-top: 15px;
  border-radius: 5px;
  box-shadow: 1px 1px 20px #0000001f;

  .container-perc {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
