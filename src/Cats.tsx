import React, {useState, useRef, useEffect, useReducer } from 'react'
import testCat from './assets/cats/temp.jpg'
import { useSpring, animated as a } from "react-spring";
import { motion , useMotionValue, animate, useCycle} from "framer-motion"
// all movements right (html can flip vertically?)
// getup, move, jump up, jump down
export interface catProps {
    y?: number;
    x?: number;
    anim?: string;
    name: string;
}

export interface anim {
    img: string;
    max_count: number;
}
export interface imgStateType {
    current: anim;
    queue: anim[];
    count: number;
}
type counterState = {counter:number, length:number};
type counterAction = string;
// const reducer = (state:counterState, action:counterAction) => {
//     switch(action) {
//       case "Increment":
//         return {counter:(state.counter + 1) % state.length, length:state.length};
//       default:
//         return state;
//     }
//   }

export const FirstCat: React.FC<catProps> = ({x, y, name}: catProps) => {
    //const orderImg = [testCat, testCat2,testCat3];
    const [state, setstate] = useState({x:x, y:y, prevx:0, prevy:0});
    const [imgState, setImgState] = useState({ current:{img:testCat, max_count:0}, queue:[] , count:0 } as imgStateType);
    //let newOrder: Array<NodeJS.Timeout> = []
    const [animOrder, setOrder] = useState(Array<NodeJS.Timeout>());
    const xv = useMotionValue(0);
    const xy = useMotionValue(0);
    const contentProps = useSpring({ 
        to:{
            colour: 'white',
            bottom: state.y,
            left: state.x
        }
    });
    const temp = (queue:anim[], timer:NodeJS.Timeout) => {
        console.log("temp new int")
        // if (!(queue.length == 0)){
            
        //     setImgState( {
        //         current:queue[0], queue:queue.slice(0), count:0
        //     });
        //     const ints = setInterval(() => {
        //         temp(queue.slice(0), ints)
        //         clearInterval(ints)
        //     }, queue[0].max_count);
            
        // }
    }
    useEffect(() => {
        console.log(x)
        console.log(state.x)
        const prev_x:number = state.x == undefined ? 0 : state.x
        const prev_y:number = state.y == undefined ? 0 : state.y
        // set boundaries for x and y in here
        if (x != undefined && x != 0){
            // const nextMoves:anim[] = [{img:testCat2, max_count:200},{img:testCat3, max_count:600},{img:testCat2, max_count:200},{img:testCat, max_count:0}]
            // setImgState( {
            //     current:imgState.current, queue:nextMoves, count:0
            // });
            // const ints = setInterval(() => {
            //     temp(nextMoves, ints)
            //     clearInterval(ints)
            // }, 200);
        }
        setstate({x:x, y:y, prevx:prev_x, prevy:prev_y});
    }, [x]);
    const catName = name + "_cat"
    const prev_x:number = state.x == undefined ? 0 : state.x
    if (xv.get() != state.x){
        animate(xv, [xv.get(),x as number], {
            duration: 2, times: [0, 0.9]
        })
    } else {
        animate(xv, [xv.get(),xv.get(),x as number], {
            duration: 2, times: [0,0.1, 0.9]
        })
    }

    // if (!(interval)) {
    //     interval = setInterval(() => {
    //         const current_count = imgState.count;
    //         if (imgState.queue.length > 0 && current_count > imgState.current.max_count){
    //             setImgState( {
    //                 current:imgState.queue[0], queue:imgState.queue.slice(0), count:0
    //             });
    //         } else if(imgState.queue.length > 0){
    //             console.log("setting state")
    //             setImgState( {
    //                 current:imgState.current, queue:imgState.queue, count:current_count+1
    //             });
    //         }
    //     }, 200)
    // }


    return (
        
        <motion.div className="App-cat" id={catName} style={{left:xv, bottom:xy}} >
            <img src={imgState.current.img} height="200" width="200"></img>
        </motion.div>
    )
}

/* MAKE A PLACEHOLD CAT IMAGE, GET SOME BUTTONS AND DEPLOY. PROBLY ADD EITHER A CHART OR SOMEONE TO SEE TODO WORK
also make a blacksmith gif so page doesn't seem empty */

// have an interval that constantly checks if the correct image is set
// if it is, increment counter
// when counter is greater than threshold we know its time to move on
// reset the counter to 0 and pop the next img off the queue