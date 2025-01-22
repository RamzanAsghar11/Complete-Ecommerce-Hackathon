// lib/queries.js
import { client } from "./client";


// Fetch a product by its ID
export const getProductById = async (id: string) => {
  const query = `*[_type == "product" && _id == $id][0] { 
  _id,
    title,
    price,
    description,
    "imageSrc": imageSrc.asset->url ,
    size,
    colors,
    sku,
    "category": category->title,
    tags
  }`;

  return await client.fetch(query, { id });
};

// Fetch all products
export async function getAllProducts() {
  const query = `*[_type == "product"]| order(_createdAt asc
) {
    _id,
    title,
    price,
    description,
    "imageSrc": imageSrc.asset->url 
  }`;
  
  const products = await client.fetch(query);
  return products;
}




export async function getfourProducts() {
  const query = `*[_type == "product"][0..3] | order(_createdAt asc) {
    _id,
    title,
    price,
    description,
    "imageSrc": imageSrc.asset->url 
  }`;
  
  // Return the fetched data
  return await client.fetch(query);
}


// Fetch all categories
export const getCategories = async () => {
  const query = `*[_type == "category"] { _id, title }`;
  return await client.fetch(query);
};

// Fetch products by category
export const getProductsByCategory = async (categoryTitle: string) => {
    const query = `*[_type == "product" && category->title == $categoryTitle] | order(_createdAt asc) {
        _id,
        title,
        price,
        description,
        "imageSrc": imageSrc.asset->url
    }`;
    return await client.fetch(query, { categoryTitle }); 
};






