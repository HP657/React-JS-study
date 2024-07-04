import axios from 'axios';
import { useEffect, useState } from 'react';
import Movie from '../components/Movie';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const url =
      'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year';
    const res = await axios.get(url);
    setMovies(res.data.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
              showLink={true}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
