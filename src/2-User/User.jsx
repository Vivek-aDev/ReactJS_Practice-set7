import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export function User() {
  const [userData, setUserData] = useState({});
  const [showAddress, setShowAddress] = useState(false);

  const getData = async (url) => {
    try {
      const { status, data } = await fakeFetch(url);
      if (status === 200) {
        setUserData(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData("https://example.com/api/user");
  }, []);

  const { name, email, phone, address } = userData;

  return (
    <div>
      <h2>User</h2>
      <p>Name:{name}</p>
      <p>Email: {email}</p>
      <p>phone: {phone}</p>
      <button onClick={() => setShowAddress(!showAddress)}>
        {showAddress ? "Hide details" : "Show Details"}
      </button>
      {showAddress && (
        <div>
          <p>{address.street}</p>
          <p>{address.suite}</p>
          <p>{address.city}</p>
          <p>{address.zipcode}</p>
        </div>
      )}
    </div>
  );
}
