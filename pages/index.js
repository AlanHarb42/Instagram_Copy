import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram</title>
        <link
          rel="icon"
          href="https://cdn.iconscout.com/icon/free/png-256/instagram-1946323-1646407.png"
        />
      </Head>

      {/* Header */}
      <Header />
      {/* Feed */}
      <Feed />

      {/* Modal */}
    </div>
  );
}
