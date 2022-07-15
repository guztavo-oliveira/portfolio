import styled, { css } from "styled-components";

import ln from "../../assets/images/linkedin.png";

export const Container = styled.main`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  height: 100%;
  /* background-color: #112240; */
  background-color: #111;
  color: #fff;

  .intro {
    padding: 0 20px;

    ////////////////////////////////////

    .trapdoor {
      -webkit-transform: translateZ(0px);
      -webkit-font-smoothing: antialiased;
      /* position: absolute;
      top: 50%;
      left: 50%; 
      margin-left: -100px;
      margin-top: -25px; */
      display: flex;
      justify-content: center;
      align-items: center;
      width: 130px;
      height: 30px;
      box-shadow: inset -7px 0px 12px -8px rgba(0, 0, 0, 0.3),
        inset 7px 0px 12px -8px rgba(0, 0, 0, 0.3);
      background: rgba(0, 0, 0, 0.3);
      -webkit-transition: background 400ms ease-in-out;
      -moz-transition: background 400ms ease-in-out;
      -ms-transition: background 400ms ease-in-out;
      -o-transition: background 400ms ease-in-out;
      transition: background 400ms ease-in-out;

      cursor: pointer;
      /* border: 1px solid rgb(0, 144, 118); */

      &:hover {
        background: #111;

        .door {
          box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.4);
          -webkit-transform: scale(1.08);
          -moz-transform: scale(1.08);
          -ms-transform: scale(1.08);
          -o-transform: scale(1.08);
          transform: scale(1.08);
        }

        .top {
          top: -50%;
        }

        .bottom {
          top: 100%;
        }
      }

      .linkedin-button {
        /* margin-left: -77px;
        position: absolute !important;
        margin-top: -14px;
        left: 50%;
        top: 50%; */
        background-color: #0077b5;
        padding: 5px;
        border-radius: 10px;
        color: #fff;
        padding: 5px 10px;
      }
    }

    .top {
      top: 0%;
      left: 0px;

      &:before {
        top: 4px;
      }
    }

    .bottom {
      top: 50%;
      left: 0px;

      &:before {
        top: -11px;
      }
    }

    .door-linkedin {
      -webkit-transition: top 400ms, box-shadow 200ms, -webkit-transform 300ms;
      -moz-transition: top 400ms, box-shadow 200ms, -moz-transform 300ms;
      -ms-transition: top 400ms, box-shadow 200ms, -ms-transform 300ms;
      -o-transition: top 400ms, box-shadow 200ms, -o-transform 300ms;
      transition: top 400ms, box-shadow 200ms, transform 300ms;
      -webkit-transition-timing-function: ease-in-out;
      -moz-transition-timing-function: ease-in-out;
      -ms-transition-timing-function: ease-in-out;
      -o-transition-timing-function: ease-in-out;
      transition-timing-function: ease-in-out;
      background-color: #111;
      position: absolute;
      overflow: hidden;
      width: 100%;
      z-index: 2;
      height: 50%;

      a {
        width: 100%;
      }

      &:before {
        font-family: tweet, sans-serif;
        position: absolute;
        /* margin-left: -20px; */
        font-size: 20px;
        display: block;
        color: #fff;
        content: "Linkedin";
        width: 0px;
        height: 20px;
        /* left: 52%; */
      }
    }

    .door-github {
      -webkit-transition: top 400ms, box-shadow 200ms, -webkit-transform 300ms;
      -moz-transition: top 400ms, box-shadow 200ms, -moz-transform 300ms;
      -ms-transition: top 400ms, box-shadow 200ms, -ms-transform 300ms;
      -o-transition: top 400ms, box-shadow 200ms, -o-transform 300ms;
      transition: top 400ms, box-shadow 200ms, transform 300ms;
      -webkit-transition-timing-function: ease-in-out;
      -moz-transition-timing-function: ease-in-out;
      -ms-transition-timing-function: ease-in-out;
      -o-transition-timing-function: ease-in-out;
      transition-timing-function: ease-in-out;
      background-color: #111;
      position: absolute;
      overflow: hidden;
      width: 100%;
      z-index: 2;
      height: 50%;

      a {
        width: 100%;
      }

      &:before {
        font-family: tweet, sans-serif;
        position: absolute;
        /* margin-left: -20px; */
        font-size: 20px;
        display: block;
        color: #fff;
        content: "Github";
        width: 0px;
        height: 20px;
        /* left: 52%; */
      }
    }

    .door-cv {
      -webkit-transition: top 400ms, box-shadow 200ms, -webkit-transform 300ms;
      -moz-transition: top 400ms, box-shadow 200ms, -moz-transform 300ms;
      -ms-transition: top 400ms, box-shadow 200ms, -ms-transform 300ms;
      -o-transition: top 400ms, box-shadow 200ms, -o-transform 300ms;
      transition: top 400ms, box-shadow 200ms, transform 300ms;
      -webkit-transition-timing-function: ease-in-out;
      -moz-transition-timing-function: ease-in-out;
      -ms-transition-timing-function: ease-in-out;
      -o-transition-timing-function: ease-in-out;
      transition-timing-function: ease-in-out;
      background-color: #111;
      position: absolute;
      overflow: hidden;
      width: 100%;
      z-index: 2;
      height: 50%;

      a {
        width: 100%;
      }

      &:before {
        font-family: tweet, sans-serif;
        position: absolute;
        /* margin-left: -20px; */
        font-size: 20px;
        display: block;
        /* color: #0077b5; */
        color: #fff;
        content: "Currículo";
        width: 0px;
        height: 20px;
        /* left: 52%; */
      }
    }

    ////////////////////////////////////
  }

  .title {
    display: flex;
    white-space: nowrap;
    font-size: 1.2rem;
  }

  .title::before {
    content: "";
    height: 1px;
    background-color: #64ffda;
    width: 10px;
    display: block;
    position: relative;
    margin-right: 5px;
    align-self: center;
  }

  .title::after {
    content: "";
    height: 1px;
    background-color: #64ffda;
    width: 100%;
    display: block;
    position: relative;
    margin-left: 5px;
    align-self: center;
  }

  .content_box {
    padding: 0px 15px;
    p {
      font-size: 1rem;
      line-height: 1.3rem;
    }

    span {
      color: #64ffda;
      font-weight: bold;
    }
  }

  .avatar {
    display: none;
  }

  .intro__button {
    width: 100%;
    /* border: 1px solid; */
    /* height: 10px; */
    display: none;
    justify-content: space-around;
    margin-top: 10px;

    .container__trapdoor {
      display: flex;
      align-items: center;

      img {
        height: 20px;
        margin-right: 10px;
      }
    }
  }

  .trapdoor {
    display: none;
  }

  .bio,
  .techs {
    margin: 10px 0px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #e6f1ff;
  }

  .personal {
    display: flex;
    flex-direction: column;
    width: 60%;

    h1 {
      font-size: 2rem;
      margin-bottom: 10px;
      display: inline-block;
    }

    h3 {
      font-size: 0.8rem;
      margin-bottom: 10px;
      display: inline-block;
    }

    @media (min-width: 480px) {
      h1 {
        font-size: 2.5rem;
        margin-bottom: 10px;
        display: inline-block;
      }

      h3 {
        font-size: 1rem;
        margin-bottom: 10px;
        display: inline-block;
      }
    }
  }

  .personal::after {
    content: "";
    width: 50px;
    margin-top: 10px;
    border-radius: 40px;
    width: 30%;
    max-width: 100px;
    height: 6px;
    background: #64ffda;
    display: block;
  }

  .bio {
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;

      img {
        width: 50%;
        border-radius: 50%;
        max-width: 300px;
      }
    }

    @media (min-width: 480px) {
      .content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 20px;
        max-width: 1000px;
        margin: 20px auto;

        img {
          width: 240px;
          margin-left: 20px;
        }
      }
    }
  }

  .techs {
    display: flex;
    justify-content: column;

    .techs__columns {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 10px;
      /* margin: 0 10px; */
      padding: 10px;

      img {
        width: 60%;
        max-width: 80px;
      }

      .front__column,
      .back__column,
      .devops__column {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
        padding: 5px;
      }

      .front,
      .back,
      .devops {
        width: 80%;
        max-width: 250px;
        background-color: rgba(48, 48, 48, 0.3);
        border-radius: 10px;
      }
    }

    .techs__title {
      margin: 10px 0;
      display: flex;
      justify-content: center;
    }
    /* .front__column {
      border: 1px solid red;
      height: 100px;
    } */

    /* .spinner {
      color: red;
      border: 1px solid;
      animation: showspin 8s linear 1s infinite;
    }

    @keyframes showspin {
      to {
        transform: rotate(360deg);
        transform: translate();
      }
    } */

    @media (min-width: 480px) {
      .techs__columns {
        .front__column,
        .back__column,
        .devops__column {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
          /* width: 100px; */
          padding: 5px;
        }
      }
    }
  }

  .portfolio {
    .portfolio__container {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: center;
      padding: 10px;
      margin-top: 10px;
    }
  }

  .footer {
    height: 150px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
    border-top: 1px solid #64ffda;
    margin-top: 20px;
    flex-wrap: wrap;
    font-size: 15px;

    .contact {
      display: flex;
      align-items: center;
      img {
        height: 30px;
        margin: 0 10px;
      }
    }

    .links {
      width: 100px;
      /* border: 1px solid; */
      display: flex;
      justify-content: space-between;

      a {
        img {
          height: 20px;
        }
      }
    }
  }

  @media (min-width: 480px) {
    .intro {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      margin: 0 auto;
      max-width: 820px;
    }

    .intro__button {
      width: 100%;
      /* border: 1px solid; */
      display: flex;
      justify-content: space-around;
      margin-top: 10px;
    }

    .title {
      font-size: 1.4rem;
    }

    .avatar {
      display: contents;

      img {
        width: 50%;
        border-radius: 20px;

        /* filter: drop-shadow(0 0 0.5rem rgb(96, 255, 217, 0.5)); */
        border: 1px dashed rgb(96, 255, 217);
        max-width: 300px;
      }
    }

    .techs__title {
      h1 {
        font-size: 1.2rem;
      }
    }

    .teste {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
    }
  }
`;
