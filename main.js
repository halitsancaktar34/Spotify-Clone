import { API } from './scripts/api.js';
import {
  ele,
  renderCards,
  renderLoader,
  renderPlayingInfo,
} from './scripts/ui.js';

const api = new API();

document.addEventListener('DOMContentLoaded', async () => {
  renderLoader();
  await api.getPopular();
  renderCards(api.songs);
});

ele.list.addEventListener('click', (e) => {
  if (e.target.id === 'play-btn') {

    const parent = e.target.closest('.card');

    renderPlayingInfo(parent.dataset);
  }
});

ele.searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const query = e.target[0].value;

  if (!query) return;

  renderLoader();

  ele.title.innerHTML = `${query} İçin Sonuçlar`;

  api.searchMusic(query);
});