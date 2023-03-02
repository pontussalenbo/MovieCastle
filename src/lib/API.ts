const BASE_URL = "http://api.themoviedb.org/3/";
const IMG_URL = "https://themoviedb.org/t/p/w600_and_h900_bestv2/";
const lang = "en-US";

const API_KEY = "6033bfed65d4a6a4298f8e6d23b99790";

const genQuery = (query: string) => {
    return `${BASE_URL}${query}&api_key=${API_KEY}&language=${lang}`;
}

const genReqQuery = (query: string) => {
    return `${BASE_URL}${query}?api_key=${API_KEY}&language=${lang}`;
}

const getGenres = async (ids: number[]) => {
    const query = `genre/movie/list`;
    const resp = await fetchAPI(genReqQuery(query));
    const genres = resp.genres
        .filter((genre: any) => ids.includes(genre.id))
        .map((genre: any) => genre.name);
    return genres;
}

export const getAvailableGenres = async () => {
    const query = `genre/movie/list`;
    const resp = await fetchAPI(genReqQuery(query));
    return resp.genres;
}

export const getPopular = async () => {
    const query = `movie/popular?region=SE`;
    const resp = await fetchAPI(genQuery(query));

    const data = resp.results.map(async (movie: any) => {
        return getGenres(movie.genre_ids)
            .then(d => ({
                id: movie.id,
                title: movie.title,
                genres: d,
                poster: IMG_URL + movie.poster_path,
                date: movie.release_date.split("-")[0],
            }));
    })
    return Promise.all(data);
}

export const getByTitle = async (title: string) => {
    const query = `search/movie?query=${title}`;
    const resp = await fetchAPI(genQuery(query));

    const data = resp.results.map(async (movie: any) => {
        return getGenres(movie.genre_ids)
            .then(d => ({
                id: movie.id,
                title: movie.title,
                genres: d,
                poster: IMG_URL + movie.poster_path,
                date: movie.release_date.split("-")[0],
            }));

    })
    return Promise.all(data);
}

export const getTrailerURL = async(id: string) => {
    const query = `movie/${id}/videos`;
    const resp = await fetchAPI(genReqQuery(query));
    const trailer = resp.results.find((res: any) => res.type === "Trailer" && res.site === "YouTube" && res.name === "Official Trailer");
    return `https://www.youtube-nocookie.com/embed/${trailer.key}`;
    
}

export const getMovieInfo = async (id: string) => {
    const query = `movie/${id}`;
    return fetchAPI(genReqQuery(query));
}

export const getMoviesByGenre = async (genres: any[]) => {
    const query = `discover/movie?sort_by=popularity.desc&include_adult=false&page=1&with_genres=${genres.map(g => g.id).join(",")}`
    const resp = await fetchAPI(genQuery(query));
    const data =  resp.results.map(async (movie: any) => {
        return getGenres(movie.genre_ids)
            .then(d => ({
                id: movie.id,
                title: movie.title,
                genres: d,
                poster: IMG_URL + movie.poster_path,
                date: movie.release_date.split("-")[0],
            }));
    });

    return Promise.all(data);
}



const fetchAPI = async (query: string) => {
    const res = await fetch(query);
    const data = await res.json();
    return data;
}