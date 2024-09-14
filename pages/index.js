export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      users: data,
    },
  };
};
import Head from "next/head";
import Link from "next/link";

const home = ({ users }) => {
  return (
    <>
      <Head>
        <title>NXT | Home</title>
      </Head>
      <header className="p-8 flex flex-col justify-center items-center gap-4 mt-12 mb-12">
        <h1 className="text-6xl font-black">NXT</h1>
        <p className="text-xl font-semibold font-mono">
          The future of next js!
        </p>
        <button className="font-semibold px-6 py-2 rounded-md border transition-all ease-in-out duration-300 hover:bg-blue-800 hover:border-blue-800">
          Documentation
        </button>
      </header>
      <h2 className="text-3xl font-bold p-4 underline">Users</h2>
      {/* {users.map((user) => (
        <div
          key={user.id}
          className="text-xl font-bold bg-gray-900 p-4 hover:border-l-white hover:border-l mt-4"
        >
          <Link href={`/${user.id}`}>
            <h3>{user.name}</h3>
          </Link>
        </div>
      ))} */}
    </>
  );
};
export default home;
