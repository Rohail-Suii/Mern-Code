import React from 'react'

export default function Map() {
    const data = [
        {
          id: 1,
          name: "John",
          age: 24,
          image: "https://randomuser.me/api/portraits/men/75.jpg",
        },
        {
          id: 2,
          name: "Bob",
          age: 25,
          image: "https://randomuser.me/api/portraits/men/75.jpg",
        },
      ];
    
      const people = data.map((person) => {
        const name1=`${person.name} - ${person.age}`
        
        return <li>{name1}</li>
        
      });
      
}