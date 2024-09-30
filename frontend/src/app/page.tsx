import Navbar from "@/Components/navbar/Navbar";
import "../Styles/dashboard/dashboard.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <img src="imgs/kendrck.jpg" alt="" />
        <div className="hero-main">
          <div className="hero-text-box">
            <div className="hero-text">
              <h1>Where every beat finds you</h1>
              <p>
                Discover, stream and share songs across genres. Enjoy curated
                playlists, personalized recommendations, and artist profiles.
              </p>
            </div>
            <div className="artist-box">
              <div className="hero-artists">
                <Image src={"/imgs/arijit.jpg"} width={40} height={40} />
                <Image src={"/imgs/atif.jpg"} width={40} height={40} />
                <Image src={"/imgs/weeknd.jpg"} width={40} height={40} />
                <Image src={"/imgs/kendrick.jpg"} width={40} height={40} />
                <Image src={"/imgs/drake.jpg"} width={40} height={40} />
              </div>
              <div className="artist-text">
                <strong>250,000+</strong>artists. Listen to your Jam.{" "}
              </div>
            </div>
          </div>
          <div className="hero-img-box"></div>
        </div>
      </div>
    </>
  );
}
