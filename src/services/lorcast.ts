const baseURL = "https://api.lorcast.com";
import type { Column } from "@/utils/csv.util";
import http from "../utils/http.util";
import { words, join, upperCase, sortBy } from "lodash";
import { determineFranchise } from "./franchise";

export async function ImportSets() {
  return await http.get(`${baseURL}/v0/sets`);
}

export async function ImportCardsBySet(setId: string) {
  return await http.get(`${baseURL}/v0/cards/search?q=set:${setId}`);
}

export const cardColumns: Column[] = [
  {
    key: "setCardNumber",
    heading: "#",
  },
  {
    key: "type",
    heading: "Type",
  },
  {
    key: "name",
    heading: "Name",
  },
  {
    key: "version",
    heading: "Version",
  },
  {
    key: "cost",
    heading: "Cost",
  },
  {
    key: "rarity",
    heading: "Rarity",
  },
  {
    key: "inkColor",
    heading: "Ink",
  },
  {
    key: "isInkable",
    heading: "Inkable?",
  },
  {
    key: "mainSet",
    heading: "Main?",
  },
  {
    key: "copies",
    heading: "Copies",
  },
  {
    key: "franchise",
    heading: "Franchise",
  },
];

export function mapCards(setCode: string, cards: any[]) {
  let refinedCards = cards.map((card: any) => {
    return mapCard(setCode, card);
  });

  return sortBy(refinedCards, ["setCardNumber"]);
}

function mapCard(setCode: string, card: any) {
  // const urls = card.image_uris.digital;
  // const imageUrl = urls.normal || urls.large || urls.small;

  // Turn Common into C & Super Rare into SR
  const rarityWords = words(card.rarity);
  const rarityInitials = rarityWords.map((word) => upperCase(word.charAt(0)));
  const rarity = join(rarityInitials, "");

  // Turn ['Action', 'Song'] into 'Song'
  let cardType = card.type;
  if (cardType.length > 1) {
    cardType = cardType.slice(-1)[0];
  } else {
    cardType = cardType[0];
  }

  // Turn 1 into 001
  let cardNumber = "" + card.collector_number;
  const pad = "000";
  cardNumber = pad.substring(0, pad.length - cardNumber.length) + cardNumber;
  const setCardNumber = `${setCode}-${cardNumber}`;

  // Get franchise
  let franchise: any = determineFranchise(card.name);
  if (franchise.length) franchise = franchise[0].label;

  return {
    setCardNumber,
    name: card.name,
    version: card.version || "",
    type: cardType,
    inkColor: card.ink,
    isInkable: card.inkwell,
    cost: card.cost,
    rarity,
    copies: "",
    mainSet: "",
    franchise,
    // strength: card.strength,
    // willpower: card.willpower,
    // lore: card.lore,
    // moveCost: card.move_cost,
    // text: card.text,
    // flavorText: card.flavor_text,
    // imageUrl,
    // releasedAt: new Date(card.released_at),
    // tcgplayerId: card.tcgplayer_id,
  };
}
