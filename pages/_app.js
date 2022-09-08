import '../styles/globals.css'
import Navbar from "../components/Navbar";
import {useRouter} from "next/router";
import PageTransition from "../components/PageTransition";

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    return (
        <>
            {(router.pathname === '/login' || router.pathname === '/register' || router.pathname === '/2fa' || router.pathname === '/enable-2fa') ? null : <Navbar/>}
            <PageTransition>
                {
                    <Component {...pageProps} />
                }
            </PageTransition>
        </>

    )
}

export default MyApp
