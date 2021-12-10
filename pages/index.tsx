import type { NextPage } from "next";

import { Header } from "../components";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen min-w-screen bg-primary">
      <Header />
    </div>
  );
};

export default Home;
