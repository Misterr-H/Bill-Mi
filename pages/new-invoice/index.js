import Head from "next/head";

const newInvoice = () => {
    return (
        <div>
            <Head>
                <title>New Invoice</title>
                <link rel="icon" href="/logo.svg" />
            </Head>
            <div className={'flex flex-col'}>
                <div className={'flex justify-between'}>
                    <div className={'flex flex-col'}>
                        <h1 className={'text-3xl font-bold'}>New Invoice</h1>
                        <p className={'text-gray-400'}>Enter the details of the invoice</p>
                    </div>
                    <div className={'flex flex-col'}>
                        <button className={'bg-blue-500 text-white px-4 py-2 rounded-md'}>Save</button>
                        <button className={'bg-white text-blue-500 px-4 py-2 rounded-md border border-blue-500'}>Save & Send</button>
                    </div>
                </div>
                <div className={'flex mt-10'}>
                    <div className={'flex flex-col w-1/2 mr-10'}>
                        <div className={'flex flex-col'}>
                            <label className={'text-gray-400'}>From</label>
                            <input className={'border border-gray-300 rounded-md px-4 py-2 mt-2'} type="text" placeholder={'Enter your name'}/>
                        </div>
                        <div className={'flex flex-col mt-10'}>
                            <label className={'text-gray-400'}>To</label>
                            <input className={'border border-gray-300 rounded-md px-4 py-2 mt-2'} type="text" placeholder={'Enter client name'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default newInvoice;