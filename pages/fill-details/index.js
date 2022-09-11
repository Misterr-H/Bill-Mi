import Head from "next/head";
import {useEffect} from "react";

const FillDetails = () => {
    useEffect(() => {
        if("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position);
            })
        }
        else {
            console.log('Geolocation not available');
        }

    }, [])

    return (
        <div className="flex flex-col  items-center justify-center min-h-screen py-2  px-14 text-center">
            <Head>
                <title>Details</title>
                <link rel="icon" href="/logo.svg" />
            </Head>
            <img
                className="w-20"
                src="/logo.svg"
                alt="Workflow"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Enter Details
            </h2>
            <div className={'flex mt-10'}>
                <h1 className={'mr-4 '}>Choose Store Type:</h1>
                <select name="storeType" id="storeType">
                    <option value="home">Mi Home</option>
                    <option value="store">Mi Store</option>
                </select>
            </div>
        </div>
    )
}

export default FillDetails;