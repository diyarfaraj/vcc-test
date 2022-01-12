import React from "react";
import { Link, useNavigate, useParams, useMatch } from "react-router-dom";

const CarDetailComponent = () => {
  const { id } = useParams();
  const match = useMatch("car/:item");
  const history = useNavigate();

  return (
    <div>
      <h6>Campaign Detail</h6>
      <p>You have selected Campaign - {id}</p>
      <button>
        <Link to={`${match}/messages`}>Goto Messages</Link>
      </button>
      <button>
        <Link to={`${match}/contacts`}>Goto Contacts</Link>
      </button>
      <button onClick={useNavigate}>Go Back</button>
    </div>
  );
};

export default CarDetailComponent;
