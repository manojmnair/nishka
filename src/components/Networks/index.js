import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "use-http";

function Networks() {
  const [items, setItems] = useState([]);
  const options = {}; // these options accept all native `fetch` options
  // the last argument below [] means it will fire onMount (GET by default)
  const { get, post, response, loading, error } = useFetch(
    "https://api.covalenthq.com/v1"
  );
  //const { loading, error, data = [] } = useFetch("https://api.covalenthq.com/v1", options, [])

  useEffect(() => {
    loadValues();
  }, []);

  async function loadValues() {
    const initialValues = await get(
      "/chains/status/?key=ckey_1c6f53f06c66463293404d69ead"
    );
    const data = await response.json();
    if (response.ok) setItems(data.data.items);
  }

  // console.log(items)
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.chain_id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Networks;
