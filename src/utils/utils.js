export const fetchArticlesData = (article_id) => {
  if (article_id) {
    return fetch(
      `https://chris-reddit.onrender.com/api/articles/${article_id}`
    ).then((res) => {
      return res.json();
    });
  } else {
    return fetch("https://chris-reddit.onrender.com/api/articles").then(
      (res) => {
        return res.json();
      }
    );
  }
};

export const fetchCommentsData = (article_id) => {
  return fetch(
    `https://chris-reddit.onrender.com/api/articles/${article_id}/comments`
  ).then((res) => {
    return res.json();
  });
};

// isUpvote is a boolean parameter passed via the votes component
// It's job is to determine whether to increment or decrement the votes
export const patchVotes = (
  article_id,
  upVote,
  downVote,
  displayedVotes,
  setDisplayedVotes,
  isUpVote
) => {
  const patchObject = {};
  if (isUpVote && !upVote) {
    setDisplayedVotes(displayedVotes + 1);
    patchObject.inc_votes = 1;
  } else if (isUpVote && upVote) {
    setDisplayedVotes(displayedVotes - 1);
    patchObject.inc_votes = -1;
  } else if (!isUpVote && !downVote) {
    setDisplayedVotes(displayedVotes - 1);
    patchObject.inc_votes = -1;
  } else if (!isUpVote && downVote) {
    setDisplayedVotes(displayedVotes + 1);
    patchObject.inc_votes = 1;
  }

  fetch(`https://chris-reddit.onrender.com/api/articles/${article_id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(patchObject),
  }).then((res) => {
    return res.json();
  });
};

export const fetchAllUsers = () => {
  return fetch(`https://chris-reddit.onrender.com/api/users`).then((res) => {
    return res.json();
  });
};

