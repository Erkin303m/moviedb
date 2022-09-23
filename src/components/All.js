import React from 'react'
import Footer from './Footer'
import Header from './Header'
import "./style.css"

const All = ({ children }) => {
    return (
        <div>
            <Header />

            <div className="children">
                {children}
            </div>

            <Footer />
        </div>
    )
}

export default All
