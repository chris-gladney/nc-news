import { useEffect, useState } from "react";
import { patchVotes } from "../utils/utils";

function Votes({
  votes,
  article_id,
  upVote,
  downVote,
  setDownVote,
  setUpVote,
}) {
  const [displayedVotes, setDisplayedVotes] = useState(votes);

  useEffect(() => {}, [displayedVotes]);

  return (
    <>
      <div className="votes">
        <h5>Votes</h5>
        <p>{displayedVotes}</p>
      </div>
      <div className="votes-container">
        <p
          className={`vote ${upVote ? "clicked-vote" : "unclicked-vote"}`}
          onClick={() => {
            patchVotes(
              article_id,
              upVote,
              downVote,
              displayedVotes,
              setDisplayedVotes,
              true
            );
            if (upVote === false) {
              setUpVote(true);
              setDownVote(false);
            } else if (upVote === true) {
              setUpVote(false);
              setDownVote(false);
            }
          }}
        >
          👍
        </p>

        <p
          className={`vote ${downVote ? "clicked-vote" : "unclicked-vote"}`}
          onClick={() => {
            patchVotes(
              article_id,
              upVote,
              downVote,
              displayedVotes,
              setDisplayedVotes,
              false
            );
            if (downVote === false) {
              setUpVote(false);
              setDownVote(true);
            } else if (downVote === true) {
              setUpVote(false);
              setDownVote(false);
            }
          }}
        >
          👎
        </p>
      </div>
    </>
  );
}

export default Votes;
