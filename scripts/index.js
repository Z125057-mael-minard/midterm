const projects = document.getElementsByClassName("project");
const featuredProjectImage = document.getElementById("featured-project-img");
const featuredProjectLink = document.getElementById("featured-project-link");
const timelineHolder = document.getElementById("timeline-holder");
const timeline = document.getElementById("timeline");
const timelineElements = document.getElementsByClassName("timeline-element-container");

// featured project
let project_index = Math.floor(Math.random() * (projects.length + 1));
let project = projects.item(project_index);
let project_image = project.querySelectorAll("img").item(0);
featuredProjectLink.href = "#"+project.id;
featuredProjectImage.src = project_image.src;


// trigger timeline animations only when in view
const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      timeline.classList.add('in-view');
      for (let i=0; i<timelineElements.length; i++){
        timelineElements.item(i).classList.add('in-view');
      }
      timelineObserver.unobserve(entry.target);
    }
  });
});
timelineObserver.observe(timelineHolder);

