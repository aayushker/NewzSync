import React from "react";
import "@/app/globals.css";
import NavBar from "@/app/components/NavBar";
import News from "@/app/components/News";
import { SessionProvider } from "next-auth/react";

const index = () => {
  return (
    <main>
      <SessionProvider>
        <NavBar />
        <div className="px-12">
          <News />
        </div>
      </SessionProvider>
    </main>
  );
};

export default index;
