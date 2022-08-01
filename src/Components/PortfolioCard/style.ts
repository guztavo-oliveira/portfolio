import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  /* height: 400px; */
  /* border: 2px solid chartreuse; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(48, 48, 48, 0.3);
  padding: 20px;
  border-radius: 20px;
  transition: ease 0.5s;
  position: relative;

  /* .card_logo_tag {
    position: absolute;
    color: red;
    font-size: 15px;
    left: 36%;
    top: 9%;
  } */

  &:hover {
    transform: translate(-2px, -2px);
    transition: ease 0.5s;
    box-shadow: 10px 10px 0.4rem rgba(0, 0, 0, 0.3);
  }

  h1 {
    background-image: linear-gradient(
      183.51deg,
      rgb(96, 255, 217) 0%,
      rgb(0, 144, 118) 100%
    );
    -webkit-text-fill-color: transparent;
    font-size: 1.5rem;
    background-clip: text;
    -webkit-background-clip: text;
  }

  p {
    font-size: 0.8rem;
    line-height: 1rem;
    padding: 0px 10px;
    text-align: justify;
    color: #e6f1ff;
  }

  .card_container {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    justify-content: center;

    @media (min-width: 580px) {
      display: flex;
      flex-direction: row;
      margin-top: 10px;
      align-items: center;
    }
  }

  .card_logo {
    display: flex;
    justify-content: center;

    img {
      margin: 10px 0;
      width: 90%;
      border-radius: 10px;
    }
  }

  .card_content {
    .container__buttons {
      display: flex;
      gap: 20px;
      margin: 10px 0;
      padding: 20px;
      justify-content: center;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      width: 90%;
      gap: 10px;
      justify-content: center;
      width: 100%;

      img {
        height: 50px;
      }
    }

    @media (min-width: 580px) {
      max-width: 40%;
      min-width: 40%;
    }
  }
`;
