import '../styles/globals.css';
import Layout from '../common/Layout';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

function MyApp({ Component, pageProps }) {
  return(
      <Layout footerstatus = {pageProps.footerstatus}>
        <Component {...pageProps} />
      </Layout>
    )
}

export default MyApp
