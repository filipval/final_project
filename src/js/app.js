const films = [
  {
    title: "POSSESSION",
    director: "Andrzej Żuławski",
    country: "Germany",
    year: 1981,
    rating: 7.3,
    genre: "horror",
    category: "Recommended",
    image:
      "https://image.tmdb.org/t/p/original/wbgNUxSPbfxyFfHhdd9GZyepsiK.jpg",
    tagline: "Inhuman ecstasy fulfilled.",
    description:
      "A young woman left her family for an unspecified reason. The husband determines to find out the truth and starts following his wife. At first, he suspects that a man is involved. But gradually, he finds out more and more strange behaviors and bizarre incidents that indicate something more than a possessed love affair.",
  },
  {
    title: "CLIMAX",
    director: "Gaspar Noé",
    country: "France",
    year: 2018,
    rating: 6.9,
    genre: "horror",
    category: "Recommended",
    image:
      "https://image.tmdb.org/t/p/original/v0sblc9A8eaE8EqDQ5Y6fELj4oB.jpg",
    tagline:
      "Birth and death are extraordinary experiences. Life is a fleeting pleasure.",
    description:
      "When a dance troupe is lured to an empty school, a bowl of drug-laced sangria causes their jubilant rehearsal to descend into a dark and explosive nightmare as they try to survive the night—and find who's responsible—before it's too late.",
  },
  {
    title: "PRISCILLA",
    director: "Sofia Coppola",
    country: "USA",
    year: 2023,
    rating: 6.5,
    genre: "drama",
    category: "Recommended",
    image:
      "https://image.tmdb.org/t/p/original/pGuxXuTPmpEtzEkRrYQ0rLgEJnI.jpg",
    tagline: "Wife to the king. Icon to the world. Destined for more.",
    description:
      "When teenage Priscilla Beaulieu meets Elvis Presley at a party, the man who is already a meteoric rock-and-roll superstar becomes someone entirely unexpected in private moments: a thrilling crush, an ally in loneliness, a vulnerable best friend.",
  },
  {
    title: "TWIN PEAKS: FIRE WALK WITH ME",
    director: "David Lynch",
    country: "USA",
    year: 1992,
    rating: 7.3,
    genre: "thriller",
    category: "Recommended",
    image:
      "https://image.tmdb.org/t/p/original/g5G19q0xgkzWEvfcGo1KcL8nQOk.jpg",
    tagline: "In a town like Twin Peaks, no one is innocent.",
    description:
      "In the questionable town of Deer Meadow, Washington, FBI Agent Desmond inexplicably disappears while hunting for the man who murdered a teen girl. The killer is never apprehended, and, after experiencing dark visions and supernatural encounters, Agent Dale Cooper chillingly predicts that the culprit will claim another life. Meanwhile, in the more cozy town of Twin Peaks, hedonistic beauty Laura Palmer hangs with lowlifes and seems destined for a grisly fate.",
  },
  {
    title: "LONGLEGS",
    director: "Osgood Perkins",
    country: "USA",
    year: 2024,
    rating: 6.7,
    genre: "horror",
    category: "New Releases",
    image:
      "https://image.tmdb.org/t/p/original/mQxn5hlM018OZP7mTWgVqmtvLQw.jpg",
    tagline: "Say your prayers.",
    description:
      "FBI Agent Lee Harker is a gifted new recruit assigned to the unsolved case of an elusive serial killer. As the case takes complex turns, unearthing evidence of the occult, Harker discovers a personal connection to the merciless killer and must race against time to stop him before he claims the lives of another innocent family.",
  },
  {
    title: "STOP MAKING SENSE",
    director: "Jonathan Demme",
    country: "USA",
    year: 1984,
    rating: 8.7,
    genre: "concert",
    category: "Top Rated",
    image:
      "https://image.tmdb.org/t/p/original/kdDQn3Oi7iy1VK7GWhMRyPXUf9K.jpg",
    tagline:
      "Why stop making sense? Why a movie? Why a big suit? Where do the odd movements come from? What will the band do next?",
    description:
      "A concert film documenting Talking Heads at the height of their popularity, on tour for their 1983 album 'Speaking in Tongues.' The band takes the stage one by one and is joined by a cadre of guest musicians for a career-spanning and cinematic performance that features creative choreography and visuals.",
  },
  {
    title: "3 WOMEN",
    director: "Robert Altman",
    country: "USA",
    year: 1977,
    rating: 7.7,
    genre: "mystery",
    category: "A-Z",
    image:
      "https://image.tmdb.org/t/p/original/pTmMEIW2cyOkcSRkWTCDEbd5if0.jpg",
    tagline: "1 Woman Became 2, 2 Women Became 3, 3 Women Became 1.",
    description:
      "Two co-workers, one a vain woman and the other an awkward teenager, share an increasingly bizarre relationship after becoming roommates.",
  },
];

// Get DOM Elements
const filmsCardsContainer = document.querySelector(".films__cards-container");

document.addEventListener("DOMContentLoaded", () => {
  renderCategory("Recommended", "recommended-carousel");
  renderCategory("New Releases", "new-releases-carousel");
  renderCategory("Top Rated", "top-rated-carousel");
  renderCategory("A-Z", "a-z-carousel");
});

function renderCategory(category, carouselId) {
  const carousel = document.getElementById(carouselId);
  const filteredFilms = films.filter((film) => film.category === category);

  filteredFilms.forEach((film) => {
    const card = document.createElement("div");
    card.classList.add("film__card");

    const image = document.createElement("img");
    image.src = film.image;
    image.alt = film.title;

    const title = document.createElement("p");
    title.textContent = film.title;

    card.append(image, title);
    carousel.appendChild(card);
  });
}

// Navbar Toggle
const toggleMenuButton = document.querySelector(".navbar__toggle-button");
const navbarLinksContainer = document.querySelector(".navbar__links");
const links = document.querySelectorAll(".navbar__link");

toggleMenuButton.addEventListener("click", () => {
  navbarLinksContainer.classList.toggle("navbar__link--active");
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    links.forEach((link) => link.classList.remove("navbar__link--active"));
    e.currentTarget.classList.add("navbar__link--active");
  });
});
