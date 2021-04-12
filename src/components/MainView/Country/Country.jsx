import React from "react";
import * as s from "./Country.styles";

const Country = (props) => {
  return (
    <s.CountryContainer>
      {/* <s.CountryImage></s.CountryImage> */}
      <s.CountryDesecription>
        {props.match.params.country}
      </s.CountryDesecription>
    </s.CountryContainer>
  );
};

export default Country;
