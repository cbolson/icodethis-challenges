tailwind.config = {
  theme: {
    screens: {
      xs: "400px",
      sm: "600px",
      md: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: {
          100: "hsl(178, 30%, 90%)",
          200: "hsl(178, 30%, 80%)",
          300: "hsl(178, 30%, 70%)",
          400: "hsl(178, 30%, 60%)",
          500: "hsl(178, 30%, 50%)",
          600: "hsl(178, 30%, 40%)",
          700: "hsl(178, 30%, 30%)",
          800: "hsl(178, 30%, 20%)",
          900: "hsl(178, 30%, 10%)",
        },
      },
    },
  },
};

// MASK BOXES (could add direcrtly to html but this is quicker)
const mask = document.querySelector("#mask");
const CELLS = 25;
let delay = 10;
let time = 0;
for (let i = 0; i < CELLS; i++) {
  // const random = getRndInteger(10, 800);
  const box = document.createElement("div");
  box.classList.add(`delay-[${time}ms]`);
  mask.append(box);
  time = time + delay;
}
// UTILITY - get random number
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const REVIEWS = [
  {
    id: 6,
    name: "Pedro",
    role: "Front End",
    review: `Me gusta la organización por equipos de trabajo y la creación de tableros, cada una con sus tareas y actividades, tiene plantillas que ayudan mucho sobre todo al inicio, ya que te da ideas de cómo organizar los tableros y para qué y cómo usarlos. 
        `,
  },
  {
    id: 0,
    name: "pepe",
    role: "Designer",
    review: `What I l'ke a lot about Trello is that it is really easy to use.Performance is optimal, and the huge amount of free features that it provides make this application an awesome project manager.I used it both for personal and professional projects and it always helped me organise my tasks in a very intuitive and easy way. 
        `,
  },
  {
    id: 2,
    name: "David",
    role: "Full Stack",
    review: `I love how I can create a virtual Kanban board to share with my team and keep everyone up to speed on our projects.This is especially helpful with a remote workforce.Wouldn't have been able to be as successful during the pandemic without this! You can also pick it up pretty easy without any training. 
        `,
  },
  {
    id: 3,
    name: "James",
    role: "UI/UX",
    review: `It's very easy to customize and categorise lists for new projects/task categories.
        `,
  },
  {
    id: 13,
    name: "Kate",
    role: "Web developer",
    review: `The UI is very simplistic. It's really easy to learn how to use it and create different boards and workspaces.
        It also works very well to keep notes and passwords 
        `,
  },
  {
    id: 4,
    name: "Gordon",
    role: "Project manajment",
    review: `Trello's ease of use is really impressive. All the dashboards are intuitive, so even an inexperienced user can quickly get their bearings and start creating visualizations. 
        `,
  },
  {
    id: 10,
    name: "Simon",
    role: "programmer",
    review: `The drag-and-drop features make it easy to move boards and cards and keep the project on track.`,
  },
  {
    id: 11,
    name: "Elizabeth",
    role: "Designer",
    review: `Personally, I like that Trello allows you to customize boards by changing labels, background color, etc. to quickly track progress. Of particular note is Butler, the Trello bot that allows you to create and customize automated actions such as moving boards and assigning tasks, which saves time and increases productivity.`,
  },
  {
    id: 5,
    name: "Peter",
    role: "CEO",
    review: `Trello uses board layout which makes it easy for what we need to do and assign members responsible for that task.
        Team members can work on card simultaneously.
        Integrates with many other tools and allows to connect it with existing software.
        Great free plan which is helpful for a small number of members. 
        `,
  },
];

// add reviews
const tplCard = document.querySelector("#tpl-card");
const listCards = document.querySelector("#list-cards");
const dots = document.querySelector("#list-dots");

REVIEWS.forEach((r, idx) => {
  const item = tplCard.content.cloneNode(true);
  item.querySelector("blockquote").innerText = r.review;
  item.querySelector("[review-name]").innerText = r.name;
  item.querySelector("[review-role]").innerText = r.role;
  if (idx === 0) {
    /// remove translate on first card
    item.querySelector("div").classList.remove("translate-y-[400px]");
    item.querySelector(".details").classList.remove("translate-y-[100px]");
  }
  listCards.append(item);
  // dots
  const dot = document.createElement("span");
  dot.classList.add("transition-all");
  if (idx === 0) dot.classList.add("!bg-primary-700", "scale-150");
  dots.append(dot);
});

// SLIDER
function sliderInit() {
  let counter = 0;
  const slider = document.querySelector("#slider");
  const slides = slider.querySelectorAll(".card");
  //console.log(slides);
  const totalSlides = REVIEWS.length;

  // width of each card + flex gap
  const WIDTH = slider.querySelector(".card").clientWidth + 16;

  const sliderButtons = document.querySelectorAll("[data-slide]");
  const dots = document.querySelectorAll("#list-dots span");

  sliderButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (btn.getAttribute("data-slide") === "prev") {
        counter--;
      } else {
        counter++;
      }
      // reset counter at limits
      if (counter === totalSlides) counter = 0;
      else if (counter < 0) counter = totalSlides - 1;

      // slide out all cards
      slides.forEach((d) => {
        d.classList.add("translate-y-[400px]");
        d.querySelector(".details").classList.add("translate-y-[100px]");
      });
      // slide in current card
      slides[counter].classList.remove("translate-y-[400px]");
      slides[counter]
        .querySelector(".details")
        .classList.remove("translate-y-[100px]");

      // set bg on dots
      dots.forEach((d) => d.classList.remove("!bg-primary-700", "scale-150"));
      dots[counter].classList.add("!bg-primary-700", "scale-150");
    });
  });

  // add card transitions after loaded
  setTimeout(() => {
    listCards.classList.add("[&>.card]:transition", "[&>.card]:duration-1000");
  }, 500);
}

sliderInit();
