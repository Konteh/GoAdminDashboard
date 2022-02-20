import "./widgetLg.css"

export default function WidgetLg() {
    const Button = ({type}) =>{
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest transations</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGnvL_GtxI7SQ/profile-displayphoto-shrink_200_200/0/1639439250502?e=1649894400&v=beta&t=yz9XnyeErXZnbmZ2GvLgFpGqajr52YtWT7ayQAxxlyA" alt="" className="widgetLgImg"/>
                        <span className="widgetLgName">Conteh</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type = "Approved"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGnvL_GtxI7SQ/profile-displayphoto-shrink_200_200/0/1639439250502?e=1649894400&v=beta&t=yz9XnyeErXZnbmZ2GvLgFpGqajr52YtWT7ayQAxxlyA" alt="" className="widgetLgImg"/>
                        <span className="widgetLgName">Conteh</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type = "Declined"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGnvL_GtxI7SQ/profile-displayphoto-shrink_200_200/0/1639439250502?e=1649894400&v=beta&t=yz9XnyeErXZnbmZ2GvLgFpGqajr52YtWT7ayQAxxlyA" alt="" className="widgetLgImg"/>
                        <span className="widgetLgName">Conteh</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type = "Pending"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGnvL_GtxI7SQ/profile-displayphoto-shrink_200_200/0/1639439250502?e=1649894400&v=beta&t=yz9XnyeErXZnbmZ2GvLgFpGqajr52YtWT7ayQAxxlyA" alt="" className="widgetLgImg"/>
                        <span className="widgetLgName">Conteh</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type = "Approved"/></td>
                </tr>
            </table>
        </div>
    )
}