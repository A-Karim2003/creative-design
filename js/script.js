"use strict";

const teamMemberCard = document.querySelectorAll(".team-member-card");

teamMemberCard.forEach((card) => {
  card.addEventListener("click", (e) => {
    const storyBtn = e.target.closest(".story-btn");
    if (!storyBtn) return;

    const story = storyBtn.closest(".team-member-card").querySelector(".story");

    if (e.target === storyBtn) {
      storyBtn.classList.toggle("rotate");
      story.classList.toggle("active");
    }
  });
});
