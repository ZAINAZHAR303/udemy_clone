import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { currentUser } from '@clerk/nextjs/server'

export default async function Home() {

  const user = await currentUser()
  if (!user) return <div>Not signed in</div>
  return (
    <div >
     
      Home
      <UserButton afterSignOutUrl="/sign-in" />
      <div>Hello {user?.firstName}</div>
    </div>
  );
}
