import  styled  from "styled-components";

export const Card = styled.div`
  background-color: rgba(241, 239, 239, 0.77);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 1rem;

  display: flex;
  flex-direction: column;
  height: 100%;   // para preencher o espaço do CardWrapper
`;

export const Image = styled.img`
  width: 100%;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  padding-bottom: 0.5rem;
  flex-shrink: 0;  // garante que a imagem não diminua
`;

export const Title = styled.h2`
  margin: 0.5rem 0;
  font-size: 1.4rem;
  text-align: center;
  color: rgb(85, 132, 163);

  // permitir que o texto quebre linha sem afetar a altura do card no grid
  word-wrap: break-word;
  word-break: break-word;
`;
export const Info = styled.p`
    color: #555;
    font-size: 1rem;
    text-align: center;
`