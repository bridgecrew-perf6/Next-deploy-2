import { useRouter } from "next/router";

export default function button () {
    const router = useRouter();
  return(
    <button
    type="button"
    className="text-[25px] rounded-md bg-purple-700 text-gray-100 pt-5 pb-5 pl-10 pr-10 mt-8 hover:bg-purple-600 transition duration-300"
    onClick={() => router.replace('/')}
  >
    ReplaceButton
  </button>
  )
}