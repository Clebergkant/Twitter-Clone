
import '../style/styles.css'
import { CiSearch } from "react-icons/ci";


function Trends() {
    const color=""
    return (

        <div className="trends">
                <div className="trendsDivSearch">
                    <CiSearch />
                    <input className="trendsDivSearchInput" type="text" placeholder='Search'/>
                            
                </div>
                <div className="trendsDivTrendsForYou">X</div>
                <div className='trendsDivW'>Y</div>
                <div>Terms of service</div>


        </div>


    )

}

export default Trends;

