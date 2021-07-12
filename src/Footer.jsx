import React from "react";
import { FaPhone } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { IoLogoFacebook } from 'react-icons/io';
import "./App.css";

function Footer() {
  return (
    <div className="main-footer footer_display">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <img src="./transtu logo.png" alt="transtu" />
          </div>
          <div className="col">
            <h4>Coordonnés</h4>
            <h1 className="lis">
              <p>Adresse :
                33 Avenue du Japon Montplaisir
                1073 Tunis</p>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Menu</h4>
            <ui className="lis">
              <div className="ac">
                <li>Acceuil</li>
              </div>
              <li>Nouvautés</li>
              <div className="hi">
                <li>A propos</li>
              </div>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Contact</h4>
            <ui className="lis">
              <div className="bl">
                <li><FaPhone className="phone" /> 71 904 883</li>
              </div>
              <li><IoMdMail className="mail" /> brc@transtu.tn</li>
              <div className="l">
                <li id="too"><IoLogoFacebook className="fb" /> TRANSTU officiel</li>
              </div>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row" id="dcr">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} TRANSTU | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div >
  );
}

export default Footer;
