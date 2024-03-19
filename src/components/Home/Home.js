import React, { useState, useEffect } from "react";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

const Home = () => {
  const [text, setText] = useState("");
  const targetText = "Front End Developer";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const capitalAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const typingSpeed = 15;

  useEffect(() => {
    let currentIndex = 0;
    let newText = "";

    const interval = setInterval(() => {
      const currentChar = targetText[currentIndex];

      if (currentChar === " ") {
        newText += " ";
      } else {
        var randomChar = "";
        if (currentChar === currentChar.toUpperCase()) {
          randomChar =
            capitalAlphabet[Math.floor(Math.random() * capitalAlphabet.length)];
        } else {
          randomChar = alphabet[Math.floor(Math.random() * alphabet.length)];
        }

        if (newText.length < currentIndex + 1) {
          newText += randomChar;
        } else {
          newText = newText.slice(0, -1) + randomChar;
        }
      }

      setText(newText);

      if (newText[newText.length - 1] === currentChar) {
        currentIndex++;
      }

      if (currentIndex === targetText.length) {
        clearInterval(interval);
      }
    }, typingSpeed);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section flex flex-col justify-center" id="home">
      <div className="hero w-100 h-1/2 text-center bg-[#363F4E] p-2 rounded-l-lg flex flex-col justify-between">
        <div className="title p-2 mt-4">
          <h1 className="text-8xl mb-2">Lewis Clarke</h1>
          <h2 className="text-4xl text-[#CAD2D8] mb-2">{text}</h2>
        </div>
        <div className="socialLinks flex flex-row justify-between">
          <div className="iconLinks flex flex-row">
            <a
              className="text-4xl m-4"
              href="http://github.com/lewisClarke1"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              className="text-4xl m-4"
              href="mailto:lewisclarke467@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope />
            </a>
            <a
              className="text-4xl m-4"
              href="http://linkedin.com/in/lewisclarke467"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="cvLink flex items-center">
            <a href={process.env.PUBLIC_URL + "/Lewis_Clarke CV.pdf"} download>
              <button className="bg-[#2B7A78] rounded-xl p-2 hover:bg-[#1D605F] mr-2">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
