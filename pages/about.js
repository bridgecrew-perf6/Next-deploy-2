import Head from "next/head";
import { useRouter } from "next/router";

function about() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-purple-600 text-[50px]">About me</h1>
        <div className="text-gray-800 text-[30px] mt-7">
          I am a developer, blogger and a student
        </div>
        <button
          type="button"
          className="text-[30px] rounded-md bg-purple-700 text-gray-100 pt-5 pb-5 pl-10 pr-10 mt-8 hover:bg-purple-600 transition duration-300"
          onClick={() => router.push("/projects/project")}
        >
          Check out my projects!
        </button>
      </div>
    </div>
  );
}

export default about;
