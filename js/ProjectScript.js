const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get("id");

fetch("./projects.json")
  .then((response) => response.json())
  .then((projects) => {
    const project = projects[projectId];

    if (project) {
      document.getElementById("project-title").textContent = project.title;
      document.getElementById("project-banner").src = project.banner;

      const tagList = document.getElementById("project-tags");
      tagList.innerHTML = ""; // Clear previous tags
      project.tags.forEach((tag) => {
        const li = document.createElement("li");
        li.textContent = tag;
        tagList.appendChild(li);
      });

      const mediaContainer = document.getElementById("project-media");
      const mediaElement = document.getElementById("media");
      mediaContainer.innerHTML = "";
      if (project.media.includes("youtube")) {
        const iframe = document.createElement("iframe");
        iframe.src = project.media;
        iframe.width = "560";
        iframe.height = "315";
        iframe.frameBorder = "0";
        iframe.allowFullscreen = true;
        mediaContainer.appendChild(iframe);
      } else {
        const img = document.createElement("img");
        img.src = project.media;
        img.style.maxWidth = "100%";
        mediaContainer.appendChild(img);
      }

      document.getElementById("project-overview").textContent =
        project.overview;
      document.getElementById("project-myrole").textContent = project.myrole;

      const linkList = document.getElementById("project-links");
      linkList.innerHTML = "";
      project.linkname.forEach((linkName, index) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = project.link[index];
        a.textContent = "click here";
        a.target = "_blank";

        li.textContent = linkName + ": ";
        li.appendChild(a);
        linkList.appendChild(li);
      });
    } else {
      document.getElementById("project-content").innerHTML =
        "<p>Project not found!</p>";
    }
  })
  .catch((error) => {
    console.error("Error fetching the project data:", error);
    document.getElementById("project-content").innerHTML =
      "<p>Error loading project details!</p>";
  });
