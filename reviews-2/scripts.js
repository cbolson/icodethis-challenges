const votes = [
  {
    id: 1,
    votes: 232,
  },
  {
    id: 2,
    votes: 798,
  },
  {
    id: 3,
    votes: 1466,
  },
  {
    id: 4,
    votes: 2532,
  },
  {
    id: 5,
    votes: 5576,
  },
];
const tplVotes = document.querySelector("#tpl-votes");
const listVotes = document.querySelector("#list-votes");
const elTotalVotes = document.querySelector("#total-votes");
const btnAdd = document.querySelector("#btn-add");
const panelAdd = document.querySelector("#panel-all");

let totalVotes = votes.reduce((x, y) => {
  return x + y.votes;
}, 0);

(function renderTotalVotes() {
  elTotalVotes.innerText = new Intl.NumberFormat().format(totalVotes);
})();

(function renderVotes() {
  // clear prev content
  listVotes.innerHTML = "";
  // reverse order
  votes.sort().reverse();

  votes.forEach((vote, idx) => {
    // convert votes to percent
    const percent = percentage(vote.votes, totalVotes);
    const item = tplVotes.content.cloneNode(true);
    // console.log(percent);
    //item.querySelector("[votes-bar]").classList.add(`w-[${percent}%]`);
    const bar = item.querySelector("[votes-bar]");

    bar.classList.add(`w-[1%]`);
    setTimeout(() => {
      bar.classList.add(`w-[${percent}%]`);
    }, 500);

    item.querySelector("[votes-count]").innerText =
      new Intl.NumberFormat().format(vote.votes);
    let txtVotes = "stars";
    if (vote.id === 1) txtVotes = "star";
    item.querySelector("[votes-stars]").innerText = `${vote.id} ${txtVotes}`;
    listVotes.append(item);
  });
})();

function percentage(val, total) {
  return (100 * val) / total;
}
/*
function average(numbers) {
    // Calculate the sum of the numbers in the array
    let sum = numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);

    // Divide the sum by the total number of elements in the array
    let avg = sum / numbers.length;

    // Return the average
    return avg;
}
*/
let addPanelVisible = false;
btnAdd.addEventListener("click", () => {
  const icon = btnAdd.querySelector("span");

  if (addPanelVisible) {
    panelAdd.classList.remove("h-64");
    icon.classList.add("scale-0");
    icon.innerText = "add_circle";
    setTimeout(() => {
      icon.classList.remove("scale-0");
    }, 150);
  } else {
    panelAdd.classList.add("h-64");
    icon.classList.add("scale-0");
    icon.innerText = "cancel";
    setTimeout(() => {
      icon.classList.remove("scale-0");
    }, 150);
  }
  addPanelVisible = !addPanelVisible;
});

// stars
const stars = document.querySelectorAll("[data-stars]");

stars.forEach((star) => {
  const rating = star.value;

  star.addEventListener("change", (e) => {
    stars.forEach((s, i) => {
      if (i < rating)
        stars[i].nextElementSibling.classList.add("material-fill-1");
      else s.nextElementSibling.classList.remove("material-fill-1");
    });
  });
});
