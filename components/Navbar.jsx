import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AddIcon from '@mui/icons-material/Add';
import FaceIcon from '@mui/icons-material/Face';
import {getMiId, getName, logout} from "../utils/Auth";
import {Skeleton, Zoom} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import {Tooltip} from "@mui/material";

const Navbar = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [miId, setMiId] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getName().then((res) => {
            setName(res);
            setMiId(getMiId());
            setLoading(false);
        })
    }, [router.pathname])

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
            <div className={'flex mr-5'}>
                <Tooltip title={'Profile'} TransitionComponent={Zoom} disableInteractive enterDelay={1000}>
                    <div className={`flex
                    cursor-pointer
                    hover:scale-105
                    duration-200
                    items-center
                    -mt-2
                    ${router.pathname === '/profile' ? 'scale-105' : ''}`} onClick={() => {
                        router.push('/profile')
                            .then(() => {
                                window.scrollTo(0, 0)
                            })
                    }}>
                            <FaceIcon fontSize={'small'} className={'mb-1 mr-1'}/>
                        <div className={'flex flex-col'}>
                            <h1 className={'mr-5 cursor-pointer'}>{loading ? <Skeleton width={70} sx={{
                                marginTop: '-0.2rem',
                            }}/> : name}</h1>
                            <h1 className={'mr-5 -mt-1 text-[10px] cursor-pointer text-gray-400'}>{loading ? <Skeleton width={70} sx={{
                                marginTop: '-0.2rem',
                            }}/> : `Mi id: ${miId}`}</h1>
                        </div>
                    </div>
                </Tooltip>
                <Tooltip title={'Logout'} TransitionComponent={Zoom} disableInteractive enterDelay={1000}>
                    <div className={'flex cursor-pointer hover:scale-110 duration-200'}>
                            <LogoutIcon fontSize={'small'} className={'mb-1 mr-1'} onClick={() => {
                                logout();
                                router.push('/login');
                            }}/>
                    </div>
                </Tooltip>

            </div>
        </div>
    )
}

export default Navbar