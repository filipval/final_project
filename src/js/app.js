const films = [
  {
    title: "THE PIANO TEACHER",
    director: "Michael Haneke",
    country: "France",
    year: 2001,
    rating: 7.5,
    genre: "drama",
    category: "",
    image:
      "https://image.tmdb.org/t/p/original/tEhvOU8nJp4v9goYwrJTASJJD3C.jpg",
    tagline: "Perversion at its wicked best!",
    description:
      "Erika Kohut, a sexually repressed piano teacher living with her domineering mother, meets a young man who starts romantically pursuing her.",
    isSaved: false,
  },
  {
    title: "BADLANDS",
    director: "Terrence Malick",
    country: "USA",
    year: 1974,
    rating: 7.7,
    genre: "crime",
    category: "Recommended",
    image:
      "https://image.tmdb.org/t/p/original/ycAEWKifBotJahJBmMrf2lxIMwU.jpg",
    tagline: "Burning Love on the Great Plains in 1959!",
    description:
      "An impressionable teenage girl from a dead-end town and her older greaser boyfriend embark on a killing spree in the South Dakota badlands.",
    isSaved: false,
  },
  {
    title: "MARIE ANTOINETTE",
    director: "Sofia Coppola",
    country: "France",
    year: 2006,
    rating: 6.5,
    genre: "history",
    category: "Recommended",
    image:
      "https://image.tmdb.org/t/p/original/z3ik5DVvamSPlTuwdJQl4MoKgTJ.jpg",
    tagline: "Rumor. Scandal. Sex. Fame. Revolution.",
    description:
      "The retelling of France's iconic but ill-fated queen, Marie Antoinette. From her betrothal and marriage to Louis XVI at 15 to her reign as queen at 19 and ultimately the fall of Versailles.",
    isSaved: false,
  },
  {
    title: "GREY GARDENS",
    director: "Albert Maysles",
    country: "USA",
    year: 1976,
    rating: 7.5,
    genre: "documentary",
    category: "Recommended",
    image:
      "https://image.tmdb.org/t/p/original/zSOc9KZp5H78vHtuzvGnhkcIAnW.jpg",
    tagline: "Eccentric, unforgettable, and utterly captivating.",
    description:
      "Edie Bouvier Beale and her mother, Edith, two aging, eccentric relatives of Jackie Kennedy Onassis, are the sole inhabitants of a Long Island estate. The women reveal themselves to be misfits with outsized, engaging personalities. Much of the conversation is centered on their pasts, as mother and daughter now rarely leave home.",
    isSaved: false,
  },
  {
    title: "DANCER IN THE DARK",
    director: "Lars von Trier",
    country: "Denmark",
    year: 2000,
    rating: 7.9,
    genre: "drama",
    category: "Recommended",
    image:
      "https://image.tmdb.org/t/p/original/ikR2qy9xJCHX7M8i5rcvuNfdYXs.jpg",
    tagline: "You don't need eyes to see.",
    description:
      "Selma, a Czech immigrant on the verge of blindness, struggles to make ends meet for herself and her son, who has inherited the same genetic disorder and will suffer the same fate without an expensive operation. When life gets too difficult, Selma learns to cope through her love of musicals, escaping life's troubles - even if just for a moment - by dreaming up little numbers to the rhythmic beats of her surroundings.",
    isSaved: false,
  },
  {
    title: "VIDEODROME",
    director: "David Cronenberg",
    country: "Canada",
    year: 1983,
    rating: 7.2,
    genre: "mystery",
    category: "Recommended",
    image:
      "https://image.tmdb.org/t/p/original/4xr92EVV83CgHg3MWR95b1g5WD0.jpg",
    tagline: "Long live the new flesh.",
    description:
      "As the president of a trashy TV channel, Max Renn is desperate for new programming to attract viewers. When he happens upon 'Videodrome,' a TV show dedicated to gratuitous torture and punishment, Max sees a potential hit and broadcasts the show on his channel. However, after his girlfriend auditions for the show and never returns, Max investigates the truth behind Videodrome and discovers that the graphic violence may not be as fake as he thought.",
    isSaved: false,
  },
  {
    title: "POSSESSION",
    director: "Andrzej Żuławski",
    country: "France",
    year: 1981,
    rating: 7.3,
    genre: "horror",
    category: "Recommended",
    image:
      "https://image.tmdb.org/t/p/original/wbgNUxSPbfxyFfHhdd9GZyepsiK.jpg",
    tagline: "Inhuman ecstasy fulfilled.",
    description:
      "A young woman left her family for an unspecified reason. The husband determines to find out the truth and starts following his wife. At first, he suspects that a man is involved. But gradually, he finds out more and more strange behaviors and bizarre incidents that indicate something more than a possessed love affair.",
    isSaved: false,
  },
  {
    title: "THE WORST PERSON IN THE WORLD",
    director: "Joachim Trier",
    country: "Norway",
    year: 2021,
    rating: 7.7,
    genre: "drama",
    category: "Recommended",
    image:
      "https://image.tmdb.org/t/p/original/9BtirwHb53R2cdTZkXvnWTK4BFN.jpg",
    tagline: "Love, Chaos and the Search for Self.",
    description:
      "The chronicles of four years in the life of Julie, a young woman who navigates the troubled waters of her love life and struggles to find her career path, leading her to take a realistic look at who she really is.",
    isSaved: false,
  },
  {
    title: "MELANCHOLIA",
    director: "Lars von Trier",
    country: "Denmark",
    year: 2011,
    rating: 7.1,
    genre: "drama",
    category: "Recommended",
    image:
      "https://image.tmdb.org/t/p/original/iotei0grqyJXsRdZDEWHmHbImH5.jpg",
    tagline: "It will change everything.",
    description:
      "Justine and Michael are celebrating their marriage at a sumptuous party in the home of her sister Claire, and brother-in-law John. Despite Claire's best efforts, the wedding is a fiasco, with family tensions mounting and relationships fraying. Meanwhile, a planet called Melancholia is heading directly towards Earth…",
    isSaved: false,
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
    isSaved: false,
  },
  {
    title: "BONES AND ALL",
    director: "Luca Guadagnino",
    country: "Italy",
    year: 2022,
    rating: 6.8,
    genre: "horror",
    category: "Recommended",
    image:
      "https://image.tmdb.org/t/p/original/vsNrifrv7srPyYmCx3RuMm7FQlT.jpg",
    tagline: "You can't run from who you are.",
    description:
      "Abandoned by her father, a young woman embarks on a thousand-mile odyssey through the backroads of America where she meets a disenfranchised drifter. But despite their best efforts, all roads lead back to their terrifying pasts and to a final stand that will determine whether their love can survive their otherness.",
    isSaved: false,
  },
  {
    title: "CLOSE",
    director: "Lukas Dhont",
    country: "Belgium",
    year: 2022,
    rating: 7.8,
    genre: "drama",
    category: "New Releases",
    image:
      "https://image.tmdb.org/t/p/original/saESlYSTAGjr8gkyjoGb7omH0hf.jpg",
    tagline: "An intimate portrait of friendship and loss.",
    description:
      "Thirteen-year-olds Léo and Rémi have always been close, but they drift apart after the intimacy of their relationship is questioned by schoolmates.",
    isSaved: false,
  },
  {
    title: "PRISCILLA",
    director: "Sofia Coppola",
    country: "USA",
    year: 2023,
    rating: 6.5,
    genre: "drama",
    category: "New Releases",
    image:
      "https://image.tmdb.org/t/p/original/dqbn1ek52L87YpRsmRisD63lLBq.jpg",
    tagline: "Wife to the king. Icon to the world. Destined for more.",
    description:
      "When teenage Priscilla Beaulieu meets Elvis Presley at a party, the man who is already a meteoric rock-and-roll superstar becomes someone entirely unexpected in private moments: a thrilling crush, an ally in loneliness, a vulnerable best friend.",
    isSaved: false,
  },
  {
    title: "ANORA",
    director: "Sean Baker",
    country: "USA",
    year: 2024,
    rating: 8.1,
    genre: "comedy",
    category: "New Releases",
    image:
      "https://image.tmdb.org/t/p/original/dV9f52BJKUuxkeFTfAEMzbSkwNp.jpg",
    tagline: "Love is a hustle.",
    description:
      "Anora, a young sex worker from Brooklyn, gets her chance at a Cinderella story when she meets and impulsively marries the son of an oligarch. Once the news reaches Russia, her fairytale is threatened as the parents set out for New York to get the marriage annulled.",
    isSaved: false,
  },
  {
    title: "CHALLENGERS",
    director: "Luca Guadagnino",
    country: "USA",
    year: 2024,
    rating: 7.1,
    genre: "drama",
    category: "New Releases",
    image:
      "https://image.tmdb.org/t/p/original/bNgGYhHvXSTNMbl8UVoBJUi061w.jpg",
    tagline: "Her game. Her rules.",
    description:
      "Tennis player turned coach Tashi has taken her husband, Art, and transformed him into a world-famous Major champion. To jolt him out of his recent losing streak, she signs him up for a 'Challenger' event — close to the lowest level of pro tournament — where he finds himself standing across the net from his former best friend and Tashi's former boyfriend.",
    isSaved: false,
  },
  {
    title: "LONGLEGS",
    director: "Osgood Perkins",
    country: "Canada",
    year: 2024,
    rating: 6.7,
    genre: "horror",
    category: "New Releases",
    image:
      "https://image.tmdb.org/t/p/original/mQxn5hlM018OZP7mTWgVqmtvLQw.jpg",
    tagline: "Say your prayers.",
    description:
      "FBI Agent Lee Harker is a gifted new recruit assigned to the unsolved case of an elusive serial killer. As the case takes complex turns, unearthing evidence of the occult, Harker discovers a personal connection to the merciless killer and must race against time to stop him before he claims the lives of another innocent family.",
    isSaved: false,
  },
  {
    title: "LA CHIMERA",
    director: "Alice Rohrwacher",
    country: "France",
    year: 2023,
    rating: 7.3,
    genre: "drama",
    category: "New Releases",
    image:
      "https://image.tmdb.org/t/p/original/c7OgxjbFpg6fgKDHJID2LDzQvCT.jpg",
    tagline: "Grave robbers, ancient treasures, and the ties that bind.",
    description:
      "Just out of jail, crumpled English archaeologist Arthur reconnects with his wayward crew of tombaroli accomplices - a happy-go-lucky collective of itinerant grave-robbers who survive by looting Etruscan tombs and fencing the ancient treasures they dig up.",
    isSaved: false,
  },
  {
    title: "KOKOMO CITY",
    director: "D. Smith",
    country: "USA",
    year: 2023,
    rating: 7.1,
    genre: "documentary",
    category: "New Releases",
    image:
      "https://image.tmdb.org/t/p/original/ummWwkJVJtXoA5uQEZOvtO3hjfD.jpg",
    tagline: "Their bodies. Their business.",
    description:
      "Four Black transgender sex workers in Atlanta and New York City break down the walls of their profession.",
    isSaved: false,
  },
  {
    title: "THE SUBSTANCE",
    director: "Coralie Fargeat",
    country: "France",
    year: 2024,
    rating: 7.4,
    genre: "horror",
    category: "New Releases",
    image:
      "https://image.tmdb.org/t/p/original/kGKYgXFSMDtZiVySLsLfnbf9W05.jpg",
    tagline: "If you follow the instructions, what could go wrong?",
    description:
      "A fading celebrity decides to use a black market drug, a cell-replicating substance that temporarily creates a younger, better version of herself.",
    isSaved: false,
  },
  {
    title: "BODIES BODIES BODIES",
    director: "Halina Reijn",
    country: "USA",
    year: 2022,
    rating: 6.2,
    genre: "horror",
    category: "New Releases",
    image:
      "https://image.tmdb.org/t/p/original/buv0fKzzXJ4fwyyquYKWQPaUkyx.jpg",
    tagline: "This is not a safe space.",
    description:
      "In an isolated family mansion, a group of rich 20-somethings decides to play Bodies Bodies Bodies, a game where one of them is secretly a 'killer' while the rest tries to 'escape'. Things take a turn for the worse when real bodies start turning up, setting off a paranoid and dangerous chain of events.",
    isSaved: false,
  },
  {
    title: "PERFECT DAYS",
    director: "Wim Wenders",
    country: "Japan",
    year: 2023,
    rating: 7.9,
    genre: "drama",
    category: "New Releases",
    image:
      "https://image.tmdb.org/t/p/original/67BHTjyEgURL60irOQu54qZ3zDk.jpg",
    tagline: " In a world of fleeting moments, find the beauty that lasts.",
    description:
      "Hirayama is content with his life as a toilet cleaner in Tokyo. Outside of his structured routine, he cherishes music on cassette tapes, books, and taking photos of trees. Through unexpected encounters, he reflects on finding beauty in the world.",
    isSaved: false,
  },
  {
    title: "CRASH",
    director: "David Cronenberg",
    country: "Canada",
    year: 1996,
    rating: 6.4,
    genre: "drama",
    image:
      "https://image.tmdb.org/t/p/original/vQNknPEVSAui6IL6eUlDBPfUzcW.jpg",
    tagline: "Shocking. Powerful. Scandalous. Provocative. Erotic. Brilliant.",
    description:
      "After getting into a serious car accident, a TV director discovers an underground sub-culture of scarred, omnisexual car-crash victims, and he begins to use car accidents and the raw sexual energy they produce to try to rejuvenate his sex life with his wife.",
    isSaved: false,
  },
  {
    title: "PARIS, TEXAS",
    director: "Wim Wenders",
    country: "Germany",
    year: 1984,
    rating: 8.1,
    genre: "drama",
    category: "Top Rated",
    image:
      "https://image.tmdb.org/t/p/original/eDYCXSweIt0Ei2uR49CMRAgNCsU.jpg",
    tagline:
      "A place for dreams. A place for heartbreak. A place to pick up the pieces.",
    description:
      "A man wanders out of the desert not knowing who he is. His brother finds him, and helps to pull his memory back of the life he led before he walked out on his family and disappeared four years earlier.",
    isSaved: false,
  },
  {
    title: "JEANNE DIELMAN, 23, QUAI DU COMMERCE, 1080 BRUXELLES",
    director: "Chantal Akerman",
    country: "Belgium",
    year: 1976,
    rating: 7.5,
    genre: "drama",
    category: "Top Rated",
    image:
      "https://image.tmdb.org/t/p/original/iIcEswHTHaQOChtSIoylfNGjVz5.jpg",
    tagline: "A hypnotic study of domestic routine.",
    description:
      "A lonely widowed housewife does her daily chores and takes care of her apartment where she lives with her teenage son, and turns the occasional trick to make ends meet. Slowly, her ritualized daily routines begin to fall apart.",
    isSaved: false,
  },
  {
    title: "MULHOLLAND DRIVE",
    director: "David Lynch",
    country: "USA",
    year: 2001,
    rating: 7.9,
    genre: "mystery",
    category: "Top Rated",
    image:
      "https://image.tmdb.org/t/p/original/hWY7giJ6vlzUKEyqAJyZZuoIJub.jpg",
    tagline: "A love story in the city of dreams.",
    description:
      "Blonde Betty Elms has only just arrived in Hollywood to become a movie star when she meets an enigmatic brunette with amnesia. Meanwhile, as the two set off to solve the second woman's identity, filmmaker Adam Kesher runs into ominous trouble while casting his latest project.",
    isSaved: false,
  },
  {
    title: "MIRROR",
    director: "Andrei Tarkovsky",
    country: "USSR",
    year: 1975,
    rating: 7.9,
    genre: "history",
    category: "Top Rated",
    image:
      "https://image.tmdb.org/t/p/original/5t3ObSn7mRi2QpV9Rs7heb3y9rJ.jpg",
    tagline: "A poetic journey through memory and history.",
    description:
      "A dying man in his forties recalls his childhood, his mother, the war and personal moments that tell of and juxtapose pivotal moments in Soviet history with daily life.",
    isSaved: false,
  },
  {
    title: "PARIS IS BURNING",
    director: "Jennie Livingston",
    country: "USA",
    year: 1991,
    rating: 8.2,
    genre: "documentary",
    category: "Top Rated",
    image:
      "https://image.tmdb.org/t/p/original/1DOLRxIQbRxhZcllLVx4DUAGqfS.jpg",
    tagline: "Having a ball… Wish you were here",
    description:
      "Where does voguing come from, and what, exactly, is throwing shade? This landmark documentary provides a vibrant snapshot of the 1980s through the eyes of New York City's African American and Latinx Harlem drag-ball scene. Made over seven years, PARIS IS BURNING offers an intimate portrait of rival fashion 'houses,' from fierce contests for trophies to house mothers offering sustenance in a world rampant with homophobia, transphobia, racism, AIDS, and poverty. Featuring legendary voguers, drag queens, and trans women — including Willi Ninja, Pepper LaBeija, Dorian Corey, and Venus Xtravaganza.",
    isSaved: false,
  },
  {
    title: "AUTUMN SONATA",
    director: "Ingmar Bergman",
    country: "Sweden",
    year: 1978,
    rating: 8.1,
    genre: "drama",
    category: "Top Rated",
    image:
      "https://image.tmdb.org/t/p/original/xt8UAp5urdR9ElxPDtidoXAdWjB.jpg",
    tagline: "A haunting symphony of mother and daughter.",
    description:
      "After a seven-year absence, Charlotte Andergast travels to Sweden to reunite with her daughter Eva. The pair have a troubled relationship: Charlotte sacrificed the responsibilities of motherhood for a career as a classical pianist. Over an emotional night, the pair reopen the wounds of the past. Charlotte gets another shock when she finds out that her mentally impaired daughter, Helena, is out of the asylum and living with Eva.",
    isSaved: false,
  },
  {
    title: "STOP MAKING SENSE",
    director: "Jonathan Demme",
    country: "USA",
    year: 1984,
    rating: 8.7,
    genre: "music",
    category: "Top Rated",
    image:
      "https://image.tmdb.org/t/p/original/kdDQn3Oi7iy1VK7GWhMRyPXUf9K.jpg",
    tagline:
      "Why stop making sense? Why a movie? Why a big suit? Where do the odd movements come from? What will the band do next?",
    description:
      "A concert film documenting Talking Heads at the height of their popularity, on tour for their 1983 album 'Speaking in Tongues.' The band takes the stage one by one and is joined by a cadre of guest musicians for a career-spanning and cinematic performance that features creative choreography and visuals.",
    isSaved: false,
  },
  {
    title: "Y TU MAMÁ TAMBIÉN",
    director: "Alfonso Cuarón",
    country: "Mexico",
    year: 2001,
    rating: 7.7,
    genre: "romance",
    category: "Top Rated",
    image:
      "https://image.tmdb.org/t/p/original/orIxqUMEcU3DT7qCs16Si8KWjBO.jpg",
    tagline: "Life has its ways of teaching.",
    description:
      "In Mexico, two teenage boys and an attractive older woman embark on a road trip and learn a thing or two about life, friendship, sex, and each other.",
    isSaved: false,
  },
  {
    title: "DOGVILLE",
    director: "Lars von Trier",
    country: "Denmark",
    year: 2003,
    rating: 8.0,
    genre: "crime",
    category: "Top Rated",
    image:
      "https://image.tmdb.org/t/p/original/vJ5P5OGbi3ZUwOhOI4Sq9Yn3cnX.jpg",
    tagline: "A quiet little town not far from here.",
    description:
      "When a beautiful young Grace arrives in the isolated township of Dogville, the small community agrees to hide her from a gang of ruthless gangsters, and, in return, Grace agrees to do odd jobs for the townspeople.",
    isSaved: false,
  },
  {
    title: "3 WOMEN",
    director: "Robert Altman",
    country: "USA",
    year: 1977,
    rating: 7.7,
    genre: "drama",
    category: "Top Rated",
    image:
      "https://image.tmdb.org/t/p/original/pTmMEIW2cyOkcSRkWTCDEbd5if0.jpg",
    tagline: "1 Woman Became 2, 2 Women Became 3, 3 Women Became 1.",
    description:
      "Two co-workers, one a vain woman and the other an awkward teenager, share an increasingly bizarre relationship after becoming roommates.",
    isSaved: false,
  },
  {
    title: "PERSONA",
    director: "Ingmar Bergman",
    country: "Sweden",
    year: 1966,
    rating: 8.0,
    genre: "drama",
    category: "Classics",
    image:
      "https://image.tmdb.org/t/p/original/sj2aZDetPE8RoOCAm5QJitCNfLr.jpg",
    tagline: "Ingmar Bergman's most personal and original film",
    description:
      "A young nurse, Alma, is put in charge of Elisabeth Vogler: an actress who is seemingly healthy in all respects, but will not talk. As they spend time together, Alma speaks to Elisabeth constantly, never receiving any answer.",
    isSaved: false,
  },
  {
    title: "BREATHLESS",
    director: "Jean-Luc Godard",
    country: "France",
    year: 1960,
    rating: 7.7,
    genre: "crime",
    category: "Classics",
    image:
      "https://image.tmdb.org/t/p/original/oi7D7gBwTpaDqSx9jaXmkT7Yaai.jpg",
    tagline: "Wild! Violent! Outspoken and Honest!",
    description:
      "A small-time thief steals a car and impulsively murders a motorcycle policeman. Wanted by the authorities, he attempts to persuade a girl to run away to Italy with him.",
    isSaved: false,
  },
  {
    title: "MIDNIGHT COWBOY",
    director: "John Schlesinger",
    country: "USA",
    year: 1969,
    rating: 7.8,
    genre: "drama",
    category: "Classics",
    image:
      "https://image.tmdb.org/t/p/original/68vnoNHZ88yk3mVIzFBPMIuw40y.jpg",
    tagline:
      "For those who have never seen it and those who have never forgotten it.",
    description:
      "Joe Buck is a wide-eyed hustler from Texas hoping to score big with wealthy New York City women; he finds a companion in Enrico 'Ratso' Rizzo, an ailing swindler with a bum leg and a quixotic fantasy of escaping to Florida.",
    isSaved: false,
  },
  {
    title: "ROSEMARY'S BABY",
    director: "Roman Polanski",
    country: "USA",
    year: 1968,
    rating: 8.0,
    genre: "horror",
    category: "Classics",
    image:
      "https://image.tmdb.org/t/p/original/1FiUOiDDzsGnoGZdbhq80Nb3n8S.jpg",
    tagline: "Pray for Rosemary's Baby.",
    description:
      "A young couple, Rosemary and Guy, moves into an infamous New York apartment building, known by frightening legends and mysterious events, with the purpose of starting a family.",
    isSaved: false,
  },
  {
    title: "VIVRE SA VIE",
    director: "Jean-Luc Godard",
    country: "France",
    year: 1962,
    rating: 7.8,
    genre: "drama",
    category: "Classics",
    image:
      "https://image.tmdb.org/t/p/original/qqkQ4tA3n7zWNnKx8CUczdVNTTc.jpg",
    tagline: "The many faces of a woman trying to find herself.",
    description:
      "Twelve episodic tales in the life of a Parisian woman and her slow descent into prostitution.",
    isSaved: false,
  },
  {
    title: "REPULSION",
    director: "Roman Polanski",
    country: "UK",
    year: 1965,
    rating: 7.6,
    genre: "horror",
    category: "Classics",
    image:
      "https://image.tmdb.org/t/p/original/vKqClmjR9yGfVLDZv2D46qwvyIk.jpg",
    tagline:
      "The nightmare world of a virgin's dreams becomes the screen's shocking reality!",
    description:
      "Beautiful young manicurist Carole suffers from androphobia (the pathological fear of interaction with men). When her sister and roommate, Helen, leaves their London flat to go on an Italian holiday with her married boyfriend, Carole withdraws into her apartment. She begins to experience frightful hallucinations, her fear gradually mutating into madness.",
    isSaved: false,
  },
  {
    title: "THE TEXAS CHAIN SAW MASSACRE",
    director: "Tobe Hooper",
    country: "USA",
    year: 1974,
    rating: 7.4,
    genre: "horror",
    category: "Classics",
    image:
      "https://image.tmdb.org/t/p/original/euCXIa7xXMRZCgNqqzEP74qcwEz.jpg",
    tagline: "Who will survive and what will be left of them?",
    description:
      "A group of five young friends face a nightmare of torment at the hands of a depraved Texas clan.",
    isSaved: false,
  },
  {
    title: "BLUE VELVET",
    director: "David Lynch",
    country: "USA",
    year: 1986,
    rating: 7.7,
    genre: "crime",
    category: "Classics",
    image:
      "https://image.tmdb.org/t/p/original/f8b4SeTcMhWtNwMiOwWELSlG00P.jpg",
    tagline: "It's a strange world.",
    description:
      "Clean-cut Jeffrey Beaumont realizes his hometown is not so normal when he discovers a human ear in a field, the investigation soon catapulting him toward a disturbed nightclub singer and a drug-addicted sadist.",
    isSaved: false,
  },
  {
    title: "BELLE DE JOUR",
    director: "Luis Buñuel",
    country: "France",
    year: 1967,
    rating: 7.6,
    genre: "drama",
    category: "Classics",
    image:
      "https://image.tmdb.org/t/p/original/lKH5DNcTd9m5cGJ9VVuQ8p1u9S5.jpg",
    tagline: "Luis Bunuel's Masterpiece of Erotica!",
    description:
      "Beautiful young housewife Séverine Serizy cannot reconcile her masochistic fantasies with her everyday life alongside dutiful husband Pierre. When her lovestruck friend Henri mentions a secretive high-class brothel run by Madame Anais, Séverine begins to work there during the day under the name Belle de Jour. But when one of her clients grows possessive, she must try to go back to her normal life.",
    isSaved: false,
  },
  {
    title: "LA RELIGIEUSE",
    director: "Jacques Rivette",
    country: "France",
    year: 1966,
    rating: 7.5,
    genre: "drama",
    category: "Classics",
    image:
      "https://image.tmdb.org/t/p/original/auWpC62GLdB5je6TOOw1a4jGm2F.jpg",
    tagline: "The banned film by Jacques Rivette",
    description:
      "In eighteenth-century France, a girl is forced against her will to take vows as a nun. Three mothers superior treat her in radically different ways, ranging from maternal concern, to sadistic persecution, to lesbian desire.",
    isSaved: false,
  },
];

// ---------------------------------------------
// NAVBAR TOGGLE SECTION
// ---------------------------------------------

// Handles toggling the visibility of the navbar menu in smaller screens
const toggleMenuButton = document.querySelector(".navbar__toggle-button");
const navbarLinksContainer = document.querySelector(".navbar__links");
const links = document.querySelectorAll(".navbar__link");

// Toggle the visibility of the navbar links on button click
toggleMenuButton.addEventListener("click", () => {
  navbarLinksContainer.classList.toggle("navbar__link--active");
});

// Highlight the active navbar link on click
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    links.forEach((link) => link.classList.remove("navbar__link--active"));
    e.currentTarget.classList.add("navbar__link--active");
  });
});

// ---------------------------------------------
// DISCOVER PAGE SECTION
// ---------------------------------------------

// Renders film categories (carousels) when the page loads
document.addEventListener("DOMContentLoaded", () => {
  renderCategory("Recommended", "recommended-carousel");
  renderCategory("New Releases", "new-releases-carousel");
  renderCategory("Top Rated", "top-rated-carousel");
  renderCategory("Classics", "classics-carousel");
});

// Checks if the Saved Films container exists and loads saved films
if (document.querySelector(".saved__films")) {
  loadSavedFilms();
}

// Renders a carousel for a specific film category
function renderCategory(category, carouselId) {
  const carousel = document.getElementById(carouselId);
  if (!carousel) {
    return; // Exit if the carousel element is not found
  }

  // Filter films by category
  const filteredFilms = films.filter((film) => film.category === category);

  // Generate cards for each film in the category
  filteredFilms.forEach((film) => {
    const card = document.createElement("div");
    card.classList.add("film__card");

    const image = document.createElement("img");
    image.src = film.image;
    image.alt = film.title;

    const title = document.createElement("p");
    title.textContent = film.title;

    // Open modal with film details on card click
    card.addEventListener("click", () => openModal(film));

    card.append(image, title);
    carousel.appendChild(card);
  });
}

// ---------------------------------------------
// MODAL SECTION
// ---------------------------------------------

// Opens a modal with detailed film information
function openModal(film) {
  const modal = document.querySelector(".modal");

  // Populate modal with film details
  modal.querySelector(".modal__image img").src = film.image;
  modal.querySelector(".modal__image img").alt = film.title;
  modal.querySelector(".modal__content--title").textContent = film.title;
  modal.querySelector(
    ".modal__content--director"
  ).textContent = `Dir. ${film.director}`;
  modal.querySelector(".modal__content--tagline").innerHTML = film.tagline
    ? `<i>${film.tagline}</i>`
    : "";
  modal.querySelector(".modal__content--description").textContent =
    film.description;
  modal.querySelector(
    ".modal__content--details"
  ).textContent = `${film.country} | ${film.year} | ${film.rating}`;

  // Configure Save/Remove button based on film's saved status
  const saveButton = modal.querySelector(".modal__content--save-btn");
  const savedFilms = JSON.parse(localStorage.getItem("savedFilms")) || [];
  const isAlreadySaved = savedFilms.some(
    (savedFilm) => savedFilm.title === film.title
  );

  saveButton.textContent = isAlreadySaved ? "REMOVE" : "SAVE";
  saveButton.onclick = () => {
    toggleSaveFilm(film);
    saveButton.textContent = isAlreadySaved ? "SAVE" : "REMOVE";
    loadSavedFilms(); // Refresh the saved films display
  };

  // Show the modal
  document.querySelector(".modal__container").style.display = "flex";
}

// Closes the modal
function closeModal() {
  document.querySelector(".modal__container").style.display = "none";
}

// Add click functionality to the modal's close button
document.addEventListener("DOMContentLoaded", () => {
  const closeButton = document.querySelector(".modal__close-btn");
  if (closeButton) closeButton.addEventListener("click", closeModal);
});

// Saves or removes a film from the saved films list
function toggleSaveFilm(film) {
  const savedFilms = JSON.parse(localStorage.getItem("savedFilms")) || [];
  const isAlreadySaved = savedFilms.some(
    (savedFilm) => savedFilm.title === film.title
  );

  const updatedSavedFilms = isAlreadySaved
    ? savedFilms.filter((savedFilm) => savedFilm.title !== film.title) // Remove film
    : [...savedFilms, film]; // Save film

  localStorage.setItem("savedFilms", JSON.stringify(updatedSavedFilms));
}

// ---------------------------------------------
// HIGHLIGHTED FILMS MODAL SECTION
// ---------------------------------------------

// Opens the modal for a specific highlighted film on the Hero section
document.addEventListener("DOMContentLoaded", () => {
  const highlightFilm = document.querySelector(".hero__content h2");
  if (!highlightFilm) return; // Exit if the hero film element is not present

  highlightFilm.addEventListener("click", () => {
    const highlightedFilm = films.find(
      (film) => film.title === "THE PIANO TEACHER"
    );
    if (highlightedFilm) openModal(highlightedFilm);
  });
});

// Opens the modal for a highlighted film outside of the Hero section
document.addEventListener("DOMContentLoaded", () => {
  const highlightFilm = document.querySelector(".films__cards--highlight");
  if (!highlightFilm) return; // Exit if the highlight film card is not present

  highlightFilm.addEventListener("click", () => {
    const highlightedFilm = films.find((film) => film.title === "CRASH");
    if (highlightedFilm) openModal(highlightedFilm);
  });
});

// ---------------------------------------------
// SAVED FILMS PAGE SECTION
// ---------------------------------------------

// Loads and displays saved films on the Saved Films page
function loadSavedFilms() {
  const savedFilms = JSON.parse(localStorage.getItem("savedFilms")) || [];
  const savedFilmsContainer = document.querySelector(
    ".saved-films__grid-container"
  );

  // If the container does not exist, exit the function
  if (!savedFilmsContainer) {
    return;
  }

  // Clear existing content
  savedFilmsContainer.innerHTML = "";

  if (savedFilms.length === 0) {
    // Show placeholder if no films are saved
    savedFilmsContainer.innerHTML = `<p class="no-saved-films">No films saved.</p>`;
    return;
  }

  // Generate cards for each saved film
  savedFilms.forEach((film) => {
    const card = document.createElement("div");
    card.classList.add("film__card");

    const image = document.createElement("img");
    image.src = film.image;
    image.alt = film.title;

    const title = document.createElement("p");
    title.textContent = film.title;

    // Open modal on card click
    card.addEventListener("click", () => openModal(film));

    card.append(image, title);
    savedFilmsContainer.appendChild(card);
  });
}

// ---------------------------------------------
// ALL FILMS PAGE SECTION
// ---------------------------------------------

// Renders all films on the All Films page with detailed cards
document.addEventListener("DOMContentLoaded", () => {
  if (allFilmsContainer) renderAllFilms();
});

// All Films container in the HTML
const allFilmsContainer = document.getElementById("all-films-container");

// Function to render all films in a grid format
function renderAllFilms() {
  allFilmsContainer.innerHTML = ""; // Clear existing content

  films.forEach((film) => {
    const card = document.createElement("article");
    card.classList.add("all-films__card");

    // Add data attributes for filtering and sorting
    card.setAttribute("data-title", film.title);
    card.setAttribute("data-director", film.director);
    card.setAttribute("data-country", film.country);
    card.setAttribute("data-year", film.year);
    card.setAttribute("data-rating", film.rating);
    card.setAttribute("data-genre", film.genre);

    // Create and append film image
    const image = document.createElement("img");
    image.src = film.image;
    image.alt = film.title;

    // Create and append content details
    const content = document.createElement("div");
    content.classList.add("card__content");

    const title = document.createElement("h3");
    title.textContent = film.title;

    const director = document.createElement("p");
    director.textContent = film.director;

    const country = document.createElement("p");
    country.textContent = film.country;

    const year = document.createElement("p");
    year.textContent = film.year;

    content.append(title, director, country, year);
    card.append(image, content);

    // Open modal on card click
    card.addEventListener("click", () => openModal(film));

    allFilmsContainer.appendChild(card);
  });
}

// ---------------------------------------------
// FILTER AND SORT FUNCTIONALITY SECTION
// ---------------------------------------------

// Function to update the list of film cards for filtering and sorting
function updateFilmCards() {
  return Array.from(allFilmsContainer.children); // Get all film cards in the container
}

// Filter films based on the selected genre
function filterFilms() {
  const selectedFilter = filterSelect.value;
  const filmCards = updateFilmCards();

  // Show or hide cards based on the selected genre
  filmCards.forEach((card) => {
    const genre = card.getAttribute("data-genre");
    card.style.display =
      selectedFilter === "all" || genre === selectedFilter ? "" : "none";
  });
}

// Sort films based on the selected attribute (e.g., title, year, rating)
function sortFilms() {
  const selectedSort = sortSelect.value;
  const filmCards = updateFilmCards();

  // Filter visible cards for sorting
  const visibleCards = filmCards.filter(
    (card) => card.style.display !== "none"
  );

  // Sort visible cards by the selected attribute
  visibleCards.sort((a, b) => {
    const valueA = a.getAttribute(`data-${selectedSort}`);
    const valueB = b.getAttribute(`data-${selectedSort}`);

    if (["title", "director", "country"].includes(selectedSort)) {
      return valueA.localeCompare(valueB); // Alphabetical sort
    } else if (["year", "rating"].includes(selectedSort)) {
      return Number(valueB) - Number(valueA); // Numerical sort
    }
  });

  // Append sorted cards back into the container
  visibleCards.forEach((card) => allFilmsContainer.appendChild(card));
}

// Event Listeners for Filter and Sort Dropdowns
const sortSelect = document.getElementById("sortSelect");
const filterSelect = document.getElementById("filterSelect");

if (sortSelect) {
  sortSelect.addEventListener("change", () => {
    sortFilms();
  });
}

if (filterSelect) {
  filterSelect.addEventListener("change", () => {
    filterFilms();
    sortFilms(); // Apply sorting after filtering to maintain order
  });
}

// ---------------------------------------------
// SEARCH PAGE FUNCTIONALITY SECTION
// ---------------------------------------------

// Input field and results container for the search page
const searchInput = document.getElementById("search");
const searchResults = document.querySelector(".search__results");
const startTypingMessage = document.getElementById("startTypingMessage");

// Renders films that match the search query
function renderMovies(moviesToRender) {
  searchResults.innerHTML = ""; // Clear existing results

  if (moviesToRender.length === 0) {
    const noMoviesMessage = document.createElement("p");
    noMoviesMessage.textContent = "NO FILMS FOUND";
    noMoviesMessage.classList.add("no-movies-message");
    searchResults.appendChild(noMoviesMessage);
    return;
  }

  moviesToRender.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("all-films__card");

    const image = document.createElement("img");
    image.src = movie.image;
    image.alt = movie.title;

    const cardContent = document.createElement("div");
    cardContent.classList.add("card__content");

    const title = document.createElement("h3");
    title.textContent = movie.title;

    const director = document.createElement("p");
    director.textContent = movie.director;

    const country = document.createElement("p");
    country.textContent = movie.country;

    const year = document.createElement("p");
    year.textContent = movie.year;

    cardContent.append(title, director, country, year);

    card.addEventListener("click", () => openModal(movie));

    card.append(image, cardContent);

    searchResults.appendChild(card);
  });
}

// Handles user input in the search bar
function handleSearch(query) {
  if (!query) {
    // Show the "Start Typing" message if no query is entered
    searchResults.innerHTML = "";
    startTypingMessage.style.display = "block";
    return;
  }

  // Hide the "Start Typing" message when input is provided
  startTypingMessage.style.display = "none";

  const filteredMovies = films.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(query.toLowerCase()) ||
      movie.director.toLowerCase().includes(query.toLowerCase()) ||
      movie.genre.toLowerCase().includes(query.toLowerCase()) ||
      movie.year.toString().includes(query) // Allow numeric searches for year
    );
  });

  renderMovies(filteredMovies);
}

// Event listener for search input changes
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");

  // Check if the search input exists
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.trim();
      handleSearch(query);
    });
  }
});

// Do not render anything initially and show the start typing message
document.addEventListener("DOMContentLoaded", () => {
  const searchResults = document.querySelector(".search__results");

  // Check if searchResults exists before modifying it
  if (searchResults) {
    searchResults.innerHTML = ""; // Clear existing results
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const startTypingMessage = document.getElementById("startTypingMessage");

  // Check if startTypingMessage exists before modifying it
  if (startTypingMessage) {
    startTypingMessage.style.display = "block";
  }
});
