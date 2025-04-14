import { easeOut } from "framer-motion"

export const fadeIn = (direction, delay, duration) =>{
    return{
        hidden:{
            opacity: 0,
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'right' ? 40 : direction === 'left' ? -40 : 0,
        },
        show:{
            opacity: 1,
            y:0,
            x:0,
            transition: {
                type: 'tween',
                duration: duration,
                delay: delay,
                ease: easeOut
            }
        }
    }
}