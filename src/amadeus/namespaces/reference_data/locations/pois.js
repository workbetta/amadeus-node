import BySquare from './points_of_interest/by-square';

/**
 * A namespaced client for the
 * `/v1/reference-data/locations/pois` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.locations.pointsOfInterest;
 * ```
 *
 * @param {Client} client
 */
class pointsOfInterest {
  constructor(client, poisId) {
    this.client = client;
    this._poisId = poisId;
    this.bySquare = new BySquare(client);
  }

  /**
   * Returns a list of relevant points of interest near to a given point
   * OR Extracts the information about point of interest with given ID
   *
   * @param {Object} params
   * @param {Double} params.latitude latitude location to be at the center of
   *   the search circle - required
   * @param {Double} params.longitude longitude location to be at the center of
   *   the search circle - required
   * @param {Double} params.radius radius of the search in Kilometer - optional
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find relevant points of interest close to Barcelona
   *
   * ```js
   * amadeus.referenceData.locations.pointsOfInterest.get({
   *   longitude: 2.160873,
   *   latitude: 41.397158
   * });
   * ```
   *
   * Extract the information about point of interest with ID '9CB40CB5D0'
   * ```js
   * amadeus.referenceData.locations.pointsOfInterest('9CB40CB5D0').get();
   * ```
   */
  get(params = {}) {
    if (this._poisId) {
      return this.client.get(`/v1/reference-data/locations/pois/${this._poisId}`);
    }
    return this.client.get('/v1/reference-data/locations/pois', params);
  }
}

export default pointsOfInterest;
