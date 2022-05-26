import { useRouter } from "next/router";
import Head from "next/head";
import dynamic from "next/dynamic";
import PrefetchButton from '../components/prefetchButton'

const BackButton = dynamic(() => import("../components/backButton"));

console.log("Netflix page Read");

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
      <BackButton/>
      <PrefetchButton/>
    </div>
    
  );
}

export default netflix;
