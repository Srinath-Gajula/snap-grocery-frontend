import React, { useEffect, useState } from "react";
import { useSearchParams,useParams } from "react-router-dom";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import { productData } from "../static/data";
import ProductCard from "../components/Route/ProductCard/ProductCard";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const params = useParams();
  const categoryData = searchParams.get("category");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (categoryData === null) {

      const d =  productData && productData.sort((a, b) => a.total_sell - b.total_sell);
//       const { name } = params;
// console.log("productData searcher",productData)
//       const d =  productData.filter(data=>data.id===name)
//       console.log("productData searcher2",d)


      setData(d);
    } else {
      const d =
        productData && productData.filter((i) => i.category === categoryData);
      setData(d);
    }
    //    window.scrollTo(0,0);
  }, []);
  return (
    <div>
      <Header activeHeading={3} />
      <br />
      <br />
      <div className={"${styles.section}"}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
        {data && data.length === 0 ? (
          <h1 className="text-center w-full pb-[100px] text-[20px]">
            No products Found!
          </h1>
        ) : null}
      </div>
    </div>
  );
};

export default ProductsPage;
