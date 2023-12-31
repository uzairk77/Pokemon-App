import React from "react";
import { Link } from "next/link";
import { useRouter } from "next/router";

const Card = (props) => {
  const { id, title, url } = props;
  const router = useRouter();

  const onClick = () => {
    router.push(`/pokemon/${id}/`);
  };

  return (
    <div>
      <div id="card" className="card my-3">
        <img
          src="https://cdn.icon-icons.com/icons2/851/PNG/512/Ultra_Ball_icon-icons.com_67500.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            Pokemon Title: <span style={{ color: "red" }}>{title}</span>
          </h5>
          <button
            type="button"
            className="btn btn-primary my-3 "
            onClick={onClick}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
