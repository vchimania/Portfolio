import "../styles/globals.css";
import { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactDetails from "@/src/components/home/contact-details";
import SectionsBar from "@/src/components/home/routes-options";

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
      <div className="mx-56 my-40">
        <div className="grid grid-cols-3 gap-4">
          <ContactDetails/>
          <div className="col-span-2">
            <SectionsBar />
            <Component {...pageProps} />
          </div>
        </div>
      </div>
  );
}
