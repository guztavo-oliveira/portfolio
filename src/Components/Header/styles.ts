import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  padding: 20px 10px;
  /* background-color: #112240; */
  background-color: #111;
  color: #fff;
  display: flex;
  justify-content: end;

  button {
    height: 100%;
    width: 50px;
    color: #fff;
    background-color: transparent;
    cursor: pointer;

    svg {
      width: 30px;
      height: 100%;
    }
  }

  .menu__desktop {
    width: 100%;
    display: none;
    padding: 10px;

    a {
      text-decoration: none;
      color: #fff;
    }

    ul {
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 10px;
      align-items: center;
      justify-content: space-around;
      max-width: 1000px;

      li {
        width: 100px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        img {
          height: 20px;
        }

        a {
          background: linear-gradient(
              to right,
              rgba(100, 200, 200, 0),
              rgba(100, 200, 200, 0)
            ),
            linear-gradient(to right, #fd93c9, #9431e6);
          background-size: 100% 3px, 0 3px;
          background-repeat: no-repeat;
          transition: background-size 400ms;
        }

        a:hover {
          background-size: 0 3px, 100% 3px;
        }
      }
    }
  }

  @media (min-width: 480px) {
    .menu__mobile {
      display: none;
    }

    .menu__desktop {
      display: none;
      justify-content: center;
    }
  }
`;

export const Menu = styled.nav`
  padding: 10px;
  background-color: #111;

  a {
    text-decoration: none;
    color: #fff;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;

    li {
      width: 100px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      img {
        height: 20px;
      }
    }
  }
`;
