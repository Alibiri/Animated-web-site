import { useRef } from "react";
import "./portfolio.scss"

import { motion, useScroll, useSpring } from "framer-motion"
const items =[
    {
        id:1,
        title:"Front-end react native app",
        img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fhappy%2F&psig=AOvVaw2uOa6ucpSSz2WdZ22dVDrn&ust=1710937776255000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIi23YWqgIUDFQAAAAAdAAAAABAJ",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet neque sequi, doloremque culpa reprehenderit libero. "
    },
    {
        id:2,
        title:"React Blog APP website",
        img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fblog%2F&psig=AOvVaw2uOa6ucpSSz2WdZ22dVDrn&ust=1710937776255000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIi23YWqgIUDFQAAAAAdAAAAABAo",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet neque sequi, doloremque culpa reprehenderit libero. "
    },
    {
        id:3,
        title:"Blockchain react app web 3.0",
        img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fher%2F&psig=AOvVaw2uOa6ucpSSz2WdZ22dVDrn&ust=1710937776255000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIi23YWqgIUDFQAAAAAdAAAAABBQ",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet neque sequi, doloremque culpa reprehenderit libero. "
    },
];

const Single = ({ item }) =>{
    return (
        <section>
            {item.title}
        </section>
    )
}
const Portfolio = () => {

    const ref= useRef()

    const {scrollYProgress} = useScroll({
        target:ref, 
        ofset:["end end", "start start"],
    })

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    })
    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>
        {items.map((item) =>(
            <Single item={item} key={item.id} />
        ) )}
        </div>
    )
}

export default Portfolio
