// utils/searchHandler.js

const products = [
  { id: 1, name: "T-shirt", category: "Men" },
  { id: 2, name: "Dress", category: "Women" },
  { id: 3, name: "Shoes", category: "Accessories" },
  // Add more products here
];

const handleSearch = (query) => {
  if (!query) {
    console.log("Please enter a search query");
    return;
  }

  const results = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  if (results.length > 0) {
    console.log("Search Results:", results);
  } else {
    console.log("No products found matching:", query);
  }
};

export default handleSearch;
