import styled from "styled-components";

export const Container = styled.button`
  width: 100px;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 20px;
  background-color: transparent;
  border: 1.5px solid rgb(0, 144, 118);
  transition: 0.4s;
  /* transform: translateY(0px); */
  color: #fff;

  &:hover {
    box-shadow: 0 0 1em rgb(96, 255, 217);

    transition: 0.3s;
  }

  &:active {
    transform: translateY(1px);
  }
`;
