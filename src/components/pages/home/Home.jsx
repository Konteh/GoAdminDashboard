
import Chart from '../../chart/Chart';
import FeaturedInfo from '../../featuredInfo/FeaturedInfo';
import './home.css';
import {userData} from "../../.././dummyData"
export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo></FeaturedInfo>
            <Chart data={userData} title="User Analytics" grid dataKey="ActiveUser"/>
        </div>
    )
}