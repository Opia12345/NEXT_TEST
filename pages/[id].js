import Head from "next/head";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((user) => ({
    params: { id: user.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { user: data },
  };
};

const UserDetail = ({ user }) => {
  return (
    <>
      <Head>
        <title>NXT | {user.name}</title>
      </Head>
      <h1 className="font-black text-3xl underline">Details</h1>
      <p className="text-xl font-semibold mt-8">{user.name}</p>
      <p className="text-lg">{user.email}</p>
      <p className="text-lg">{user.phone}</p>
    </>
  );
};

export default UserDetail;
