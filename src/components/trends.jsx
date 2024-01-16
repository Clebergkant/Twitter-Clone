
import '../style/styles.css'
import { CiSearch } from "react-icons/ci";
import Trendsforyou from './trendsforyou';
import Whotofollow from './whotofollow';
import Footer from './Footer';


function Trends() {
    
    return (

        <div className="trends">
            
                <div className="trendsDivSearch">
                    <CiSearch />
                    <input className="trendsDivSearchInput" type="text" placeholder='Search Twitter'/>        
                </div>

                <Trendsforyou/>

                <Whotofollow/>

                <Footer/>
        </div>
    )
}

export default Trends;

