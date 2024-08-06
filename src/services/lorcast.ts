const baseURL = "https://api.lorcast.com";
import type { Column } from '@/utils/csv.util';
import http from '../utils/http.util';

export async function ImportSets() {
  return await http.get(`${baseURL}/v0/sets`);
}

export async function ImportCardsForSet(setId: number) {
  return await http.get(
    `${baseURL}/v0/cards/search?q=set:${setId}`
  );
}

const cardColumns: Column[] = [
    {
        key: 'name',
        heading: 'Name'
    }
]

export function mapCards(card: any) {
    const urls = card.image_uris.digital;
    const imageUrl = urls.normal || urls.large || urls.small;

    return {
      name: card.name,
    //   setId: set.id,
    //   setCode: set.code,
      setNumber: card.collector_number,
      inkColor: card.ink,
      isInkable: card.inkwell,
      version: card.version || "",
      cost: card.cost,
      strength: card.strength,
      willpower: card.willpower,
      lore: card.lore,
      moveCost: card.move_cost,
    //   text: card.text,
    //   flavorText: card.flavor_text,
      imageUrl,
    //   releasedAt: new Date(card.released_at),
      rarity: card.rarity,
      tcgplayerId: card.tcgplayer_id,
    };
  };