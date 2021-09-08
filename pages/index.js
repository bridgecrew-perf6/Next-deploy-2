import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center">
        <h2 className="text-[50px] text-purple-600">Routing in Next.js</h2>
        <button
          type="button"
          className="text-[30px] rounded-md bg-purple-700 text-gray-100 pt-5 pb-5 pl-10 pr-10 mt-8 hover:bg-purple-600 transition duration-300"
          onClick={() => router.push("/about")}
        >
          About Me
        </button>
      </div>
    </div>
  );
}
