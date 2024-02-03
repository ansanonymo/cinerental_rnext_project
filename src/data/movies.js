const data = [
  {
    id: crypto.randomUUID(),
    cover: "https://i.ibb.co/yXGfZ03/attack-on-titan-season-1.webp",
    title: "Attack on Titan Season 1",
    description:
      "The story of Attack on Titan develops in a world where humans are an endangered species. For more than a hundred years, they have lived in fear of the Titans, a mysterious and violent race of human-like giants that wander outside the walls and that look for people to devour.",
    genre: "Shonen,Dark Fantasy,Fiction",
    rating: 5,
    price: 40,
  },
  {
    id: crypto.randomUUID(),
    cover: "https://i.ibb.co/Fgq5qkS/5-centemeters-per-second.webp",
    title: "5 Centimeters Per Second",
    description:
      "A tale of two people, Tono Takaki and Shinohara Akari, who were close friends but gradually grow farther and farther apart as time moves on. They become separated because of their families yet continue to exchange contact in the form of letters.",
    genre: "Drama,Romance",
    rating: 2,
    price: 22,
  },
  {
    id: crypto.randomUUID(),
    cover: "https://i.ibb.co/4phWhBp/aot-ova-no-regret.webp",
    title: "AOT OVA No Regret",
    description:
      "The story is a prequel to Attack on Titan that follows Levi during his days as a criminal in the underground city, when he was with his two best friends Isabel Magnolia and Farlan Church before Erwin Smith recruits him into the Survey Corps.",
    genre: "Dark Fantasy,Action",
    rating: 4,
    price: 35,
  },

  {
    id: crypto.randomUUID(),
    cover: "https://i.ibb.co/5R8p0dK/death-note.webp",
    title: "Death Note",
    description:
      "The story follows Light Yagami, a genius high school student who discovers a mysterious notebook: the 'Death Note', which belonged to the shinigami Ryuk, and grants the user the supernatural ability to kill anyone whose name is written in its pages.",
    genre: "Mystery,Psychological Thriller",
    rating: 4,
    price: 32,
  },

  {
    id: crypto.randomUUID(),
    cover: "https://i.ibb.co/y5HHSyp/attack-on-titan-season-2.webp",
    title: "Attack on Titan Season 2",
    description:
      "The season follows Eren Jaeger and his friends from the 104th Training Corps who have just begun to become full members of the Survey Corps. After fighting the Female Titan, Eren finds no time to rest as a horde of Titans is approaching Wall Rose and the battle for humanity continues.",
    genre: "Shonen,Dark Fantasy",
    rating: 5,
    price: 48,
  },

  {
    id: crypto.randomUUID(),
    cover: "https://i.ibb.co/TKVVWPX/barakamon.webp",
    title: "Barakamon",
    description:
      "A proud young calligrapher is punished for punching a critic by being sent to a faraway island in the east coast of Japan. But as he meets and lives with the island's friendly people, his attitude begins to improve.",
    genre: "Comedy,Slice of Life",
    rating: 4,
    price: 28,
  },

  {
    id: crypto.randomUUID(),
    cover: "https://i.ibb.co/BNw8bLH/attack-on-season-4-part-1.webp",
    title: "Attack on Titan Season 4 Part 1",
    description:
      "A sudden visit from the Tybur family shakes up the Marleyan military. Meanwhile, Falco smuggles letters for a friend and helps two old comrades reunite. While Willy Tybur reveals the truth in a shocking speech to the world, tensions rise behind the stage as Eren and Reiner meet face to face.",
    genre: "Shonen,Dark Fantasy",
    rating: 5,
    price: 58,
  },

  {
    id: crypto.randomUUID(),
    cover: "https://i.ibb.co/CQxXb8q/attack-on-titan-season-4-part-2.webp",
    title: "Attack on Titan Season 4 Part 2",
    description:
      "In the second part of the season, aware of the global anti-Eldian sentiment resulting from Marleyan propaganda, Eren Jaeger preemptively targets the world outside of Paradis with the Rumbling, unleashing millions of Colossal-like Wall Titans in a widespread effort to kill all life beyond the island.",
    genre: "Shonen, Dark Fantasy",
    rating: 5,
    price: 70,
  },

  {
    id: crypto.randomUUID(),
    cover: "https://i.ibb.co/drcTKsT/full-metal-alchecmist.webp",
    title: "Full Metal Alchemist",
    description:
      "In an attempt to resurrect their mother who fell dead of stress cardiomyopathy, brothers Edward and Alphonse Elric attempt an alchemic ritual but fail as Edward's right arm has been severed and Alphonse loses his body. To fix this, they search for the sorcerers stone to get their original bodies back.",
    genre: "Fantasy,Slice of Life",
    rating: 4,
    price: 58,
  },
  {
    id: crypto.randomUUID(),
    cover: "https://i.ibb.co/dp7qQNM/full-metal-alchecmist-brotherhood.webp",
    title: "Full Metal Alchemist Brotherhood",
    description:
      "Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms. Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.",
    genre: "Fantasy,Slic of Life",
    rating: 5,
    price: 72,
  },
  {
    id: crypto.randomUUID(),
    cover: "https://i.ibb.co/w08FY8C/on-punch-man.webp",
    title: "One Punch Man",
    description:
      "Saitama is a self-proclaimed superhero who can defeat every opponent that he encounters with a single punch. He searches for a worthy opponent after growing bored by a lack of challenge in a world filled with superheroes and villains. While fighting evil, he meets his student, Genos.",
    genre: "Actom,Comedy,Superhero",
    rating: 4,
    price: 34,
  },
  {
    id: crypto.randomUUID(),
    cover: "https://i.ibb.co/0YZjrYF/the-promise-neverland.webp",
    title: "The Promised Neverland",
    description:
      "THE PROMISED NEVERLAND follows 11-year-old children Emma, Norman, and Ray as they plan an escape from their orphanage home. After Emma and Norman discover the dead body of a younger 'sibling,' they learn that they're living on a 'farm' that sells human children to demons for food.",
    genre: "Shonen,Dark Fantasy",
    rating: 3,
    price: 42,
  },
  {
    id: crypto.randomUUID(),
    cover: "https://i.ibb.co/qWH34KP/weathering-with-you.webp",
    title: "Weathering With You",
    description:
      "Weathering with You follows young Morishima Hodaka runs away from home and finds himself in Tokyo, Japan. Meeting young Amano Hina, they form a friendship that grows stronger and stronger as he realizes she is known as a 'Sunshine Girl' and can control the weather.",
    genre: "Romance,Drama,Fantasy",
    rating: 1,
    price: 19,
  },
];

export default data;

function getAllMovies() {
  return data;
}

export { getAllMovies };
