import { useSession, signIn, signOut } from "next-auth/react"
import Nav from "../components/Nav";
import Layout from "../components/layout";

export default function Home() {
  const { data: session } = useSession();
  return <Layout>
    <div className="text-blue-500 flex justify-between">
      <h2>
        Hello, <b>{session?.user?.name}</b>
      </h2>
      <div className="flex bg-white gap-1 text-black rounded-lg overflow-hidden">
        <img src={session?.user?.image} alt="" className="w-8 h-8 rounded-full overflow-hidden" />
        <span className="py-1 px-2">
          {session?.user?.name}
        </span>
      </div>
    </div>
  </Layout>

}