// There is only one more ingredient that you need to keep in mind
//  when working with React, namely, that fetching data from a third-party API is considered a side-effect.
//  Therefore, you should use the useEffect hook to fetch data from an API.
import React, { useState, useEffect } from "react";

export default function FirstFetch() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
    return (
        <div>
            <h1>Fetch Data</h1>
            {data.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
    )
};
