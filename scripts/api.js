import { url, options } from './constants.js';
import { renderCards } from './ui.js';

// api işlemler
export class API {
  constructor() {
    this.songs = [];
  }

  async getPopular() {
    try {

      const res = await fetch(url, options);
      const data = await res.json();

      this.songs = data.tracks;
    } catch (err) {
      console.log('Popüler verleri alırken hata oluştu..', err);
    }
  }

  async searchMusic(query) {
    const res = await fetch(
      `https://shazam.p.rapidapi.com/search?term=${query}&locale=TR&offset=0&limit=20`,
      options
    );

    const data = await res.json();

    const newData = data.tracks.hits.map((song) => ({
      ...song.track,
    }));

    renderCards(newData);
  }
}