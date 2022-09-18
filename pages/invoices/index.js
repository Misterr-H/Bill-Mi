import Head from "next/head";
import {Table} from "antd";
import {useEffect, useState} from "react";
import {headers} from "../../utils/Auth";
import ClearIcon from '@mui/icons-material/Clear';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import {Tooltip} from "@mui/material";

const Invoices = () => {
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
            const res = await fetch('/api/invoice/fetch-all-invoices', {
                method: 'GET',
                headers: headers
            });
            const fetchedData = await res.json();
            fetchedData.invoices.forEach((invoice, index) => {
                setData((prev) => [...prev, {
                    key: index,
                    client: invoice.client.firstName + " " + invoice.client.lastName,
                    date: invoice.date.split("T")[0].split("-").reverse().join("/"),
                    amount: invoice.total,
                    status: "Paid",
                    //Two circular buttons for download and delete with icons
                    action: <div className="flex w-min justify-center">
                        <div className="flex justify-center items-center w-8 h-8 rounded-full bg-gray-200 mr-2 cursor-pointer">
                            <Tooltip title={'Download Invoice'}>
                                <CloudDownloadIcon className="text-gray-500"/>
                            </Tooltip>
                        </div>
                    </div>  ,

                }]);
            });
        }
        fetchData();
            }, []);

    return (
            <>
                <Head>
                    <title>Invoices</title>
                    <link rel="icon" href="/logo.svg" />
                </Head>

                <div className={'container p-4 mt-10 rounded-lg border-2 border-neutral-200 shadow-2xl mx-auto'}>
                    <Table columns={columns} dataSource={data.reverse()} loading={{
                        spinning: data.length === 0,
                        indicator: <div className="flex justify-center items-center">
                            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                        </div>
                    }} scroll={{
                        x: 500
                    }} />
                </div>
            </>

    );
}

export default Invoices;