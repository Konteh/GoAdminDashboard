import { Link } from "react-router-dom";
import { LocationSearching, CalendarToday, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons"
import "./user.css"

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
              <Link to="/newUser">
                <button className="userAddButton">Create</button>
              </Link>
                
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGnvL_GtxI7SQ/profile-displayphoto-shrink_200_200/0/1639439250502?e=1649894400&v=beta&t=yz9XnyeErXZnbmZ2GvLgFpGqajr52YtWT7ayQAxxlyA" alt="" className="userShowImg"/>
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Mathema</span>
                            <span className="userShowUserTitle">Software Engineer</span>

                        </div>
                    </div>
                    <div className="userShowButtom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                        <PermIdentity className="userShowIcon"></PermIdentity>
                        <span className="userShowInfoTitle">conteh101</span>
                        </div>
                        <div className="userShowInfo">
                        <CalendarToday className="userShowIcon"></CalendarToday>
                        <span className="userShowInfoTitle">1 January, 2022</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon"></PhoneAndroid>
                        <span className="userShowInfoTitle">+220 3333333</span>
                        </div>
                        <div className="userShowInfo">
                        <MailOutline className="userShowIcon"></MailOutline>
                        <span className="userShowInfoTitle">conteh101@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                        <LocationSearching className="userShowIcon"></LocationSearching>
                        <span className="userShowInfoTitle">Sanchaba</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="conteh101" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" placeholder="Mathema" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder="conteh101@gmail.com" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" placeholder="+220 3333333" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder="Sanchaba" className="userUpdateInput"/>
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGnvL_GtxI7SQ/profile-displayphoto-shrink_200_200/0/1639439250502?e=1649894400&v=beta&t=yz9XnyeErXZnbmZ2GvLgFpGqajr52YtWT7ayQAxxlyA" alt="" className="userUpdateImg"/>
                            <label htmlFor="file"> <Publish className="userUpdateIcon"></Publish> </label>
                            <input type="file" id="file" style={{display: "none"}}/>
                            </div>
                        <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}