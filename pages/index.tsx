import { useSession, signOut } from "next-auth/react";
import type { NextPage } from "next";
import { Button } from "primereact/button";
import Head from "next/head";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  return (
    <div>
      <Head>
        <title>Topstore</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {status === "authenticated" ? (
          <h1 className="text-xl text-center text-blue-700">
            Hello {session.user?.name}!
            <Button label="Sign Out" onClick={() => signOut()} />
          </h1>
        ) : (
          <h1 className="text-xl text-center text-blue-700">Sign In Please!</h1>
        )}
      </main>
    </div>
  );
};

export default Home;
