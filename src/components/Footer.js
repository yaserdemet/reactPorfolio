import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { BASE_URL } from "../config/env";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  const [position, setPosition] = useState();
  const { t, i18n } = useTranslation("footer");
  
  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(position => {
    //   setPosition(position.coords);
    // })
    // const data = fetch("https://ipapi.co/json/")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

    const getPosition = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/json/`);
        setPosition(response.data);
      } catch (error) {
        console.error("Error fetching geolocation data:", error);
      }
    };
    getPosition();
  }, []);

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Yaser DEMET</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>
            {t("Copyright")} © {year}
          </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/yaserdemet"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/yaser-demet/"
                style={{ color: "white" }}
                target="_blank"
                // rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col md="12" className="footer-copywright">
          <h3>{`${position?.region}/${position?.country_name}`}</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
