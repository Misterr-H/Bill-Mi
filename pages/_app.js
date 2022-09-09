import '../styles/globals.css'
import Navbar from "../components/Navbar";
import {useRouter} from "next/router";
import PageTransition from "../components/PageTransition";
import {isLoggedIn} from "../utils/Auth";
import {useEffect, useState} from "react";



function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const [isLogged, setIsLogged] = useState(false);
    useEffect(() => {
        setIsLogged(isLoggedIn());
    }, [isLogged, router.pathname]);

    return (
        <>
            {(router.pathname === '/login' || router.pathname === '/register' || router.pathname === '/2fa' || router.pathname === '/enable-2fa' || !isLogged ) ? null : <Navbar/>}
            <PageTransition>
                {
                    <Component {...pageProps} />
                }
            </PageTransition>
        </>

    )
}

export default MyApp
