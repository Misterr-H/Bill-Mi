import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import {useRouter} from "next/router";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AddIcon from '@mui/icons-material/Add';
import FaceIcon from '@mui/icons-material/Face';
import {logout} from "../utils/Auth";

const Navbar = () => {
    const router = useRouter();

    return (
        <div className={'flex justify-between p-2 mt-5'}>
            <div className={'flex items-center ml-5 cursor-pointer hover:scale-105 duration-200'}>
                <Image src={'/logo.svg'} width={30} height={30}/>
                <h1 className={'ml-2 mt-1 cursor-pointer'}>Bill Mi</h1>
            </div>
            <div className={'flex items-center'}>
                <Link href={'/'}><a className={`mr-5 hover:scale-105 duration-200 ${router.pathname === '/' ? 'text-primary' : 'text-gray-400 hover:text-secondaryLight duration-300'}`}><DashboardIcon fontSize={'small'} className={'mb-1 mr-1'}/>Dashboard</a></Link>
                <Link href={'/invoices'}><a className={`mr-5 hover:scale-105 duration-200 ${router.pathname === '/invoices' ? 'text-primary' : 'text-gray-400 hover:text-secondaryLight duration-300'}`}><ReceiptIcon fontSize={'small'} className={'mb-1 mr-1'}/>Invoices</a></Link>
                <Link href={'/clients'}><a className={`mr-5 hover:scale-105 duration-200 ${router.pathname === '/clients' ? 'text-primary' : 'text-gray-400 hover:text-secondaryLight duration-300'}`}><PeopleOutlineIcon fontSize={'small'} className={'mb-1 mr-1'}/>Clients</a></Link>
                <Link href={'/new-invoice'}><a className={`mr-5 hover:scale-105 duration-200 ${router.pathname === '/new-invoice' ? 'text-primary' : 'text-gray-400 hover:text-secondaryLight duration-300'}`}><AddIcon fontSize={'small'} className={'mb-1 mr-1'}/>New invoice</a></Link>
            </div>
            <div className={'flex mr-5 cursor-pointer hover:scale-105 duration-200'}>
                <FaceIcon fontSize={'small'} className={'mb-1 mr-1'}/>
                <h1 className={'mr-5 cursor-pointer'} onClick={() => {
                    logout();
                    router.push('/login');
                }}>John Doe</h1>
            </div>
        </div>
    )
}

export default Navbar