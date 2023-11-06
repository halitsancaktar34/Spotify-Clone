// Html'den gelenler
export const ele = {
  list: document.querySelector('#list'),
  playingInfo: document.querySelector('.playing'),
  searchForm: document.querySelector('#search-form'),
  title: document.querySelector('.songs #title'),
};

// Arayüz işlemleri
export const renderCards = (songs) => {

  ele.list.innerHTML = '';

  songs.forEach((song) => {

    const div = document.createElement('div');

    div.dataset.url = song.hub?.actions.pop().uri;
    div.dataset.title = song.title;
    div.dataset.photo = song.images.coverart;

    div.className = 'card';

    div.innerHTML = `
            <figure>
              <img
                src="${song.images?.coverart}"
              />
              <div class="play">
                <i id="play-btn" class="bi bi-play-fill"></i>
              </div>
            </figure>
            <h4>${song.subtitle}</h4>
            <p>${song.title}</p>
    `;

    ele.list.appendChild(div);
  });
};

export const renderPlayingInfo = (data) => {
  ele.playingInfo.innerHTML = `
      <div class="info ">
        <img
        class="animate"
          src="${data.photo}"
        />
        <div>
          <p>Şuan Oynatilıyor</p>
          <h3>${data.title}</h3>
        </div> 
      </div>

      <audio controls autoplay>
        <source
          src="${data.url}"
        />
      </audio>
  `;
};

export const renderLoader = () => {
  ele.list.innerHTML = `
 <div class="cssload-container">
   <ul class="cssload-flex-container">
      <li>
         <span class="cssload-loading cssload-one"></span>
         <span class="cssload-loading cssload-two"></span>
         <span class="cssload-loading-center"></span>
      </li>
   </ul>
</div>

  `;
};