export function determineFranchise(cardName: string) {
  return franchiseArray.filter((franchise) => {
    const isInFranchise = franchise.characters.filter((character) => {
      const name = cardName.toLowerCase();
      return name.includes(character);
    });

    return isInFranchise.length;
  });
}

const franchiseArray = [
  {
    label: "101 Dalmations",
    characters: [],
  },
  {
    label: "Aladdin",
    characters: [],
  },
  {
    label: "Alice in Wonderland",
    characters: [],
  },
  {
    label: "Atlantis",
    characters: [],
  },
  {
    label: "Beauty & the Beast",
    characters: [],
  },
  {
    label: "Brother Bear",
    characters: [],
  },
  {
    label: "Cinderella",
    characters: [],
  },
  {
    label: "Duck Tales",
    characters: [],
  },
  {
    label: "Encanto",
    characters: [],
  },
  {
    label: "Fantasia",
    characters: [],
  },
  {
    label: "Frozen",
    characters: [],
  },
  {
    label: "Hercules",
    characters: [],
  },
  {
    label: "Lilo and Stitch",
    characters: [],
  },
  {
    label: "Lorcana",
    characters: [],
  },
  {
    label: "Mickey Mouse and Friends",
    characters: ["mickey", "donald", "goofy"],
  },
  {
    label: "Moana",
    characters: [],
  },
  {
    label: "Mulan",
    characters: [],
  },
  {
    label: "Peter Pan",
    characters: [],
  },
  {
    label: "Pinocchio",
    characters: [],
  },
  {
    label: "Raya and the Last Dragon",
    characters: [],
  },
  {
    label: "Robin Hood",
    characters: [],
  },
  {
    label: "Sleeping Beauty",
    characters: [],
  },
  {
    label: "Snow White and the Seven Dwarfs",
    characters: [],
  },
  {
    label: "TaleSpin",
    characters: [],
  },
  {
    label: "Tangled",
    characters: [],
  },
  {
    label: "The Emperor's New Groove",
    characters: [],
  },
  {
    label: "The Great Mouse Detective",
    characters: [],
  },
  {
    label: "The Jungle Book",
    characters: [],
  },
  {
    label: "The Lion King",
    characters: [],
  },
  {
    label: "The Little Mermaid",
    characters: [],
  },
  {
    label: "The Princess and the Frog",
    characters: [],
  },
  {
    label: "The Rescuers",
    characters: [],
  },
  {
    label: "The Sword in the Stone",
    characters: [],
  },
  {
    label: "Treasure Planet",
    characters: [],
  },
  {
    label: "Winnie the Pooh",
    characters: [],
  },
  {
    label: "Wreck it Ralph",
    characters: [],
  },
  {
    label: "Zootopia",
    characters: [],
  },
];
