import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';

const axiosBasicConfig: AxiosRequestConfig = {
  baseURL: `/dummy`
};

const clientRequest = axios.create(axiosBasicConfig);

const createGetRequest = (url: string, body?: object) => clientRequest.get(url, body).then((r) => r.data);

export const getMenu = () => createGetRequest(`/Dummy.json`);

/*
kofic 영화진흥위원회 API 
http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json : 일별 박스오피스 ( 어제날짜 검색)
http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json : 주간/주말 박스오피스 ( 검색조건에 맞는 날짜 검색 )
http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json : 영화 검색


const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API_HOST}`,
  params: {
    key: `${import.meta.env.VITE_APP_API_KEY}`
  }
});

export const getSearchMovieListApi = (params: any) => axiosInstance.get('/movie/searchMovieList.json', params);
*/

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API_ANOTHER_HOST}/${import.meta.env.VITE_APP_API_ANOTHER_VERSION}`,
  params: {
    api_key: import.meta.env.VITE_APP_API_ANOTHER_KEY,
    language: 'ko-KR'
  }
});

export const onTheAirApi = () => axiosInstance.get('/tv/on_the_air');

//export const latestApi = () => axiosInstance.get('/movie/latest');

// export const upcomingApi = () => axiosInstance.get('/movie/upcoming');

// export const nowPlayingApi = () => axiosInstance.get('/movie/now_playing');

// export const topRatedApi = () => axiosInstance.get('/movie/top_rated');

// export const popularApi = () => axiosInstance.get('/movie/popular');

// export const detailApi = (movieId: string) => axiosInstance.get(`/movie/${movieId}`);

// export const similarApi = (id: string) => axiosInstance.get(`/movie/${id}/similar`);

// export const searchApi = (query: string) => axiosInstance.get(`/search/movie?query=${query}`);

// export const latestApi = () => axiosInstance.get('/tv/latest');

// export const airingTodayApi = () => axiosInstance.get('/tv/airing_today');

// export const popularApi = () => axiosInstance.get('/tv/popular');

// export const topRatedApi = () => axiosInstance.get('/tv/top_rated');

// export const detailApi = (id: string) => axiosInstance.get(`/tv/${id}`);

// export const similarApi = (id: string) => axiosInstance.get(`/tv/${id}/similar`);

// export const searchApi = (query: string) => axiosInstance.get(`/search/tv?query=${query}`);
