import { useEffect, useState } from "react";

const Page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures this runs only on the client
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Hello, My projects!</h1>
      {isClient && <p>Document is available!</p>}
    </div>
  );
};

export default Page;
