import Head from "next/head";
import NewInvoice from "../components/NewInvoice";
import {ClientsChip, InvoicesChip, ProductSoldChip, RevenueChip} from "../components/Chip";
import HomePageTable from "../components/HomePageTable";
import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {isAuthenticated, isLoggedIn} from "../utils/Auth";



const Home = () => {
    const router = useRouter();
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        setIsLogged(isLoggedIn());
        if(!isLoggedIn()) {
            router.push("/login")
                .then(() => window.scrollTo(0, 0));
        }
        isAuthenticated()
            .then((res) => {
                if(!res) {
                    router.push("/login")
                        .then(() => window.scrollTo(0, 0));
                }
            })
    }, []);
    const columns = [
        {
            title: 'Client',
            dataIndex: 'client',
            key: 'client',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        }
    ]

    const data = [
        {
            client: 'John Brown',
            date: '12/12/2020',
            amount: '1000',
            status: 'Paid'
        },
        {
            client: 'Jim Green',
            date: '12/12/2020',
            amount: '1000',
            status: 'Paid'
        },
        {
            client: 'Joe Black',
            date: '12/12/2020',
            amount: '1000',
            status: 'Paid'
        },
        {
            client: 'Jim Red',
            date: '12/12/2020',
            amount: '1000',
            status: 'Paid'
        },
        {
            client: 'Jim Blue',
            date: '12/12/2020',
            amount: '1000',
            status: 'Paid'
        }
    ]


  return isLogged ? (
    <div className={'flex md:flex-row flex-col mt-10 md:mt-20 lg:px-20'}>
        <Head>
            <title>Bill Mi</title>
            <link rel="icon" href="/logo.svg" />
        </Head>
        <h1 className={'text-2xl ml-5 md:hidden font-bold'}>Dashboard</h1>
        <NewInvoice/>
        <div className={'flex flex-col md:ml-12 w-full'}>
            <div>
                <h1 className={'text-2xl hidden md:inline font-bold'}>Dashboard</h1>
            </div>
            <div className={'flex justify-between w-full mt-10'}>
                <InvoicesChip/>
                <ClientsChip/>
                <RevenueChip/>
                <ProductSoldChip/>
            </div>
            <div className={'bg-[#FDFDFD] w-full md:p-10'}>
                <div className={'bg-white rounded-3xl md:mt-0 mt-5 px-2 py-4 md:p-10  shadow-sm'}>
                    <h1 className={'text-xl'}>Recent invoices</h1>
                    <HomePageTable columns={columns} data={data}/>
                    <div className={'flex justify-between mt-4'}>
                        <span className={'text-secondaryLight'}>Showing 5 out of 1200</span>
                        <Link href={'/invoices'}><span className={'mr-16 cursor-pointer hover:translate-x-3 duration-300'}>See all &#8594;</span></Link>
                    </div>
                </div>
            </div>

        </div>
    </div>
  ): null;
}

export default Home;