import React, { memo, useState, useEffect } from "react";
import { useCallback } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Navbar = memo(() => {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);

  const changeNav = useCallback(() => {
    window.scrollY >= 80
      ? setScroll((prevState) => (prevState = true))
      : setScroll((prevState) => (prevState = false));
  }, [scroll]);

  useEffect(() => {
    changeNav();
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#141414" }}>
        <Nav scroll={scroll} click={click}>
          <NavContainer>
            <Navlogo to='/'>
              <NavIcon />
              EXPLOR
            </Navlogo>
          </NavContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
});
export default Navbar;
