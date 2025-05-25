import { Link } from "react-router-dom";
import styled from "styled-components";

interface NavBarProps {
  $scrollUp: boolean;
}

export const NavBar = styled.header<NavBarProps>`
  display: flex;
  align-items: center;
  background: linear-gradient(to right, #1f1c2c, #3a3a52);
  padding: 1rem 2rem;
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: transform 0.3s ease;
  transform: ${({ $scrollUp }) =>
    $scrollUp ? "translateY(0)" : "translateY(-100%)"};

  @media (max-width: 1024px) {
    padding: 0.85rem 1.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0.75rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.75rem;
  }
`;

export const Logo = styled.img`
  width: 80px;
  height: auto;
  margin-right: 1rem;

  @media (max-width: 1024px) {
    width: 70px;
  }

  @media (max-width: 768px) {
    width: 60px;
    margin-right: 0.75rem;
  }

  @media (max-width: 480px) {
    width: 50px;
    margin-right: 0.5rem;
  }
`;
export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  line-height: 0;
`;

export const NavTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 1px;

  @media (max-width: 1024px) {
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;;
    gap: 0.5rem;
    width: 80%;
  }

  @media (max-width: 480px) {
    gap: 0.4rem;
  }
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  flex: 1;
  max-width: 600px;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  @media (max-width: 1024px) {
    max-width: 500px;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 0.9rem;
    padding: 0.65rem 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 0.6rem 0.8rem;
  }
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #ffffff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:focus-visible {
    outline: 2px solid #0056b3;
  }

  @media (max-width: 1024px) {
    font-size: 0.95rem;
    padding: 0.7rem 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.65rem 1rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0.6rem 0.9rem;
    font-size: 0.85rem;
  }
`;
