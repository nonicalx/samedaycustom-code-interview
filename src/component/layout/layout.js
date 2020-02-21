import React from 'react'
import './layout.css'
import SideBar from './sideBar'
import Notifier from './notificationBar'
export default function layout(props) {
    return (
        <div className="layout">
            <div>
                <SideBar />
            </div>
            <main>
                <Notifier />
                {props.children}
            </main>
        </div>
    )
}
