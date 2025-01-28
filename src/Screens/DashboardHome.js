import React from 'react'
import Sidebar from '../Components/Sidebar'
import m1 from '../Images/Premium Photo _ Front view book pile.jpeg'
import m2 from '../Images/8c6ae8dd-05cd-4347-baaa-e98db8676ff8.jpeg'
import m3 from '../Images/Free Photo _ Front view of hardback books in the library.jpeg'
import m4 from '../Images/Download free image of Woman reading a blank notebook at home  by Karolina _ Kaboompics about reading, cozy, book, autumn photos, and cozy at home 2396420.jpeg'
import { Link } from 'react-router-dom'
import { HiCloudDownload } from "react-icons/hi";


const DashboardHome = ({ setLoggedIn, setUser }) => {

    const DataSet = [
        {
            id:1,
            img:m1,
            brand:'Publishing Industry',
            title:'The Data Science Course',
            time:'22nd sept',
            downloads:'20',
            link:'/courseInfo'
        },
        {
            id:2,
            img:m2,
            brand:'Publishing Industry',
            title:'The Data Science Course',
            time:'22nd sept',
            downloads:'20',
            link:'/courseInfo'
        },
        {
            id:3,
            img:m3,
            brand:'Publishing Industry',
            title:'The Data Science Course',
            time:'22nd sept',
            downloads:'20',
            link:'/courseInfo'
        },
        {
            id:4,
            img:m4,
            brand:'Publishing Industry',
            title:'The Data Science Course',
            time:'22nd sept',
            downloads:'20',
            link:'/courseInfo'
        },
        {
            id:5,
            img:m2,
            brand:'Publishing Industry',
            title:'The Data Science Course',
            time:'22nd sept',
            downloads:'20',
            link:'/courseInfo'
        },
        {
            id:6,
            img:m4,
            brand:'Publishing Industry',
            title:'The Data Science Course',
            time:'22nd sept',
            downloads:'20',
            link:'/courseInfo'
        },
        {
            id:7,
            img:m1,
            brand:'Publishing Industry',
            title:'The Data Science Course',
            time:'22nd sept',
            downloads:'20',
            link:'/courseInfo'
        },
        
    ]

  return (
    <div>
        <div className="dash">
            <Sidebar setLoggedIn={setLoggedIn} setUser={setUser} />

            


            <div className="courses-overview" id='dataset'>
                <div className="text">
                    <h2>DataSets</h2>
                </div>

                {
                    DataSet.map((DataSet, id)=>{
                        return(
                            <div className="course" key={id} >
                                <img src={DataSet.img} alt="" />
                                <div className='cont'>
                                    <div>
                                        <p>{DataSet.brand}</p>
                                        <h3>{DataSet.title}</h3>
                                        <div className='update'>
                                            <span>{DataSet.time}</span>
                                            <span><HiCloudDownload className='d-i'/>{DataSet.downloads}</span>
                                        </div>
                                        {/* <Link to={DataSet.link}> */}
                                            <button>Download</button>
                                        {/* </Link> */}
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    })
                }


            </div>
        </div>
    </div>
  )
}

export default DashboardHome