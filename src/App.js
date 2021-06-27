
import useFetch from "react-fetch-hook";
import './App.css';

export default function App() {

  const { isLoading, error, data } = useFetch("https://randomuser.me/api");

  if (isLoading) return "Loading...";
  if (error) return "Error!";

  return (
    <>
    <div className="grid_items">
      <img src={data.results[0].picture.large} alt="random user" />
    </div>
    <h1>{data.results[0].name.first} {data.results[0].name.last}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

