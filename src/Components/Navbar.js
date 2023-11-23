import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ size, setShow }) {
  return (
    <div>
      <nav>
        <div className="nav-box">
          <span className="my-shop">
            {" "}
            <i>Ash Shopping</i>{" "}
          </span>
          <div className="cart" onClick={() => setShow(false)}>
            <span>
              {" "}
              <FontAwesomeIcon icon={faCartPlus} />{" "}
            </span>
            <span>{size}</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
