import React, { useContext } from 'react'
import { TravelContext } from '../Context'
import zero from  "../data/sample_db_0km.json"
import five from  "../data/sample_db_10km.json"
import ten from "../data/sample_db_15km.json"
import fifteen from  "../data/sample_db_15km.json"
import tweenty from "../data/sample_db_20km.json"
import tweentyfive from "../data/sample_db_25km.json"

import {FaBus, FaCar, FaTrain,FaWalking,FaBicycle,FaCaravan} from "react-icons/fa"

// const source = maggi;

const MC = () => {
    const {mode,distance} = useContext(TravelContext);
    
    let source;
    if(distance==="0-5"){
         source = zero;
    }
    else if(distance==="5-10"){
         source = five;
    }
    else if(distance==="10-15"){
         source = ten;
    }
    else if(distance==="15-20"){
         source = fifteen;
    }
    else if(distance==="20-25"){
         source = tweenty;
    }
    else if(distance==="25-30"){
         source = tweentyfive;
    }
  return (
    <div className="bg-emerald-300 h-screen ">
        <div>
        <h1 className='flex text-4xl font-semibold justify-center pt-8'>Respondent Travel profile</h1>
        </div>
    <div className='flex items-center justify-center  w-fit mx-auto my-auto mt-8'>
        <div className="flex flex-col  p-4 border-black  border-4 rounded-md ">
            <div className="flex gap-1 ">
                <div className="border-2   px-2 bg-red-400 w-44 text-center  flex flex-col py-2">Bus Route 1 <input type="radio" name="mode" /></div>
                <div className="border-2   px-2 bg-red-400 w-44 text-center flex flex-col py-2">Bus Route 2 <input type="radio" name="mode" /></div>
                {distance==='0-5' && <div className="border-2   px-2 bg-red-400 w-44 text-center flex flex-col py-2">Walk / bicycle <input type="radio" name="mode" /></div> }
                {distance!=='0-5' && <div className="border-2   px-2 bg-red-400 w-44 text-center flex flex-col py-2">Metro <input type="radio" name="mode" /></div> }
                {mode==="two-wheeler" && <div className="border-2   px-2 bg-red-400 w-44 text-center flex flex-col py-2">Two wheeler <input type="radio" name="mode" /></div>}
                {mode==="car" && <div className="border-2   px-2 bg-red-400 w-44 text-center flex flex-col py-2">Own Car <input type="radio" name="mode" /></div>}
                {mode!=="car" && mode!=="two-wheeler"  && <div className="border-2   px-2 bg-red-400 w-44 text-center flex flex-col py-2">Own Car <input type="radio" name="mode" /></div>}
                {mode==="auto" && <div className="border-2   px-2 bg-red-400 w-44 text-center flex flex-col py-2">Auto <input type="radio" name="mode" /></div>}
                {mode==="ola/uber" && <div className="border-2   px-2 bg-red-400 w-44 text-center flex flex-col py-2">ola/uber car <input type="radio" name="mode" /></div>}
                {mode!=="ola/uber" && mode!=="auto"&& <div className="border-2   px-2 bg-red-400 w-44 text-center flex flex-col py-2">ola/uber car <input type="radio" name="mode" /></div>}
            </div>
            <div>
                <h2 className=" bg-yellow-200 text-center font-semibold py-1 border-2   px-2">Total time spent while inside the vehicle(s)</h2>
                <div className="flex gap-1">
                <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center flex flex-col items-center justify-center"> 
                {source.Data[0].mode_1_trans !==0 && <div>{source.Data[0].mode_1_trans} transfer</div> }
                <FaBus />
                {source.Data[0].mode_1_ivtt}</div>
                <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center w-44 text-center flex flex-col items-center justify-center">
                {source.Data[0].mode_2_trans !==0 && <div>{source.Data[0].mode_2_trans} transfer</div> }
                <FaBus />
                {source.Data[0].mode_2_ivtt}</div>
                {distance==='0-5' && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center flex flex-col items-center justify-center"><FaWalking/>{source.Data[0].mode_4_ivtt}</div> }
                {distance!=='0-5' && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center flex flex-col items-center justify-center"><FaTrain />{source.Data[0].mode_4_ivtt}</div> }
                {mode==="two-wheeler" && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center flex flex-col items-center justify-center"><FaBicycle />{source.Data[0].mode_9_ivtt}</div>}
                {mode==="car" && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center flex flex-col items-center justify-center"><FaCar/>{source.Data[0].mode_8_ivtt}</div>}
                {mode!=="car" && mode!=="two-wheeler"  && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center flex flex-col items-center justify-center"><FaCar/>{source.Data[0].mode_8_ivtt}</div>}
                {mode==="auto" && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center flex flex-col items-center justify-center"><FaCaravan />{source.Data[0].mode_7_ivtt}</div>}
                {mode==="ola/uber" && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center flex flex-col items-center justify-center"><FaCar/>{source.Data[0].mode_5_ivtt}</div>}
                {mode!=="ola/uber" && mode!=="auto"&& <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center flex flex-col items-center justify-center"><FaCar/>{source.Data[0].mode_5_ivtt}</div>}
                </div>
            </div>
            <div>
            <h2 className=" bg-yellow-200 text-center font-semibold py-1 border-2   px-2">Total travel time spent outside vehicle(s)</h2>
            <div className="flex gap-1">
                <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">{source.Data[0].mode_1_walktime + source.Data[0].mode_1_waittime}</div>
                <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">{source.Data[0].mode_2_walktime + source.Data[0].mode_2_waittime}</div>
                {distance==='0-5' && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">{source.Data[0].mode_4_walktime + source.Data[0].mode_4_waittime}</div> }
                {distance!=='0-5' && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">{source.Data[0].mode_4_walktime + source.Data[0].mode_4_waittime}</div> }
                {mode==="two-wheeler" && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">{source.Data[0].mode_9_walktime + source.Data[0].mode_9_waittime}</div>}
                {mode==="car" && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">{source.Data[0].mode_8_walktime + source.Data[0].mode_8_waittime}</div>}
                {mode!=="car" && mode!=="two-wheeler"  && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">{source.Data[0].mode_8_walktime + source.Data[0].mode_8_waittime}</div>}
                {mode==="auto" && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">{source.Data[0].mode_7_walktime + source.Data[0].mode_7_waittime}</div>}
                {mode==="ola/uber" && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">{source.Data[0].mode_5_walktime + source.Data[0].mode_5_waittime}</div>}
                {mode!=="ola/uber" && mode!=="auto"&& <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">{source.Data[0].mode_5_walktime + source.Data[0].mode_5_waittime}</div>}
            </div>
            </div>
            <div>
            <h2 className=" bg-yellow-200 text-center font-semibold py-1 border-2   px-2">Possible delay due to traffic congestion or other uncertainties</h2>
            <div className="flex gap-1">
                <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">..up to {source.Data[0].mode_1_tvariab} min more</div>
                <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">..up to{source.Data[0].mode_2_tvariab} min more</div>
                {distance==='0-5' && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">..up to{source.Data[0].mode_4_tvariab} min more</div> }
                {distance!=='0-5' && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">..up to{source.Data[0].mode_4_tvariab} min more</div> }
                {mode==="two-wheeler" && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">..up to{source.Data[0].mode_9_tvariab} min more</div>}
                {mode==="car" && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">..up to{source.Data[0].mode_8_tvariab} min more</div>}
                {mode!=="car" && mode!=="two-wheeler"  && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">..up to{source.Data[0].mode_8_tvariab} min more</div>}
                {mode==="auto" && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">..up to{source.Data[0].mode_7_tvariab} min more</div>}
                {mode==="ola/uber" && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">..up to{source.Data[0].mode_5_tvariab} min more</div>}
                {mode!=="ola/uber" && mode!=="auto"&& <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">..up to{source.Data[0].mode_5_tvariab} min more</div>}
            </div>
            <div>
                <h2 className=" bg-yellow-200 text-center font-semibold py-1 border-2   px-2">Total one-way cost of travel</h2>
                <div className="flex gap-1">
                <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Rs. {source.Data[0].mode_1_tcost}</div>
                <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Rs. {source.Data[0].mode_2_tcost}</div>
                {distance==='0-5' && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Rs. {source.Data[0].mode_4_tcost}</div> }
                {distance!=='0-5' && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Rs. {source.Data[0].mode_4_tcost}</div> }
                {mode==="two-wheeler" && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Rs. {source.Data[0].mode_9_tcost}</div>}
                {mode==="car" && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Rs. {source.Data[0].mode_8_tcost}</div>}
                {mode!=="car" && mode!=="two-wheeler"  && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Rs. {source.Data[0].mode_8_tcost}</div>}
                {mode==="auto" && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Rs. {source.Data[0].mode_7_tcost}</div>}
                {mode==="ola/uber" && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Rs. {source.Data[0].mode_5_tcost}</div>}
                {mode!=="ola/uber" && mode!=="auto"&& <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Rs. {source.Data[0].mode_5_tcost}</div>}
                </div>
            </div>
            </div>
            <div>
                <h2 className=" bg-yellow-200 text-center font-semibold py-1 border-2   px-2">Extent of crowding in the vehicle</h2>
                <div className="flex gap-1">
                {source.Data[0].mode_1_crowd===1 && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Many seats available</div>}
                {source.Data[0].mode_1_crowd===2 && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Some seats available</div>}
                {source.Data[0].mode_1_crowd===3 && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">All seats occupied;standing space available</div>}
                {source.Data[0].mode_1_crowd===4 && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Fully crowded or packed</div>}

                {source.Data[0].mode_2_crowd===1 && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Many seats available</div>}
                {source.Data[0].mode_2_crowd===2 && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Some seats available</div>}
                {source.Data[0].mode_2_crowd===3 && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">All seats occupied;standing space available</div>}
                {source.Data[0].mode_2_crowd===4 && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Fully crowded or packed</div>}

                {source.Data[0].mode_4_crowd===1 && distance==='0-5' && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Many seats available</div> }
                {source.Data[0].mode_4_crowd===2 && distance==='0-5' && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Some  seats available</div> }
                {source.Data[0].mode_4_crowd===3 && distance==='0-5' && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">All seats occupied;standing space available</div> }
                {source.Data[0].mode_4_crowd===4 && distance==='0-5' && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Fully crowded or packed</div> }

                {source.Data[0].mode_4_crowd===1 && distance!=='0-5' && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Many seats available</div> }
                {source.Data[0].mode_4_crowd===2 && distance!=='0-5' && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Some  seats available</div> }
                {source.Data[0].mode_4_crowd===3 && distance!=='0-5' && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">All seats occupied;standing space available</div> }
                {source.Data[0].mode_4_crowd===4 && distance!=='0-5' && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Fully crowded or packed</div> }

                {source.Data[0].mode_9_crowd ===1 && mode==="two-wheeler" && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Many seats available</div>}
                {source.Data[0].mode_9_crowd ===2 && mode==="two-wheeler" && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Some  seats available</div>}
                {source.Data[0].mode_9_crowd ===3 && mode==="two-wheeler" && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">All seats occupied;standing space available</div>}
                {source.Data[0].mode_9_crowd ===4 && mode==="two-wheeler" && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Fully crowded or packed</div>}

                {source.Data[0].mode_8_crowd===1 && mode==="car" && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Many seats available</div>}
                {source.Data[0].mode_8_crowd===2 && mode==="car" && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Some  seats available</div>}
                {source.Data[0].mode_8_crowd===3 && mode==="car" && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">All seats occupied;standing space available</div>}
                {source.Data[0].mode_8_crowd===4 && mode==="car" && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Fully crowded or packed</div>}

                { source.Data[0].mode_8_crowd===1 && mode!=="car" && mode!=="two-wheeler"  && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Many seats available</div>}
                { source.Data[0].mode_8_crowd===2 && mode!=="car" && mode!=="two-wheeler"  && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Some  seats available</div>}
                { source.Data[0].mode_8_crowd===3 && mode!=="car" && mode!=="two-wheeler"  && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">All seats occupied;standing space available</div>}
                { source.Data[0].mode_8_crowd===4 && mode!=="car" && mode!=="two-wheeler"  && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Fully crowded or packed</div>}

                {source.Data[0].mode_7_crowd===1 && mode==="auto" && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Many seats available</div>}
                {source.Data[0].mode_7_crowd===2 && mode==="auto" && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Some  seats available</div>}
                {source.Data[0].mode_7_crowd===3 && mode==="auto" && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">All seats occupied;standing space available</div>}
                {source.Data[0].mode_7_crowd===4 && mode==="auto" && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Fully crowded or packed</div>}

                {source.Data[0].mode_5_crowd===1 && mode==="ola/uber" && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Many seats available</div>}
                {source.Data[0].mode_5_crowd===2 && mode==="ola/uber" && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Some  seats available</div>}
                {source.Data[0].mode_5_crowd===3 && mode==="ola/uber" && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">All seats occupied;standing space available</div>}
                {source.Data[0].mode_5_crowd===4 && mode==="ola/uber" && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Fully crowded or packed</div>}

                {source.Data[0].mode_5_crowd===1 && mode!=="ola/uber" && mode!=="auto"&& <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Many seats available</div>}
                {source.Data[0].mode_5_crowd===2 && mode!=="ola/uber" && mode!=="auto"&& <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Some  seats available</div>}
                {source.Data[0].mode_5_crowd===3 && mode!=="ola/uber" && mode!=="auto"&& <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">All seats occupied;standing space available</div>}
                {source.Data[0].mode_5_crowd===4 && mode!=="ola/uber" && mode!=="auto"&& <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Fully crowded or packed</div>}

                <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center"></div>
                <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center"></div>

                </div>
                <div>
                <h2 className=" bg-yellow-200 text-center font-semibold py-1 border-2   px-2 text-center font-semibold py-1">Service type</h2>
                <div className="flex gap-1 justify-items-start">
                {source.Data[0].mode_1_serv===1 && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Ordinary</div>}
                {source.Data[0].mode_1_serv===2 && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Express Non-AC</div>}
                {source.Data[0].mode_1_serv===3 && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Express Ac</div>}

                {source.Data[0].mode_2_serv===1 && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Ordinary</div>}
                {source.Data[0].mode_2_serv===2 && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Express Non-AC</div>}
                {source.Data[0].mode_2_serv===3 && <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center">Express Ac</div>}

                <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center"></div>
                <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center"></div>
                <div className="border-2   px-2 bg-red-400 py-2 w-44 text-center"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default MC