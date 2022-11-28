import { useCallback, useState } from "react";

export default function Review({ productId }) {
  const [userDisplayName, setUserDisplayName] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      await fetch("http://localhost:1337/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            userDisplayName: userDisplayName,
            body: body,
            product: productId,
          },
        }),
      });

      setUserDisplayName("");
      setBody("");
    },
    [userDisplayName, body]
  );

  return (
    <form
      className="flex flex-col max-w-md gap-4 mt-10"
      onSubmit={handleSubmit}
    >
      <input
        type="string"
        placeholder="Enter your name"
        value={userDisplayName}
        onChange={(e) => setUserDisplayName(e.currentTarget.value)}
        className="bg-gray-100 rounded-md p-4"
      />
      <textarea
        placeholder="Review"
        value={body}
        onChange={(e) => setBody(e.currentTarget.value)}
        className="bg-gray-100 rounded-md p-4"
      />
      <button
        type="submit"
        className="bg-blue-500 p-4 text-white rounded-md self-start"
      >
        Submit Review
      </button>
    </form>
  );
}
