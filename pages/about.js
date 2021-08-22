import Head from "next/head";

function about() {
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
      </div>
    </div>
  );
}

export default about;
