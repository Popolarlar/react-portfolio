import React from "react";
import { Link } from "react-scroll";

function NavItem(props) {
  return (
    <>
      <li className="nav-wrapper__item">
        <Link
          activeClass="text-color-main"
          to={props.toLink}
          spy={false}
          smooth={true}
          offset={-65}
          duration={500}
          onClick={props.toggle}
        >
          {props.item}
        </Link>
      </li>
    </>
  );
}

export default NavItem;
