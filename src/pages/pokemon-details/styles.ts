import { Link } from "react-router-dom";
import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  cursor: pointer;

  @media (max-width: 768px) {
    margin: 0.75rem;
  }

  @media (max-width: 480px) {
    margin: 0.5rem;
  }
`;

export const IconPokemonDetails = styled.img`
  width: 300px;
  height: auto;
  
  @media (max-width: 768px) {
    width: 200px;
  }
  @media (max-width: 480px) {
    width: 150px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

export const InfoBox = styled.div`
  background-color: #f6f8fc;
  padding: 20px;
  margin-top: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const StatBar = styled.div`
  background-color: #ddd;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 8px;
`;

export const StatFill = styled.div<{ width: number }>`
  width: ${({ width }) => width}%;
  background-color: #4caf50;
  height: 16px;

  @media (max-width: 480px) {
    height: 14px;
  }
`;

export const VariationBox = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: center;

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

export const VariationItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; 
  width: 140px;    
  padding: 12px;
  border-radius: 12px;
  background-color: #f0f0f0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  text-align: center;

  img {
    margin-bottom: 8px;
    max-width: 80px;
    max-height: 80px;
    object-fit: contain;
  }

  p {
    font-weight: 500;
    color:rgb(0, 0, 0);
    text-transform: capitalize;
    font-size: 14px;
    line-height: 1.2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
  }
`;


export const MovesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
  justify-content: center;

  @media (max-width: 480px) {
    gap: 6px;
  }
`;

export const MoveCard = styled.div`
  padding: 6px 14px;
  border-radius: 999px;
  background-color: #e9ecef;
  font-size: 0.85rem;
  font-weight: 500;
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  color: #333;
  cursor: default;
  transition: background-color 0.2s;

  &:hover {
    background-color: #d6d8db;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 5px 12px;
  }
`;

export const MoveTitle = styled.h4`
  font-weight: 700;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  margin: 0;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    opacity: 0.9;
    transform: scale(1.02);
    transition: all 0.2s ease;
  }
`;