import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { skillsData } from "../components/utils/skillsData";
import { skillsImage } from "../components/utils/skillsImage";
import "../styles/Home.module.css";

const Skills = () => {
  const extendedSkillsData = [...skillsData, ...skillsData]
  return (
    <Container>
      <Row>
        <Col md={7}>
          <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
            Skills
          </h2>
          <div className="mt-8">
            <div className="w-full h-full p-4 bg-transparent rounded-md shadow-md">
              <Marquee
                gradient={false}
                speed={70}
                pauseOnClick={true}
                delay={0}
                play={true}
                direction="left"
              >
                {extendedSkillsData.map((skill, id) => (
                  <div
                    className="w-full h-full flex items-center justify-center flex-col gap-12 sm:gap-8 ml-4 bg-gradient-to-b from-purple-700 via-pink-500 to-yellow-300 p-8"
                    key={id}
                  >
                    <Image
                      className="w-16 h-16 sm:w-10 sm:h-10 bg-no-repeat bg-contain"
                      src={skillsImage(skill)}
                      alt={skill}
                    />
                    <p className="sm:text-sm">{skill}</p>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;