fetch(
  "https://15f6a9ed-1503-4a7e-b90d-9366429f1abf-00-367vn111fmtcr.janeway.replit.dev/api/auth/user",
  {
    credentials: "include"
  }
)
  .then((res) => res.json())
  .then((data) => {
    console.log("User Info:", data);
    document.getElementById("user-email").innerText = data.email;
  })
  .catch((err) => console.error("User fetch failed", err));
