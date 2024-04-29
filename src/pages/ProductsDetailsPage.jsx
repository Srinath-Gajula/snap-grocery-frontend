import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ProductDetails from "../components/Products/ProductDetails";
import { useParams } from "react-router-dom";
import { productData } from "../static/data";
import SuggestedProduct from "../components/Products/SuggestedProduct";

const ProductsDetailsPage = () => {
    const [data,setData] = useState(null);
    // const productName = name.replace(/-/g," ");
    const params = useParams();

    // Access the specific parameter you need
   
    useEffect(() => {
      const {name} = params;

      const data = productData.find((i) => {
        console.log("i.id name",i.id,name)
        return i.id === name});
      setData(data);   
      console.log("name,dat",name,data,name)

    }, [])
    
  return (
    <div>
      <Header />
     {data && <ProductDetails data={data} />} 
      {
        data && < SuggestedProduct data={data} />
      }
      <Footer />
    </div>
  );
};

export default ProductsDetailsPage;
