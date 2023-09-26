const REVIEWS = [
  {
    name: "Alice Johnson",
    rating: 5,
    text: "<p>I recently purchased this product, and I must say it has exceeded my expectations in every way.</p><p>The build quality is outstanding, and it feels incredibly sturdy. It's also very user-friendly, which is a big plus for someone like me who isn't tech-savvy.</p><p>The performance is top-notch, and it has improved my daily workflow. This product has a sleek and modern design that complements any workspace.</p><p>I've been using it for a variety of tasks, from creative work to everyday office tasks, and it hasn't disappointed. The battery life is impressive, and I rarely have to worry about recharging it during the day.</p><p>The high-resolution display makes watching movies and working on detailed projects a joy. The sound quality is also fantastic, and I use it for video conferences regularly without any issues.</p><p>In conclusion, I'm highly satisfied with this purchase and would enthusiastically recommend it to others.</p>",
  },
  {
    name: "Bob Smith",
    rating: 3,
    text: "<p>I bought this product with high hopes, but I have to admit I'm a bit underwhelmed.</p><p>It's not a bad product by any means, but I expected more given the price. The build quality is decent, but I've noticed a few minor issues that have left me somewhat disappointed.</p><p>In terms of performance, it gets the job done for most tasks, but it's not as fast as I had hoped, especially when dealing with resource-intensive applications.</p><p>I believe there is room for improvement, and I hope future updates will address some of these issues.</p><p>On the positive side, the battery life is commendable, and it lasts throughout the day with regular use. The lightweight design makes it easy to carry around, and the keyboard is comfortable to type on.</p><p>While it may not have completely met my expectations, it's still a serviceable product.</p>",
  },
  {
    name: "Carol Davis",
    rating: 5,
    text: "<p>I can't express how much I love this product! It's absolutely perfect in every way.</p><p>From the moment I started using it, I knew I had made the right choice. The build quality is exceptional, and it feels like a premium item.</p><p>The performance is lightning-fast, and it has significantly improved my productivity. This product has become an essential part of my daily life, whether I'm working on demanding projects, streaming movies, or simply browsing the internet.</p><p>The high-resolution display provides stunning visuals, and the colors are incredibly vibrant. The sound quality is also top-notch, and I enjoy crystal-clear audio during video conferences and while listening to music.</p><p>In conclusion, this product has exceeded all my expectations, and I wouldn't hesitate to give it a glowing recommendation to anyone in need of such a solution.</p>",
  },
  {
    name: "David Wilson",
    rating: 2,
    text: "<p>I had high hopes for this product, but unfortunately, it fell short of my expectations.</p><p>The build quality is decent, but I've encountered some durability issues that have left me concerned about its long-term reliability.</p><p>In terms of performance, it's just okay. It gets the job done for basic tasks, but it struggles with more demanding applications. The speed is not consistent, and I've experienced slowdowns that have been frustrating.</p><p>The battery life is average, and I find myself needing to recharge it multiple times throughout the day. While it may have its merits, I expected more from a product in this price range.</p><p>Overall, I'm a bit disappointed with my purchase, and I think there are better options out there for the same price.</p>",
  },
  {
    name: "Eve Brown",
    rating: 4,
    text: "<p>I have to say that this product offers good value for the price.</p><p>The build quality is solid, and it feels well-made. It's not the most high-end product on the market, but it performs admirably for its price point.</p><p>It has certainly made my life easier, and I'm satisfied with my purchase. I use it primarily for work-related tasks, and it handles them without any issues.</p><p>The keyboard is comfortable to type on, and the touchpad is responsive. The battery life is decent, and I don't find myself constantly searching for a power outlet.</p><p>The high-resolution display is a pleasant surprise, and it enhances the overall viewing experience. While it may not be the fanciest option available, it gets the job done, and I appreciate the affordability it offers.</p>",
  },
  {
    name: "Frank Adams",
    rating: 3,
    text: "<p>My experience with this product has been decent, but it hasn't completely blown me away.</p><p>The build quality is respectable, and it seems durable enough for everyday use. However, I've noticed a few minor design flaws that make it less user-friendly than I'd like.</p><p>In terms of performance, it's adequate for everyday tasks, but it doesn't excel in any particular way. It's a reliable choice, but if you're looking for something outstanding, you might want to explore other options.</p><p>The battery life is reasonable, and it lasts through a typical workday without any issues. The speakers are okay, but they don't deliver the immersive audio experience I was hoping for.</p><p>While this product has its merits, I believe there are more compelling choices available in the market.</p>",
  },
  {
    name: "Grace Lee",
    rating: 5,
    text: "<p>I'm thoroughly impressed with the quality and performance of this product.</p><p>The build is rock-solid, and it exudes a premium feel. Performance-wise, it's lightning-fast, and it has become an integral part of my daily routine. Whether I'm working on demanding tasks, gaming, or streaming content, this product handles everything with ease.</p><p>The high-resolution display is a visual treat, and I'm constantly amazed by the clarity and vibrant colors. The sound quality is exceptional, and I often use it for video conferences and multimedia content without any issues.</p><p>The battery life is outstanding, and I rarely have to worry about running out of power during the day. In conclusion, I couldn't be happier with my purchase, and I highly recommend it to anyone who values top-notch quality and performance in a product.</p>",
  },
  {
    name: "Harry Turner",
    rating: 2,
    text: "<p>I hate to say it, but I was quite disappointed with this product. It didn't live up to my expectations at all.</p><p>The build quality is subpar, and I've encountered some issues that shouldn't be present in a product of this price range. There are noticeable design flaws that have affected my overall experience negatively.</p><p>In terms of performance, it's sluggish and not up to par with what I was hoping for. It struggles with basic tasks, and I've experienced frustrating delays and crashes.</p><p>The battery life is below average, and I find myself constantly tethered to a power source. While it may have a few redeeming qualities, my overall experience has been less than stellar, and I wouldn't recommend this product to others based on my experience.</p>",
  },
  {
    name: "Ivy Garcia",
    rating: 4,
    text: "<p>I'm quite satisfied with my purchase of this product.</p><p>The build quality is decent, and it seems to be holding up well. In terms of performance, it's reliable for everyday use.</p><p>While it may not be the most high-end option out there, it certainly gets the job done, and I have no regrets about choosing it. The keyboard is comfortable to use for extended periods, and the touchpad is responsive. The battery life is reasonable, and it lasts through a typical workday without any issues.</p><p>The high-resolution display is a nice touch, and it enhances the overall viewing experience. If you're looking for a product that strikes a balance between affordability and functionality, this could be a good fit for you.</p>",
  },
  {
    name: "Jack Harris",
    rating: 5,
    text: "<p>This product is absolutely fantastic! I can't express how thrilled I am with it.</p><p>The build quality is top-notch, and it feels like a premium item. Performance-wise, it's lightning-fast, and it has exceeded all my expectations. I can confidently say that this is the best product I've ever owned, and I would highly recommend it to anyone in need of such a solution.</p><p>The high-resolution display provides stunning visuals, and the colors are incredibly vibrant. The sound quality is also exceptional, and I enjoy crystal-clear audio during video conferences and while listening to music.</p><p>The battery life is outstanding, and I rarely have to worry about running out of power during the day. In conclusion, this product has completely transformed my computing experience, and I couldn't be happier.</p>",
  },
  {
    name: "Kate Miller",
    rating: 3,
    text: "<p>My experience with this product has been mixed. It's not bad, but it's not great either.</p><p>The build quality is acceptable, but I've noticed some minor flaws that have affected my overall impression. In terms of performance, it does the job, but it doesn't stand out in any particular way. It's an okay choice, but I think there are better options available depending on your needs.</p><p>The battery life is decent, and it lasts through a typical workday without any issues. The keyboard is comfortable to type on, but I wish the touchpad were more responsive.</p><p>While this product may suit some users, I believe there are more compelling options available in the market that offer a better overall experience.</p>",
  },
  {
    name: "Liam Clark",
    rating: 4,
    text: "<p>I chose this product, and I must say it's a solid choice for the price point.</p><p>The build quality is decent, and it feels well-constructed. Performance-wise, it's reliable for most tasks, and it has served me well. If you're looking for a product that strikes a balance between affordability and functionality, this could be a good fit for you.</p><p>The keyboard is comfortable to use for extended periods, and the touchpad is responsive. The battery life is reasonable, and it lasts through a typical workday without any issues. The high-resolution display is a nice touch, and it enhances the overall viewing experience.</p><p>While it may not be the most high-end option available, it gets the job done, and I appreciate the affordability it offers.</p>",
  },
];

// selectors
const tplReview = document.querySelector("#tpl-review");
const listReviews = document.querySelector("#list-reviews");
const reviewEl = document.querySelector("#review");
const reviewName = reviewEl.querySelector("h2");
const reviewQuote = reviewEl.querySelector("blockquote");
const reviewRating = reviewEl.querySelector("#review-rating");
const btnReviewClose = document.querySelector("#btn-close");

// load reviews
function renderReviews(limit) {
  // temp splice to only show 6 - will change later to show more...
  const arr = REVIEWS.splice(0, limit);
  let delay = 50;
  arr.forEach((review) => {
    const clone = tplReview.content.cloneNode(true);
    const btn = clone.querySelector("button");
    const blockquote = clone.querySelector("blockquote");
    btn.classList.add(`delay-${delay}`);
    clone.querySelector("h2").innerText = review.name;
    blockquote.innerHTML = review.text.substring(0, 200);
    clone.querySelector("[review-stars]").innerHTML = renderStars(
      review.rating
    );

    // button. -read review
    btn.addEventListener("click", () => {
      loadReview(review);
    });

    // add to dom
    listReviews.append(clone);

    // increase delay for animations
    delay = delay + 50;
  });
}
// create stars
function renderStars(rating, max = 5) {
  let stars = "";
  for (let i = 0; i < max; i++) {
    const filled = i < rating ? "material-fill-1" : "";
    stars += `<span class="material-symbols-outlined text-base ${filled}">star</span>`;
  }
  return stars;
}

renderReviews(6);

// load selected review
function loadReview(review) {
  // add content
  reviewName.innerText = review.name;
  reviewQuote.innerHTML = review.text;
  reviewRating.innerHTML = renderStars(review.rating);

  // scale down reviews

  listReviews.querySelectorAll("button").forEach((a) => {
    a.classList.add("scale-0");
  });

  // scale up review after short delay
  setTimeout(() => {
    reviewEl.classList.remove("scale-0");
    document.querySelector("header").scrollIntoView({ behavior: "smooth" });
  }, 500);

  // show close button after short delay
  setTimeout(() => {
    btnReviewClose.classList.remove("-translate-y-16");
  }, 1000);
}
// close review
btnReviewClose.addEventListener("click", () => {
  closeReview();
});
// close review and show all reviews
function closeReview() {
  btnReviewClose.classList.add("-translate-y-16");
  reviewEl.classList.add("scale-0");
  setTimeout(() => {
    listReviews.querySelectorAll("button").forEach((a) => {
      a.classList.remove("scale-0");
    });
  }, 300);
}

function limit(string = "", limit = 0) {
  return string.substring(0, limit);
}
