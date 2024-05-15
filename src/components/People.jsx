import { useEffect, useState } from 'react'
import Topnav from '../template/Topnav'
import Dropdown from '../template/Dropdown'
import { FaRegArrowAltCircleLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import axios from '../utils/axios'
import Loader from './Loader'
import Cards from '../template/Cards'
import InfiniteScroll from 'react-infinite-scroll-component'
import GotoTop from './GotoTop'

const People = () => {
    const navigate= useNavigate()
    const [category, setcategory] = useState("popular")
      const [people,setpeople] =useState([])
      const [page,setpage] =useState(1)
      const [hasMore, sethasMore]= useState(true)
      document.title = `MovieLabs | Popular Celebrity  `  ;
      const getPeople = async () => { 
        try {
          const { data } = await axios.get(
            `/person/${category}?page=${page}`
          );
          if (data.results.length > 0) {
            setpeople((prevState) => [...prevState, ...data.results]);
            setpage(page + 1);
          } else {
            sethasMore(false);
          }
        } catch (error) {
          console.log("error", error);
        }
      };
    
      const referenceHandler = async () => {
        if (people.length === 0) {
          getPeople();
        } else {
          setpage(1);
          setpeople([]);
          getPeople();
        }
      };
    useEffect(()=>{
        referenceHandler()
    },[category])
    return people.length >0 ? (
        <>
        {/* <Sidebar/> */}
        <div className='w-screen h-screen' >
          <div className='w-full flex  px-16 py-5 gap-10 items-center  ' >
                <h1 className=' w-4/12  items-center flex gap-3 text-zinc-400 font-bold' >
                <FaRegArrowAltCircleLeft onClick={()=> navigate(-1) } className='text-2xl hover:text-custompurple duration-100  cursor-pointer' />
                 <span className='text-3xl' > Popular Personality </span>
                  </h1>
          <Topnav customclass="w-[70%]  "  />
          </div>
          <InfiniteScroll
            dataLength={people.length}
            next={getPeople}
            hasMore={hasMore}
            loader={<h1>Loading...</h1>}
          >
            <Cards cardData={people} title={"person"} />
          </InfiniteScroll>
          <GotoTop/>
        </div>
      </>
      ): <Loader/>
}

export default People