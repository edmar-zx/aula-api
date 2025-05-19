import { styled} from "styled-components";

export const Card = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    transition: transform 0.2s ease;

    &:hover {
        transform: scale(1.02);
    }
`
export const Image = styled.img`
    width: 100%;
    border-radius: 8px;
`
export const Title = styled.h2`
    margin: 0.5rem 0;
    font-size: 1.2rem;
`
export const Info = styled.p`
    Color: #555;
    font-size: 0.9rem;
`