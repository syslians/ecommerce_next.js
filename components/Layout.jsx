import React from "react";
import Head from "next/head";

import { Footer, Navbar } from ".";

const Layout = ({ children }) => {
    return(
        <div className="layout">
            <Head>
                <title>H.J's Stores</title>
            </Head>
            <header>
                <Navbar /> 
            </header>
            <main className="main-container">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout