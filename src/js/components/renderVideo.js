import renderCard from "./renderCard.js";
import { getTriends, getVideo } from "./services.js";



const filmWeek = document.querySelector('.film-week');

const firstRender = (data, { key }) => {

    filmWeek.innerHTML = `
        <div class="container film-week__container" data-rating="${data.vote_average}">
            <div class="film-week__poster-wrapper">
                <img class="film-week__poster" src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data.backdrop_path}" alt="постер ${data.name || data.title}">
                <p class="film-week__title_origin">${data.original_title || data.original_name}</p>
            </div>
            <h2 class="film-week__title">${data.title || data.name}</h2>
            ${key ? `<a class="film-week__watch-trailer tube" href="https://youtu.be/${key}" aria-label="смотреть трейлер"></a>` : ''}
            
        </div>
    `;

};

const renderVideo = async () => {
    const data = await getTriends();
    
    const [firstCard, ...otherCard] = data.results;
    otherCard.length = 12;

    const video = await getVideo(firstCard.id, firstCard.media_type);

    firstRender(firstCard, video.results[0]);
    renderCard(otherCard);
}

export default renderVideo;