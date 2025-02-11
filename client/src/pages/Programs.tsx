import { useLoaderData } from "react-router-dom";

interface Film {
  id: number;
  title: string;
  poster: string;
  synopsis: string;
  country: string;
  year: number;
}

function Program() {
  const filmDatas = useLoaderData() as Film[];

  console.info("result : ,", filmDatas);

  return (
    <div>
      <h1>Mes series</h1>
      <div>
        {filmDatas.map((filmData) => (
          <figure key={filmData.id}>
            <h2>{filmData.title}</h2>
            <img src={filmData.poster} alt={filmData.title} />
            <figcaption>
              <p>{filmData.synopsis}</p>
              <p>{filmData.country}</p>
              <p>{filmData.year}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default Program;
