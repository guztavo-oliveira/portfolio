import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./style";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  title?: string;
}

const Button = ({ title, children, ...rest }: IButtonProps) => {
  return (
    <Container title={title} {...rest}>
      {children}
    </Container>
  );
};
export { Button };
