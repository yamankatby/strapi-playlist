import { useParams } from "react-router-dom";
import Review from "../components/Review";
import useFetch from "../hooks/useFetch";

export default function ProductDetails() {
  const { id } = useParams();

  const { isLoading, error, data } = useFetch(
    "http://localhost:1337/api/products/" + id
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto p-12">
      <h1 className="text-3xl">{data.data.attributes.name}</h1>
      <code className="text-blue-500 mt-2 block">
        {data.data.attributes.price.toLocaleString("tr-TR", {
          style: "currency",
          currency: "TRY",
        })}
      </code>
      <p className="mt-4 text-gray-700">{data.data.attributes.details}</p>
      <Review productId={id} />
    </div>
  );
}
