import { Container, Menu } from "./styles";
import { Drawer } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import ln from "../../assets/images/linkedin.png";
import github from "../../assets/images/github-logo3.png";
import cv from "../../assets/images/curriculum_vitae.png";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (event: any, status: boolean) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(status);
  };

  return (
    <Container>
      <div className="menu__desktop">
        <ul>
          <li>
            <img src={ln} alt="linkedin logo" />
            <a
              href="http://www.linkedin.com/in/gustavooliver4"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li>
            <img src={github} alt="github logo" />
            <a
              href="http://www.linkedin.com/guztavo-oliveira"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <img src={cv} alt="resume logo" />
            <a
              href="../../assets/doc/Gustavo_Oliveira_CV_Fullstack.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Currículo
            </a>
          </li>
        </ul>
      </div>
      <div className="menu__mobile">
        <button onClick={(event) => toggleDrawer(event, true)}>
          <GiHamburgerMenu />
        </button>
      </div>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={(event) => toggleDrawer(event, false)}
      >
        <Menu>
          <ul>
            <li>
              <a
                href="http://www.linkedin.com/in/gustavooliver4"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
              <img src={ln} alt="linkedin logo" />
            </li>
            <li>
              <a
                href="http://www.linkedin.com/guztavo-oliveira"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <img src={github} alt="github logo" />
            </li>
            <li>
              <a
                href="../../assets/doc/Gustavo_Oliveira_CV_Fullstack.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Currículo
              </a>
              <img src={cv} alt="resume logo" />
            </li>
          </ul>
        </Menu>
      </Drawer>
    </Container>
  );
};

export default Header;
