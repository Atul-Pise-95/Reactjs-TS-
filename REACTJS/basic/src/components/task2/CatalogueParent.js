import React, { useEffect, useState } from "react";
import CategoryChild from "./CategoryChild";
import ProductListChild from "./ProductListChild";

const CatalogueParent = () => {
  const [rawProducts, setRawProducts] = useState({
    laptop: [
      {
        Price: 16000,
        brand: "Dell",
        model: "BT432",
        pic1: "https://apollo-singapore.akamaized.net/v1/files/t89jqw6hlp0i1-IN/image;s=300x300;q=60",
      },

      {
        Price: 19000,
        brand: "Hp",
        model: "123gf",
        pic1: "https://apollo-singapore.akamaized.net/v1/files/wshl66wk02cl2-IN/image;s=300x300;q=60",
      },
      {
        Price: 31000,
        brand: "Apple",
        model: "S22",
        pic1: "https://apollo-singapore.akamaized.net/v1/files/93d2skeu2bsk-IN/image;s=300x600;q=60",
      },
      {
        Price: 21000,
        brand: "lenovo",
        model: "fgh12Pro",
        pic1: "https://apollo-singapore.akamaized.net/v1/files/l39y5xxopfus2-IN/image;s=780x0;q=60",
      },
    ],
    cars: [
      {
        Price: 300000,
        brand: "Mahindra",
        model: "Inspiron5520",
        pic1: "https://apollo-singapore.akamaized.net/v1/files/kkkl21p4qecn-IN/image;s=300x600;q=60",
      },
      {
        Price: 400000,
        brand: "Hundai",
        model: "hjk23",
        pic1: "https://apollo-singapore.akamaized.net/v1/files/pvvs46kmz64e3-IN/image;s=132x0",
      },
      {
        Price: 1400000,
        brand: "Tata",
        model: "Len23456",
        pic1: "https://apollo-singapore.akamaized.net/v1/files/03rv0yn0sz8g-IN/image;s=780x0;q=60",
      },
      {
        Price: 805000,
        brand: "Maruti",
        model: "Ace23245",
        pic1: "https://apollo-singapore.akamaized.net/v1/files/thqory0l4r3o1-IN/image;s=780x0;q=60",
      },
    ],
    mobile: [
      {
        Price: 13000,
        brand: "Vivo",
        model: "pro-one6",
        pic1: "https://apollo-singapore.akamaized.net/v1/files/zvi68o8os4s9-IN/image;s=300x600;q=60",
      },
      {
        Price: 17000,
        brand: "samsung",
        model: "SW300",
        pic1: "https://apollo-singapore.akamaized.net/v1/files/fn4m96wsbjru-IN/image;s=300x600;q=60",
      },
      {
        Price: 13000,
        brand: "realMe",
        model: "NS543",
        pic1: "https://apollo-singapore.akamaized.net/v1/files/5xyho4aokagk2-IN/image;s=300x600;q=60",
      },
      {
        Price: 33000,

        brand: "Apple",
        model: "BT500",
        pic1: "https://apollo-singapore.akamaized.net/v1/files/87riobc93jxo2-IN/image;s=780x0;q=60",
      },
    ],
  });
  const [categoryList, setCategoryList] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const arr = Object.values(rawProducts).flat(Infinity);

    console.log(arr);
    setProducts(arr);
    const cats = Object.keys(rawProducts);
    setCategoryList(cats);
  }, []);

  const filterByCategory = (category) => {
    if (category != "all") {
      const prods = rawProducts[category];
      prods && setProducts(prods);
    } else {
      // get all products
      const arr = Object.values(products).flat(Infinity);
      setProducts(arr);
    }
  };
  return (
    <div style={{ display: "flex" }}>
      <CategoryChild items={categoryList} filter={filterByCategory} />
      <ProductListChild items={products} />
    </div>
  );
};

export default CatalogueParent;
