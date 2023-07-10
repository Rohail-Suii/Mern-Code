import React from "react";

function DessertsList() {
  const desserts = [
    {
      name: "Chocolate Cake",
      calories: 400,
      createdAt: "2022-09-01",
    },
    {
      name: "Ice Cream",
      calories: 200,
      createdAt: "2022-01-02",
    },
    {
      name: "Tiramisu",
      calories: 300,
      createdAt: "2021-10-03",
    },
    {
      name: "Cheesecake",
      calories: 600,
      createdAt: "2022-01-04",
    },
  ];

  const filteredDesserts = desserts.filter((dessert) => dessert.calories < 500);
  const sortedDesserts = filteredDesserts.sort((a, b) => a.calories - b.calories);

  return (
    <ul>
      {sortedDesserts.map((dessert) => (
        <li key={dessert.name}>
          {`${dessert.name} - ${dessert.calories} cal`}
        </li>
      ))}
    </ul>
  );
}

export default DessertsList;
