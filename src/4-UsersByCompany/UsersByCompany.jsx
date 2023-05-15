import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export function UsersByCompany() {
  const [userData, setUserData] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState("all");

  const getData = async (url) => {
    try {
      const { status, data } = await fakeFetch(url);
      if (status === 200) {
        setUserData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData("https://example.com/api/users");
  });

  const filteredUsersByCompany =
    selectedCompany === "all"
      ? userData
      : userData.filter(({ company }) => company === selectedCompany);

  const handleSelectedYear = (e) => {
    setSelectedCompany(e.target.value);
  };

  return (
    <div>
      <h2>Users By Company</h2>
      <div>
        Filter By Company:
        <select onChange={handleSelectedYear}>
          <option value="all">All</option>
          <option value="ABC Inc">ABC Inc</option>
          <option value="XYZ Corp">XYZ Corp</option>
          <option value="ACME Corp">ACME Corp</option>
        </select>
      </div>
      <ul>
        {filteredUsersByCompany.map(({ name, email, website, company }) => (
          <li key={name}>
            <h3>
              <b>Name: </b>
              {name}
            </h3>
            <p>
              <b>Email: </b>
              {email}
            </p>
            <p>
              <b>Website: </b>
              {website}
            </p>
            <p>
              <b>Company: </b>
              {company}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
