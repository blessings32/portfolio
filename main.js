// ===== DOM Elements =====
let readMoreButton;
let aboutImage;
let projectElement = document.querySelector("#project");

// ===== About Section - Read More/Less Functionality =====
document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer section
  document.getElementById("year").textContent = new Date().getFullYear();

  readMoreButton = document.querySelector(".read-more");
  aboutImage = document.querySelector(".about-image");

  // Expand about section when "Read More" is clicked
  readMoreButton.addEventListener("click", () => {
    aboutImage.style.display = "none";
    let font = "18px";
    document.querySelector(".para0").style.width = "80%";
    document.querySelector(".para1").style.width = "80%";
    document.querySelector(".para2").style.width = "80%";
    document.querySelector(".para1").style.display = "block";
    document.querySelector(".para2").style.display = "block";
    document.querySelector(".para0").style.fontSize = font;
    document.querySelector(".para1").style.fontSize = font;
    document.querySelector(".para2").style.fontSize = font;
    readMoreButton.style.display = "none";
  });

  // Collapse about section when "Show Less" is clicked
  document.querySelector(".show-less").addEventListener("click", () => {
    aboutImage.style.display = "";
    document.querySelector(".para0").style.width = "";
    document.querySelector(".para1").style.display = "";
    document.querySelector(".para2").style.display = "";
    readMoreButton.style.display = "";
  });
});

// ===== Project Section - Toggle & Display =====
let mode = 0; // 0 = container visible, 1 = container hidden

// Toggle project container visibility
function projectContainerVisibility(state) {
  let projectContainer = document.querySelector(".project-container");
  try {
    if (state == 0) {
      projectContainer.style.display = "none";
      mode = 1;
    } else if (state == 1) {
      mode = 0;
      projectContainer.style.display = "";
    }
  } catch {
    return;
  }
}

// Handle "See More" and "See Less" clicks on project cards
projectElement.addEventListener("click", (el) => {
  let element = el.target;
  if (element.matches(".project-see-more")) {
    let target = element.closest(".project-see-more");
    let data = target.dataset.project;
    projectContainerVisibility(mode);
    projecter(data);
  } else if (element.matches(".project-see-less")) {
    let target = element.closest(".project-see-less");
    let data = target.dataset.project;
    projectContainerVisibility(mode);
    projecter(data, "hide");
  }
});

// Show or hide specific project description
function projecter(project, purpose = "view") {
  el = document.querySelector(`.${project}`);
  if (purpose == "view") {
    el.style.display = "block";
  } else if (purpose == "hide") {
    el.style.display = "none";
  }
}

// ===== Contact Form - Submit Handler =====
async function formHandler() {
  const responseMessage = document.getElementById("form-feedback");
  const form = document.forms.contact;
  const username = form.username.value;
  const phonenumber = form.phone.value || "N/A";
  const email = form.email.value;
  const subject = form.subject.value;
  const message = form.message.value;
  responseMessage.textContent = "sending...";

  // Prepare form data
  const data = {
    name: username,
    email: email,
    subject: subject,
    phone: phonenumber,
    message: message,
    access_key: "ff1eb4c3-e4d5-4515-83c5-164ebfef89ec",
  };
  console.log(data);
  // Send form data to backend
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (response.ok) {
      responseMessage.textContent = "Thank you! your message has been sent";
      form.reset();
    } else {
      console.log(responseData);
      responseMessage.textContent = "Something went wrong.";
    }
  } catch (err) {
    responseMessage.textContent = "A network error occured. please try again.";
  }
}

// ===== Scroll Animation - Intersection Observer =====
(function () {
  // Create Intersection Observer for scroll animations
  function createObserver() {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.06,
        rootMargin: "0px 0px -5% 0px",
      }
    );

    return observer;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const observer = createObserver();

    // Observe all elements with animate class
    document.querySelectorAll(".animate").forEach((el) => observer.observe(el));

    // Watch for dynamically added elements and observe them
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        for (const node of m.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;
          if (node.matches && node.matches(".animate")) observer.observe(node);
          node.querySelectorAll &&
            node
              .querySelectorAll(".animate")
              .forEach((el) => observer.observe(el));
        }
      }
    });

    mo.observe(document.body, { childList: true, subtree: true });

    // Fallback: show remaining animations after 6 seconds if they haven't appeared yet
    setTimeout(() => {
      document
        .querySelectorAll(".animate:not(.show)")
        .forEach((el) => el.classList.add("show"));
    }, 6000);
  });
})();
