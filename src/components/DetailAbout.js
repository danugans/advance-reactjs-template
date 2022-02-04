// import package for property types
import PropTypes from "prop-types";

// create component here
import React from "react";

// define property type for this component here
const DetailAbout = (props) => {
  return (
    <>
      <h1>title: {props.title}</h1>
      <p>summary: {props.summary}</p>
      <p>total guests: {props.total}</p>
    </>
  );
};

DetailAbout.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  total: PropTypes.string,
};
