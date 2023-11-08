import housings from './logements.json';

/**
 * Get all housings
 * @returns {Promise<{}>}
 */
export async function getHousings() {
    return housings;
}

/**
 * Get a housing by id
 * @param id {string}
 * @returns {Promise<*>}
 */
export async function getHousing(id) {
    return housings.find((housing) => housing.id === id);
}
