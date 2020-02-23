import React from 'react'
import search from '../../images/search.svg'
import logo from '../../images/logo.svg'
import mail from '../../images/mail.svg'
import blackCart from '../../images/shopping-cart-black.svg'
import avatar from '../../images/ichigo.jpg'
export default function notificationBar(props) {
    return (
        <div className="notifier">
            <div>
                <img src={logo} alt="company logo" className="logo" />
            </div>
            <div className="px-4">
                <img src={search} alt="search" />
            </div>
            <div className="px-4">
                <img src={mail} alt="mail" /><span>Message</span>
            </div>
            <div className="px-4">
                <img src={blackCart} alt="cart" /><span>Market Place</span><i className="fa fa-caret-down"></i>
            </div>
            <div className="px-4">
                <i className="fa fa-list"><span>Notifications</span></i>
            </div>
            <div className="pl-4">
                <img src={avatar} alt="your avatar" className="avatar" style={{ display: "block" }} /><br /><span style={{ display: "block" }}>Me<i className="fa fa-caret-down"></i></span>
            </div>
        </div>
    )
}
