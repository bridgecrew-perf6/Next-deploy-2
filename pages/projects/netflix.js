import { useRouter } from "next/router";
import Head from "next/head";

function netflix() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button
        type="button"
        onClick={() => router.push("/")}
        className="text-[20px] rounded-md bg-purple-700 text-gray-100 pt-5 pb-5 pl-10 pr-10 mt-8 hover:bg-purple-600 transition duration-300"
      >
        Netflix Clone
      </button>
    </div>
  );
}

export default netflix;
