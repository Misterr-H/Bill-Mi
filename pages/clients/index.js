import Head from "next/head";
import {Table} from "antd";
import {useEffect, useState} from "react";
import {headers} from "../../utils/Auth";
import ClearIcon from '@mui/icons-material/Clear';

const Clients = () => {
    const columns = [
        {
            title: 'Client',
            dataIndex: 'client',
            key: 'client',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Mode of Delivery',
            dataIndex: 'modeOfDelivery',
            key: 'modeOfDelivery',
        },
        {
            title: 'Mode of Payment',
            dataIndex: 'modeOfPayment',
            key: 'modeOfPayment',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
        }
    ]

    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/api/client/fetch-all-clients', {
                method: 'GET',
                headers: headers
            });
            const fetchedData = await res.json();
            console.log(fetchedData);
            fetchedData.clients.forEach((client, index) => {
                setData((prev) => [...prev, {
                    key: index,
                    client: client.firstName + " " + client.lastName,
                    phone: client.phone,
                    email: client.email ? client.email : "N/A",
                    address: client.address ? client.address : "N/A",
                    modeOfDelivery: client.modeOfDelivery,
                    modeOfPayment: client.modeOfPayment,
                    //One circular button for delete with icon
                    action: <div className="flex justify-center items-center w-8 h-8 rounded-full bg-red-200 cursor-pointer">
                        <ClearIcon className="text-red-600"/>
                    </div>

                }]);
            });
        }
        fetchData();
    }, []);

    return (

        <div>
            <Head>
                <title>Clients</title>
                <link rel="icon" href="/logo.svg" />
            </Head>
            <div className={'container p-4 mt-10 rounded-lg border-2 border-neutral-200 shadow-2xl mx-auto'}>
                <Table columns={columns} dataSource={data}/>
            </div>

        </div>
    )
}

export default Clients;