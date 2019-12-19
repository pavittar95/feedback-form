import React, { useState, useEffect } from "react";
import { Emotes, defaultMessage } from "../../constants";

export default function Feedback({ match }) {
  const [userFeedback, setUserFeedback] = useState({});
  useEffect(() => {
    const emote = Emotes.find(x => x.id === parseInt(match.params.id, 10));
    emote && setUserFeedback(emote);
  }, [match.params.id]);

  return (
    <div className="row">
      <div className="col-12">
        <div className="d-flex flex-column align-items-center justify-content-center feedback-response">
          <img
            src={userFeedback.img}
            width={userFeedback.imgDimension}
            height={userFeedback.imgDimension}
            alt=""
          />
          <p className={`response mb-0 ${userFeedback.cls || ""}`}>
            {userFeedback.msg}
          </p>
          <p className={`common ${userFeedback.cls || ""}`}>{defaultMessage}</p>
        </div>
      </div>
    </div>
  );
}
