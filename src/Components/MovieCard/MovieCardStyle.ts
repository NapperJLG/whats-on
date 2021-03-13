import styled from "styled-components";

const setRatingColour = (rating: number) => {
  if (rating >= 7) {
    return "green";
  } else if (rating >= 4 && rating < 7) {
    return "#edc411";
  } else {
    return "red";
  }
};

export const MovieCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 500px;
  width: 270px;
  position: relative;
`;

export const MoviePoster = styled.img`
  height: 80%;
`;

export const MovieDetailsOverlay = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 80%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: 0.5s ease;
  color: white;
  padding: 0 16px;
  &:hover {
    opacity: 0.9;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  height: 20%;
`;

export const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MovieRating = styled.div<{ rating: number }>`
  background-color: ${(props) => setRatingColour(props.rating)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  color: white;
`;
