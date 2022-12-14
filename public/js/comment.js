async function commentFormHandler(event) {
  event.preventDefault();

  const comment_blog = document
    .querySelector('textarea[name="comment-body"]')
    .value.trim();

  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/") / length - 1
  ];

  if (comment_blog) {
    const response = await fetch("/api/comments", {
      method: "Post",
      body: JSON.stringify({
        post_id,
        comment_blog,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);
