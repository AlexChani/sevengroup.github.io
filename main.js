let currentIndex = 0;
let autoScrollInterval;

// Function to change slides based on direction (1 for next, -1 for previous)
function moveSlide(direction) {
    const images = document.querySelectorAll('.slideshow-images img');
    const totalImages = images.length;

    // Move the index based on direction
    currentIndex += direction;

    // Wrap around the index if it goes out of bounds
    if (currentIndex < 0) {
        currentIndex = totalImages - 1; // Go to the last image if it goes below 0
    } else if (currentIndex >= totalImages) {
        currentIndex = 0; // Go to the first image if it exceeds the total
    }

    // Calculate the offset and apply the slide transition
    const offset = -currentIndex * 100;
    document.querySelector('.slideshow-images').style.transition = 'transform 0.5s ease'; // Smooth transition
    document.querySelector('.slideshow-images').style.transform = `translateX(${offset}%)`;

    // Reset auto-scroll after a manual change
    resetAutoScroll();
}

// Start the auto-scroll interval
function startAutoScroll() {
    if (!autoScrollInterval) { // Ensure auto-scroll is started only once
        autoScrollInterval = setInterval(function() {
            moveSlide(1); // Automatically move to the next slide (forward direction)
        }, 3000); // 3 seconds for auto-scroll
    }
}

// Stop the auto-scroll interval
function stopAutoScroll() {
    clearInterval(autoScrollInterval);
    autoScrollInterval = null;
}

// Reset the auto-scroll
function resetAutoScroll() {
    stopAutoScroll();  // Stop the current interval
    startAutoScroll(); // Restart auto-scroll immediately
}

// Pause auto-scroll when the user hovers over a picture
// function pauseAutoScrollOnHover() {
//     const images = document.querySelectorAll('.slideshow-images img');
//     images.forEach(img => {
//         img.addEventListener('mouseenter', stopAutoScroll); // Stop auto-scroll when mouse enters
//         img.addEventListener('mouseleave', startAutoScroll); // Restart auto-scroll when mouse leaves
//     });
// }

// Start auto-scroll when the page loads
startAutoScroll();

// // Apply hover functionality
// pauseAutoScrollOnHover();















//headerscroll

document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("myheader");
  
    if (!header) return; // Exit if header element isn't found
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
  });
  









//projects


document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project');
    const projectsElement = document.querySelector('#projects');
    const projectTitle = document.querySelector('#projectstitle');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === projectsElement && entry.isIntersecting) {
          // Show the project title with a delay
          setTimeout(() => {
            projectTitle.classList.add('visible');
          }, 0);
  
          // Show the project cards with a delay based on order
          projectCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('visible');
            }, index * 150); // Delay based on card order
          });
        }
      });
    }, {
      threshold: 0.5
    });
  
    observer.observe(projectsElement);
  });
  
  color = "cf61417e-02c8-4aa4-8c74-376ee6c66394"

//abt us

document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.aboutusobj');
    const projectsElement = document.querySelector('#aboutus');
    const projectsTitle = document.querySelector('#aboutustitle');
  
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.target === projectsElement && entry.isIntersecting) {
            // Show the project title with a delay
            setTimeout(() => {
              projectTitle.classList.add('visible');
            }, 0);
    
            // Show the project cards with a delay based on order
            projectCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('visible');
              }, index * 150); // Delay based on card order
            });
          }
        });
      }, {
        threshold: 0.5
      });
  
    observer.observe(projectsElement);
  });



  document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.infotext');
    const projectsElement = document.querySelector('#info');
  
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.target === projectsElement && entry.isIntersecting) {
            // Show the project title with a delay
            setTimeout(() => {
              projectTitle.classList.add('visible');
            }, 0);
    
            // Show the project cards with a delay based on order
            projectCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('visible');
              }, index * 150); // Delay based on card order
            });
          }
        });
      }, {
        threshold: 0.5
      });
  
    observer.observe(projectsElement);
  });





//   form







  document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.contactinputs');
    const projectsElement = document.querySelector('#contactform');
    const projectTitle = document.querySelector('#contactstitle');
    const projectOrTitle = document.querySelector('#orstitle');
    const form = document.querySelector('form');



    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.target === projectsElement && entry.isIntersecting) {
            // Show the project title with a delay
            document.getElementById("s").value = color;
            setTimeout(() => {
              projectTitle.classList.add('visible');
              projectOrTitle.classList.add('visible');
              form.classList.add('visible');
            }, 0);
    
            // Show the project cards with a delay based on order
            projectCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('visible');
              }, index * 150); // Delay based on card order
            });
          }
        });
      }, {
        threshold: 0.5
      });
  
    observer.observe(projectsElement);
  });
