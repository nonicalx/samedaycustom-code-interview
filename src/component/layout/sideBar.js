import React, { useState, useEffect } from 'react'
import timer from '../../images/time-left.svg'
import timerBlue from '../../images/time-left-blue.svg'
import chat from '../../images/chat.svg'
import file from '../../images/file.svg'
import cart from '../../images/shopping-cart.svg'
import supply from '../../images/supply.svg'
import settings from '../../images/settings.svg'
import dash from '../../images/dash.svg'
import { withRouter } from 'react-router-dom'

const SideBar = (props) => {
    var [op, setOp] = useState("");
    var [ham, setHam] = useState(false);
    var [option, setOption] = useState(false)
    console.log(props)
    const hamClick = () => {
        setOption(false)
        if (ham === false) {
            document.getElementById('layout').classList.add("layout-lg")

            setHam(true)
        } else {
            document.getElementById('layout').classList.remove('layout-lg')
            setHam(false)
        }
    }
    const initialClick = () => {
        document.getElementById('layout').classList.add("layout-lg")
        setHam(true)

    }

    const handleDrop = () => {
        setOption(!option)
    }

    const handleOpeningPage = (path) => {
        props.history.push({ pathname: path })
    }

    useEffect(() => {

        switch (props.location.pathname) {
            case "/":
                if (ham) {
                    console.log('option', option)

                    setOp("lg")
                    document.getElementById('time-left').classList.add('selected')
                    break;
                } else if (ham && option) {
                    setOp("lg")
                    document.getElementById('prodH').classList.add('selected')
                    break
                } else {
                    setOp("sm")
                    break
                }
            case '/productionhouse':
                if (ham) {
                    setOp("lg")
                    document.getElementById('time-left').classList.add('selected')
                    break;
                } else if (ham && option) {
                    setOp("lg")
                    document.getElementById('time-left').classList.remove('selected')
                    document.getElementById('prodH').classList.add('selected')
                    break
                } else {
                    setOp("sm")
                    break
                }
            case '/product':
                if (ham) {
                    setOp("lg")
                    document.getElementById('time-left').classList.add('selected')
                    break;
                } else if (ham && option || option) {
                    setOp("lg")
                    document.getElementById('time-left').classList.remove('selected')
                    document.getElementById('prodH').classList.add('selected')
                    break
                } else {
                    setOp("sm")
                    break
                }


            default:
                break;
        }


    })

    return (
        <div className="sideBg">
            <div id="hamburger" className={`pt-3 ${ham ? 'text-left pl-3' : ''}`}>{ham === false ? <i className="fa fa-bars" onClick={hamClick}></i> : <p onClick={hamClick}>x</p>}</div>
            <div id="dashboard" className={`mt-4 ${ham ? 'text-left pl-3' : ''}`}><img src={dash} onClick={initialClick} />{ham ? <span>Dashboard</span> : <></>}</div>
            <div id="time-left" className={`mt-4 ${ham ? 'text-left pl-3' : ''}`}><img src={op === "sm" || op === "lg" ? timerBlue : timer} onClick={initialClick} className={op === "sm" ? 'circleBg' : ''} />{ham ? <span onClick={handleDrop}>Operations<i className="fa fa-caret-down"></i></span> : <></>}</div>
            <section className={option ? "show" : "options"}>
                <div className="py-1">Orders</div>
                <div onClick={() => { handleOpeningPage('/productionhouse') }} id="prodH" className="py-1">Production House</div>
                <div className="py-1">Bids</div>
                <div className="py-1">Promotiion / Discount</div>
                <div className="py-1">Out Sourcing</div>
            </section>
            <div id="file" className={`mt-4 ${ham ? 'text-left pl-3' : ''}`}><img src={file} onClick={initialClick} />{ham ? <span>Records</span> : <></>}</div>
            <div id="cart" className={`mt-4 ${ham ? 'text-left pl-3' : ''}`}><img src={cart} onClick={initialClick} />{ham ? <span>Supply Store</span> : <></>}</div>
            <div id="supply" className={`mt-4 ${ham ? 'text-left ml-3' : ''}`}><img src={supply} onClick={initialClick} />{ham ? <span>Market Place</span> : <></>}</div>
            <div id="chat" className={`mt-4 ${ham ? 'text-left ml-3' : ''}`}><img src={chat} onClick={initialClick} />{ham ? <span>Forums</span> : <></>}</div>
            <div id="setting" className={`${ham ? 'text-left ml-3' : ''}`}><img src={settings} onClick={initialClick} />{ham ? <span>Settings</span> : <></>}</div>
        </div>
    )
}
export default withRouter(SideBar)