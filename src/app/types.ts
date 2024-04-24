export type Movie = {
    adult: boolean;
    backdrop_path: string | null;
    genres: Genre[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: false;
    vote_average: number;
    vote_count: number;
    runtime : number
  };
  
  export type MoviesRequest = {
    page : number
    results : Movie[]
    total_pages : number
    total_results : number
  }

  export type Genre = {
    id : number
    name: string
  }