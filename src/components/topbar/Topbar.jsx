import React from 'react';
import "./topbar.css"
import{NotificationsNone, Language, Settings} from '@material-ui/icons';
export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                     <div className="logo">GoAdmin</div>
                </div>
                <div className="topRight">
                    <div className="topbarContainer">
                     <NotificationsNone></NotificationsNone>
                     <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarContainer">
                     <Language/>
                     
                    </div>
                    <div className="topbarContainer">
                     <Settings/>
                     
                    </div>
                    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGnvL_GtxI7SQ/profile-displayphoto-shrink_200_200/0/1639439250502?e=1649894400&v=beta&t=yz9XnyeErXZnbmZ2GvLgFpGqajr52YtWT7ayQAxxlyA" className="topAvatar" />
                </div>
            </div>

        
        </div>
    )
}