
import useFetch from "react-fetch-hook";
import './App.css';
import User from './Components/User';

export default function App() {

  const { isLoading, error, data } = useFetch("https://randomuser.me/api");

  if (isLoading) return "Loading...";
  if (error) return "Error!";

  return (
    <>
    <div className="grid_items">
      <img src={data.results[0].picture.large} alt="random user" />
      <User data = {data} ></User>
    </div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

