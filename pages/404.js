import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <>
      <div className="flex justify-center items-center gap-4 h-screen text-white w-screen">
        <h1 className="text-5xl text-center text-gray-600">404</h1>
        <div className="w-[0.5px] h-8 bg-white"></div>
        <h1 className="text-2xl text-center text-gray-600">Page Not Found</h1>
      </div>
    </>
  );
};

export default NotFound;
