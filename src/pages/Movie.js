import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams();

  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [id]);

  if (!details) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{details.title}</h1>
        <p>{details.time}</p>
        {details.genres.map((genre) => (
          <span key={genre}>{genre}</span>
        ))}
      </main>
    </>
  );
}

export default Movie;
