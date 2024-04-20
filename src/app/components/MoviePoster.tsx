type MoviePosterProps = {
  poster: string | null;
  vote_avg: number
};

export default function MoviePoster({ poster, vote_avg }: MoviePosterProps) {
  return (
    <>
      {poster ? (
        <div className="h-[400px] w-[300px] bg-gray-600 overflow-hidden group relative">
          <div className="bg-black/50 opacity-0 absolute z-10 text-black group-hover:opacity-100 transition-opacity size-full flex flex-col justify-center gap-8 items-center">
            <p className="text-2xl font-bold">
              <span className="text-purple-500">{vote_avg.toFixed(1)}</span><span className="text-gray-400">/10</span>
            </p>
            <em className="text-gray-300">Action, Sci-Fi, Adventure</em>
          </div>
          <img
            src={`https://image.tmdb.org/t/p/original${poster}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform"
          />
        </div>
      ) : (
        <div className="h-[400px] w-[300px] bg-gray-600 flex items-center justify-center">
          No Image Available
        </div>
      )}
    </>
  );
}