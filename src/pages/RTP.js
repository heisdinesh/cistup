import React,{useContext} from 'react'
import { TravelContext } from '../Context'
import { useNavigate } from 'react-router-dom'
const RTP = () => {
    const {setMode,setDistance,mode,distance} = useContext(TravelContext)
    const navigate=useNavigate()

    const handleChange=(e)=>{
        setMode(e.target.value)
        // console.log(mode)
    }
    const handleChange2=(e)=>{
        setDistance(e.target.value)
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(mode);
        console.log(distance);
        navigate("/mode-of-choice")

    }
  return (
    <div className="bg-emerald-300 h-screen">
        <div >
            <h1 className='pt-8 flex text-4xl font-semibold justify-center'>Respondent Travel profile</h1>
        </div>
        <div className="mt-20 flex items-center justify-start  flex-col border-4 border-black rounded-md p-6 w-fit mx-auto">
            <form onSubmit={handleSubmit} className="flex items-start justify-center gap-8 flex-col">
            <div className="bg-emerald-400 px-2 py-2 rounded-md w-full">
            <h2>1. What is your most frequently used means of travel from your home to work location?</h2>
                <div className="flex gap-4">
                <label>
                Bus
                <input type="radio" name="mode" value="bus" checked={mode==="bus"} onChange={handleChange} />
                </label>
                <label>
                Metro
                <input type="radio" name="mode" value="metro" checked={mode==="metro"} onChange={handleChange} />
                </label>
                <label>
                Two-wheeler
                <input type="radio" name="mode" value="two-wheeler" checked={mode==="two-wheeler"} onChange={handleChange} />
                </label>
                <label>
                Car
                <input type="radio" name="mode" value="car" checked={mode==="car"}  onChange={handleChange} />
                </label>
                <label>
                Walk /bicycle
                <input type="radio" name="mode" value="walk/bicycle" checked={mode==="walk/bicycle"}  onChange={handleChange} />
                </label>
                <label>
                Auto
                <input type="radio" name="mode" value="auto" checked={mode==="auto"}   onChange={handleChange} />
                </label>
                <label>
                OLA/Uber
                <input type="radio" name="mode" value="ola/uber" checked={mode==="ola/uber"} onChange={handleChange} />
                </label>
                </div>
            </div>
               <div className="bg-emerald-400 px-2 py-2 rounded-md w-full">
               <h2>2. What is the total distance between your home and workplace?</h2>
               <div className="flex gap-4">
                    
                    <label>
                        &lt; 5Km
                        <input type="radio" name="distance" value="0-5" checked={distance==="0-5"} onChange={handleChange2} />
                    </label>
                    <label>
                       5-10 Km
                        <input type="radio" name="distance" value="5-10" checked={distance==="5-10"} onChange={handleChange2} />
                    </label>
                    <label>
                        10-15 Km
                        <input type="radio" name="distance" value="10-15" checked={distance==="10-15"}  onChange={handleChange2} />
                    </label>
                    <label>
                        15-20 Km
                        <input type="radio" name="distance" value="15-20" checked={distance==="15-20"}  onChange={handleChange2} />
                    </label>
                    <label>
                        20-25 Km
                        <input type="radio" name="distance" value="20-25" checked={distance==="20-25"}  onChange={handleChange2} />
                    </label>
                    <label>
                        &gt; 25 Km
                        <input type="radio" name="distance" value="25-30" checked={distance==="25-30"}  onChange={handleChange2} />
                    </label>
                </div>
               </div>
                <button type="submit" className="bg-red-400 px-4 py-2 rounded-md w-full">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default RTP