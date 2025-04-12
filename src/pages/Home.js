import React, { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from '../components/Product'
import Hero from '../components/Hero'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const { products } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "men's clothing", "women's clothing", "jewelery"];

  // Filter based on selected category
  const filteredProducts = products.filter((item) => {
    return selectedCategory === "all" || item.category === selectedCategory;
  });

  return (
    <div>
      <Header />
      <Hero />
      <section className="py-20">
        <div className="container mx-auto">
          {/* Heading and Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 px-4">
            <h1 className="text-3xl font-semibold text-center md:text-left mb-4 md:mb-0">
              Explore Our Products
            </h1>
            <div className="w-full md:w-auto">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 px-4 py-2 rounded-md shadow-sm text-sm"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
      <Sidebar />
      <Footer />
    </div>
  );
};

export default Home;
