// import {AXIOS} from "./axiosConfig";
//
//
// class MovieService{
//     async getMovies(){
//         const { data } = await AXIOS.get('/discover/movie')
//         return  data
//     }
//
//     async getMovieById(id){
//         const { data } = await AXIOS.get(`/movie/${id}`)
//         return  data
//     }
// }
//
//
// export const movieService = new MovieService();


import {AXIOS} from "./axiosConfig";

class MovieService {
    async getMovies() {
        const {data} = await AXIOS.get(`/discover/movie`);
        // throw new Error(`bidovo`)
        return data
    }

    async getMovieById(id) {
        const {data} = await AXIOS.get(`/movie/${id}`);
        return data
    }
}

export const movieService = new MovieService();