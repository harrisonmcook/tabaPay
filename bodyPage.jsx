import React from "react";

function BodyPage(props) {
  return (
    <>
      <div class="card" style={{ width: "18rem" }}>
        <img src={props.img} className="card-img-top" alt="PICTURE" />
        <div className="card-body">
          <h5 className="card-title">{props.pageTitle}</h5>
        </div>
      </div>
    </>
  );
}

export default BodyPage;
