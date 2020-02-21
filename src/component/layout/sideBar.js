import React from 'react'
import timer from '../../images/time-left.svg'
import chat from '../../images/chat.svg'
import file from '../../images/file.svg'
import cart from '../../images/shopping-cart.svg'
import supply from '../../images/supply.svg'
import settings from '../../images/settings.svg'
export default function sideBar(props) {
    return (
        <div className="sideBg">
            <div id="humbugger" className="pt-3"><i className="fa fa-bars"></i></div>
            <div id="options" className="pt-4"><i className="fa fa-th-large"></i></div>
            <div id="" className="pt-4"><img src={timer} /></div>
            <div id="" className="pt-4"><img src={file} /></div>
            <div id="" className="pt-4"><img src={cart} /></div>
            <div id="" className="pt-4"><img src={supply} /></div>
            <div id="" className="pt-4"><img src={chat} /></div>
            <div id=""><img src={settings} /></div>
        </div>
    )
}
