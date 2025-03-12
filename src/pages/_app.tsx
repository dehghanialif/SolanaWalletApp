// import "@/styles/globals.css";
// import type { AppProps } from "next/app";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }


import '../styles/globals.css'

function MyApp({ Component, pagePros }) {
  return <Component {...pagePros} />
}

export default MyApp