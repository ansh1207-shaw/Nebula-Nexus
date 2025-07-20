// Dashboard club stats
document.addEventListener("DOMContentLoaded", () => {
  const stats = document.getElementById("clubStats");
  if (stats) {
    stats.innerHTML = "<p>Active Clubs: 12 | Total Members: 340</p>";
  }

  const events = document.getElementById("eventList");
  if (events) {
    events.innerHTML = `
      <li>Coding Hackathon – Aug 2</li>
      <li>Debate Tournament – Aug 10</li>
      <li>Art Workshop – Aug 18</li>
    `;
  }
});