// // Server Side Rendering
// import React from "react";

// const Home = ({ products }) => {
//   console.log(products);

//   const productList = products.map((product) => {
//     return <p>{product.title}</p>;
//   });

//   return (
//     <>
//       <div>{productList}</div>
//     </>
//   );
// };

// export default Home;

// // This function will call on server side
// export async function getServerSideProps() {
//   console.log("get data at server");

//   // you can use axios also
//   const response = await fetch("https://dummyjson.com/products");
//   const data = await response.json();

//   return {
//     props: {
//       products: data.products,
//     },
//   };
// }

// Static Generation
// export default function StaticComponent({ products }) {
//   const productList = products.map((product) => {
//     return <p>{product.title}</p>;
//   });
//   return <>{productList}</>;
// }

// export async function getStaticProps() {
//   console.log("get static props");
//   const response = await fetch("https://dummyjson.com/users");
//   const data = await response.json();

//   return {
//     props: {
//       products: data.products,
//     },
//   };
// }

// Incremental static generation
// import path from "path";
// import fsPromises from "fs/promises";

// export default function StaticComponent({ recipes }) {
//   const recipeList = recipes.map((recipe) => {
//     return <p>{recipe.strCategory}</p>;
//   });
//   return <>{recipeList}</>;
// }

// export async function getStaticProps() {
//   // read a file in backend (nodejs)
//   console.log("data changed");
//   const filePath = path.join(process.cwd(), "recipedata/recipes.json");
//   const data = await fsPromises.readFile(filePath);

//   const recipes = JSON.parse(data);

//   return {
//     props: {
//       recipes,
//     },
//     // 30 seconds
//     revalidate: 30,
//   };
// }

// client side renderding
// import React from "react";
// import { useEffect } from "react";

// const index = () => {
//   useEffect(() => {}, []);
//   return <div></div>;
// };

// export default index;

// SWR (client side rendering)
import React from "react";
import useSWR from "swr";

const index = () => {
  const fetcher = (api) => fetch(api).then((res) => res.json());
  const { data } = useSWR("https://dummyjson.com/users", fetcher);
  console.log(data);
  return <div></div>;
};

export default index;
