import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

// import React from 'react';
// import App from 'next/app';
// import Dashboard from './dashboard';
// import Footer from '../components/footer';

// export default class MyApp extends App {
//   render() {
//     const { children } = this.props
//     return (
//       <div>
//         <Dashboard />
//         {children}
//         <Footer />
//       </div>

//     )
//   }
// }
