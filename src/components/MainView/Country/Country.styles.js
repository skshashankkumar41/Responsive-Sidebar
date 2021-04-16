import styled from "@emotion/styled";

export const CountryContainer = styled.div`
  width: 80%;
  padding: 100px;
  align-items: center;
`;

export const CountryImage = styled.img`
  width: 50%;
  height: 200px;
  background-image: ${(p) => p.img};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const CountryDesecription = styled.h1``;
