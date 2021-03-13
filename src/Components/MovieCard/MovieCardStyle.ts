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
`;

export const MoviePoster = styled.img`
  height: 80%;
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
