import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background: #fff;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  background: white;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background: #f8f9fa; /* Light gray or any color */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;


const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #22c55e;
  }
`;

const Button = styled.button<{ variant?: "login" | "calculator" | "demo" }>`
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  transition: background 0.3s, box-shadow 0.3s;

  background: ${(props) =>
    props.variant === "login" ? "#D6FFD0" : props.variant === "demo" ? "#14A800" : "transparent"};
  
  color: ${(props) =>
    props.variant === "demo" ? "black" : "#14A800"};

  box-shadow: ${(props) => (props.variant === "calculator" ? "none" : "0 0 5px rgba(0,0,0,0.1)")};

  &:hover {
    background: ${(props) =>
      props.variant === "login" ? "#c4f5b8" : props.variant === "demo" ? "#0f8c00" : "transparent"};
  }
`;




const HeroSection = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 10%;
`;

const HeroText = styled.div`
  max-width: 50%;
`;

const Title = styled.h2`
  font-size: 64px;
  color: #2D2D2D;
  letter-spacing: -5%;
  line-height: 115%;
  font-family: "Aeonik TRIAL";
  font-weight: 700;
`;

const Highlight = styled.span`
  background-color: #FFAC50; /* Orange background */
    color: white; /* White text */
    font-weight: bold; /* Bold text */
    font-size: 3rem; /* Adjust font size */
    width: 550px; /* Fixed width */
    height: 97px; /* Fixed height */
    border-radius: 42px; /* Rounded corners */
    padding: 12px 37px; /* Padding */
    display: flex; /* Flexbox for centering */
    justify-content: center; /* Center text horizontally */
    align-items: center; /* Center text vertically */
    text-transform: uppercase; /* Uppercase text */
    border: none; /* No border */
`;

const ImageContainer = styled.div`
  max-width: 45%;
`;

const Section = styled.section`
  padding: 50px 10%;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const FeatureCard = styled(motion.div)`
  background: #f9f9f9;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ServicesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ServiceCard = styled.div`
  background: #f9f9f9;
  padding: 20px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const features = [
  {
    imgSrc: "/images/Group1.png",
    title: "Automated Data Collection",
    description:
      "Our system automates carbon data collection, saving time, reducing errors, and ensuring accurate sustainability reporting.",
  },
  {
    imgSrc: "/images/Group23.png",
    title: "Monitoring & Reporting",
    description:
      "Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting.",
  },
  {
    imgSrc: "/images/Group23.png",
    title: "Monitoring & Reporting",
    description:
      "Streamline your certification process with our simplified, automated solution, reducing complexity and ensuring faster compliance.",
  },
  {
    imgSrc: "/images/Group4.png",
    title: "Simplified Certification Process",
    description:
      "Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making.",
  },
  {
    imgSrc: "/images/Group56.png",
    title: "AI-Driven Insights",
    description:
      "Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting.",
  },
  {
    imgSrc: "/images/Group56.png",
    title: "AI-Driven Insights",
    description:
      "Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making.",
  },
];



export default function Home() {
  return (
    <Container>
      <GlobalStyle />
      {/* Navbar */}
      <Navbar>
      <h1 className="text-[#2D2D2D] font-bold flex items-center gap-2 text-dm-sans">
  <img src="/images/clogo.png" alt="Eco Reporting" width="50px" />
  Carboncrunch
</h1>
        <NavLinks>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#blog">Blog</NavLink>
          <NavLink href="#about">About Us</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <Button variant="login">Login</Button>
          <Button variant="demo">Book Demo</Button>
        </NavLinks>
      </Navbar>
      

      {/* Hero Section */}
      <HeroSection>
        <HeroText>
        <div className="flex flex-col items-start space-y-3">
      {/* Black Button with Emoji */}
      <div className="flex items-center bg-black text-white px-5 py-2 rounded-full shadow-md text-sm font-medium">
        <span className="mr-2">👋</span> Let’s Save our Environment
      </div>
      </div>
        <Title>
  Optimize your eco reporting with <br />
  
</Title>
<Highlight>CARBON CRUNCH</Highlight>
          <div className="text-[24px] font-normal text-[#333] font-family-DM Sans"><span className="font-bold text-[#18A300]">95% </span>
           Accurate Carbon Calculations Trusted by Industry Leaders</div>
          <div className="mt-6 flex space-x-4">
          <Button variant="calculator">Free Calculator</Button>
          <Button variant="demo">Book Demo</Button>
          </div>
        </HeroText>
        <ImageContainer>
          <img src="/images/image1.png" alt="Eco Reporting" width="100%" />
        </ImageContainer>
      </HeroSection>
      <div className="mt-32 flex space-x-30"></div>
      <div className="flex gap-6 justify-center">
      {/* Card 1 */}
      <div className="bg-[#2D2D2D] text-white px-8 py-6 w-[300px] h-[120px] rounded-xl text-left">
        <span className="text-4xl font-bold">98%</span>
        <p className="font-['DM_Sans'] font-normal text-[16px] leading-[100%] tracking-[1%] capitalize mt-2">
          Of CEOs Agree Sustainability Is Their Responsibility
        </p>
      </div>

       {/* Card 2 */}
       <div className="bg-[#18A300] text-black px-8 py-6 w-[300px] h-[120px] rounded-xl text-left">
        <span className="text-4xl font-bold">3X</span>
        <p className="font-['DM_Sans'] font-normal text-[16px] leading-[100%] tracking-[1%] capitalize mt-2">
          ESG High Performers Deliver A Higher Total Shareholder Return
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-[#F5F5F5] text-green-700 px-8 py-6 w-[300px] h-[120px] rounded-xl text-left">
        <span className="text-4xl font-bold">37%</span>
        <p className="font-['DM_Sans'] font-normal text-[16px] leading-[100%] tracking-[1%] capitalize mt-2">
          Of The World's Largest Companies Have A Public Net Zero Target.
          Nearly All Are Off Track
        </p>
      </div>

      {/* Card 4 */}
<div className="bg-[#2D2D2D] text-white px-8 py-6 w-[300px] h-[120px] rounded-xl text-left relative">
  <span className="text-4xl font-bold absolute top-4 right-8">18%</span>
  <p className="font-['DM_Sans'] font-normal text-[16px] leading-[100%] tracking-[1%] capitalize mt-10 text-right">
    Of Companies Are Cutting Emissions Fast Enough To Reach Net Zero By 2050
  </p>
</div>
    </div>

    <div className="mt-32 flex space-x-30"></div>
      {/* Features Section */}
      <Section>
      <div className="font-sans">
      <p className="text-[#239C0C] text-sm font-DM sans uppercase ml-6">Features</p>
      <div className="mt-6 flex space-x-4"></div>
      <h1 className="text-4xl font-bold">
        <span className="text-[#FEAB4F] font-extrabold">Why</span>{" "}
        <span className="text-[#2D2D2D] font-extrabold text-Aeonik TRIAL">Carbon Crunch?</span>
      </h1>
    </div>
    <div className="mt-12 flex space-x-8"></div>
    <div className="bg-gray-100 p-8 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-start space-y-4"
          >
            {/* Image Logo from Public Folder */}
            <img src={feature.imgSrc} alt={feature.title} className="w-12 h-12 bg-green-200 p-3 rounded-full" />
            <h3 className="text-[#222222] font-bold text-[21px] text-Aeonik TRIAL">{feature.title}</h3>
            <p className="text-[#2D2D2D] text-[14px] text-DM sans">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
      </Section>

      {/* Services Section */}
      <Section>
      <div className="relative min-h-screen flex items-center px-10">
      {/* Left Side - Image */}
      <div className="w-2/5 flex justify-center">
        <img
          src="/images/image2.png"
          alt="Eco Computer"
          className="w-[100%] object-cover"
        />
      </div>

      {/* Right Side - Wider Content Box */}
      <div className="w-3/5 relative">
        <div className=" p-[35px_24px_35px_24px] rounded-3xl  space-y-[26px]">
          {/* Heading Section */}
          <h3 className="text-green-600 text-sm font-semibold">OUR SERVICES</h3>
          <h2 className="text-5xl font-bold mt-2 text-[#2D2D2D]">
            What do <span className="text-[#FEAB4F]">we do</span>?
          </h2>

          {/* Extra space after heading */}
          <div className="space-y-[26px]">
            {[1, 2].map((_, index) => (
              <div
                key={index}
                className="bg-[#F5F5F8] p-[35px_24px_35px_24px] rounded-3xl shadow-md space-y-4"
              >
                <h3 className="text-[48px] font-bold text-[#2D2D2D] text-Aeonik TRIAL">GHG Accounting</h3>
                <p className="text-[16px] text-lg text-[#2D2D2D] text-DM sans">
                  We provide GHG accounting services, measuring and reporting
                  Scope 1, 2, and 3 emissions. Our process ensures compliance
                  and helps organizations track and reduce their carbon
                  footprint.
                </p>
                <button className="bg-[#D6FFD0] text-[#28B30E] px-6 py-3 rounded-md text-[16px]">
                  See More Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Button */}
      <div className="absolute bottom-6 left-7/10 transform -translate-x-1/2">
        <div className="bg-[#FEF6EC] p-4 rounded-full shadow-md flex items-center justify-center">
          <img src="/images/logo.png" alt="Logo" className="w-6 h-6" />
        </div>
      </div>
    </div>
      </Section>
    </Container>
  );
}
