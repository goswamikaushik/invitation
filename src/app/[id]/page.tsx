"use client";
import InvitationForm from "@/components/InvitationForm";
import UserInformation from "@/components/UserInformation";

export default function Home() {
  return (
    <main className=" w-full min-h-screen flex flex-col justify-center">
      <div className="">
        <UserInformation />
        <InvitationForm />
      </div>
    </main>
  );
}
