import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

export default function Product() {
  const [data, setData] = useState();

  const { id } = useParams();

  useEffect(() => {
    const productFetch = async (id) => {
      const productData = await fetch(`https://dummyjson.com/products/${id}`);
      const reault = await productData.json();
      if (reault) {
        setData(reault);
      }
    };
    productFetch(id);
  }, [id]);

  return (
    <div className="content h-100vh">
      <Helmet>
        <title>{data?.title}</title>
      </Helmet>
      <div className="flex gap-10">
        <img
          src={data?.images?.[0]}
          alt=""
          className="max-w-[45%] shadow-2xl border-[#8683836b] rounded-2xl border"
        />
        <div className="border">
          <p className="text-[40px] font-semibold">{data?.title}</p>
          <p></p>
        </div>
      </div>
    </div>
  );
}
