import React, { useEffect, useState } from "react";
import axios from "axios";
const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/properties");
        setProperties(res.data.data);
      } catch (error) {
        console.log("Error in fetching properties:", error);
      }
    };
    fetchProperties();
  }, []);

  return (
    <div>
      <h1>All Properties</h1>
      <div>
        {properties.map((property) => (
          <div key={property._id}>
            <h2>{property.title}</h2>
            <p>{property.description}</p>
            <p>Price: ₹{property.regularprice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
