import Navbar from "./navbar";
import { useSession } from "next-auth/react";

export default async function Nav() {
  const { data: session } = useSession();
  return <Navbar session={session} />;
}
