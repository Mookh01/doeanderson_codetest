
import useFetch from "react-fetch-hook";
import './App.css';
import User from './Components/User';
import Form from './Components/Form';

export default function App() {

  const { isLoading, error, data } = useFetch("https://randomuser.me/api");

  if (isLoading) return "Loading...";
  if (error) return "Error!";

  return (
    <>
    <div className="grid_items">
      <img src={data.results[0].picture.large} alt="random user" />
      <User data = {data} ></User>
      <Form></Form>
    </div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

