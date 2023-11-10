import housings from './logements.json';
import type { Housing } from '../types/kasa';

export async function getHousings() {
    return housings as Housing[];
}

export async function getHousing(id: string) {
    const housing = housings.find((housing) => housing.id === id);
    return housing as Housing ?? null;
}
