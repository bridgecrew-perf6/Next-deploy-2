import { useRouter } from "next/router";

function project() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h2 className="text-[40px] text-purple-700">
        Check out my projects here!
      </h2>
      <button
        type="button"
        className="text-[30px] rounded-md bg-purple-700 text-gray-100 pt-5 pb-5 pl-10 pr-10 mt-8 hover:bg-purple-600 transition duration-300"
        onClick={() => router.push("/projects/netflix")}
      >
        Check out my netflix clone!
      </button>
    </div>
  );
}

export default project;
