import Head from "next/head";
import {Fab, ThemeProvider} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import theme from '../../utils/theme';
import {useEffect, useState} from "react";
import {Tabs} from 'antd';
import AddProducts from "../../components/AddProducts";
import FillCustomerDetails from "../../components/FillCustomerDetails";
import Checkout from "../../components/Checkout";


const NewInvoice = () => {

    const [activeTab, setActiveTab] = useState(0);
    const renderTab = () => {
        switch (activeTab) {
            case 0:
                return <AddProducts />
            case 1:
                return <FillCustomerDetails/>
            case 2:
                return <Checkout/>
            case 3:
                return <div>4</div>
            case 4:
                return <div>5</div>
            default:
                return <div>1</div>
        }
    }

    return (
        <div>
            <Head>
                <title>New Invoice</title>
                <link rel="icon" href="/logo.svg" />
            </Head>
            <div className={'flex flex-col items-center'}>
                <div className={'flex flex-row justify-center mt-10'}>
                    <h1 className={'text-3xl'}>Create New Invoice</h1>
                </div>

                <div className={'fixed right-10 top-1/2 bottom-1/2'} onClick={() => setActiveTab(activeTab + 1)}>
                    <ThemeProvider theme={theme}>
                        <Fab className={'hover:text-white text-black duration-200 '} color="primary" aria-label="add">
                            <ArrowForwardIosIcon />
                        </Fab>
                    </ThemeProvider>
                </div>

                {activeTab === 0 ? null : <div className={'fixed left-10 top-1/2 bottom-1/2'} onClick={() => setActiveTab(activeTab - 1)}>
                    <ThemeProvider theme={theme}>
                        <Fab className={'hover:text-white text-black duration-200 '} color="primary" aria-label="add">
                            <ArrowBackIosNewIcon/>
                        </Fab>
                    </ThemeProvider>
                </div>}
                {renderTab()}
            </div>
        </div>
    )
}

export default NewInvoice;