import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 9rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color:rgb(85, 132, 163);
  text-shadow: 1px 1px 0 #222;
`;

export const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const CardWrapper = styled.div`
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  border-radius: 12px;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }
`;

export const SpaceSeeMore = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const ButtonSeeMore = styled.button`
  background-color: rgb(85, 132, 163);
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  min-width: 120px;
  transition: background-color 0.3s ease;

  &:disabled {
    background-color: #999;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: rgba(85, 132, 163, 0.85);
  }
`;