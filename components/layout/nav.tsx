import Navbar from "./navbar";
import { useSession } from "next-auth/react";
import { auth } from "@/auth";

export default async function Nav() {
  const session = await auth();
  return <Navbar session={session} />;
}
