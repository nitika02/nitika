import React, { useEffect, useState } from 'react';
import "./Portfolio.scss"
import { workNavs } from "../../../Data";
import { workImages } from '../../../Data';
import {FiGithub, FiEye} from "react-icons/fi"
import { motion } from 'framer-motion';
import GitHubCalendar from "react-github-calendar"

const Portfolio = () => {
  const [tab, setTab] = useState({ name: "all" });
  const [works,setWorks] = useState([])
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (tab.name === "all") {
      setWorks(workImages)
    } else {
      const newWork = workImages.filter(workImage => {
        return workImage.category.toLowerCase() === tab.name;

      })
      setWorks(newWork)
    }
   
  }, [tab])
  
  const activeTab = (e,index) => {
    setTab({ name: e.target.textContent.toLowerCase() });
    setActive(index)
  }

  return (
    <div className="container" id="portfolio">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="title"
      
      >
            <span>My Work</span>
            <h1>Awesome Projects</h1>
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="buttons"
      >
        {workNavs.map((workNav ,index) => {
          return (
            <button
              onClick={(e) => activeTab(e, index)}
              className={`${active === index ? "active" : ""}`}
              key={index}>{workNav}</button>
          )
        })}
      </motion.div>
      <motion.div
        initial={{x: 0 ,opacity: 0}}
          whileInView={{ x: [-250,0], opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{opacity: 0, y: -50}}
        className="workImages"
      >
        {works.map((work) => {
          return (
            <div className="workImage"
             key={work.id}
            >
              <img src={work.img} alt="workImg" />
              
              <motion.div
                initial={{opacity: 0}}
                whileHover={{ opacity: [0, 1] }}
                transition={{duration: 0.3 , ease: "easeInOut"}}
                className='hoverLayer'
              >
                <div className='desc'>
                  <h2>{work.title}</h2> 
                  <p>{work.desc}</p>
                  <p><b>Tech Stack : </b>{work.tech}</p>
                 </div>
                
                <motion.a href='#'
                whileInView={{scale: [0,1]}}
                 whileHover={{scale: [1, 1.1]}}
                 transition={{duration: 0.3}}
                 className="github"
                >
                  <a href={work.ghref} target="_blank" rel="opener"><FiGithub /></a>
                </motion.a>
                  
                <motion.a href='#'
                whileInView={{scale: [0,1]}}
                 whileHover={{scale: [1, 1.1]}}
                 transition={{duration: 0.3}}
                 className="eye"
                >
                  <a href={work.nhref} target="_blank" rel="opener"><FiEye /></a>
                </motion.a>
              </motion.div>
            </div>
          )
        })}
      </motion.div>
      {/* <motion.div
        initial={{x: 0 ,opacity: 0}}
          whileInView={{ x: [250,0], opacity: 1 }}
          transition={{duration: 1}}
        className="talk"
      >
        <div className="talk_left">
          <h3>so let's talk about <br /> <span>your next projects</span></h3>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{duration: 0.3}}
          className="talk_right">
          <a href="#contact"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div> */}
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="title"
        id="margin"
      >
            <span>Github Contributions</span>
            <h1>My Statistics</h1>
      
      <motion.div
        initial={{x: 0 ,opacity: 0}}
          whileInView={{ x: [250,0], opacity: 1 }}
          transition={{duration: 1}}
        className="talk"
      >
        <GitHubCalendar username="nitika02" />
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}} 
        className="githubStat"
      >
      <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [-150,0], opacity: 1 }}
          transition={{duration: 1}}
          className='github-stat-1'>
            <img src="https://github-readme-streak-stats.herokuapp.com/?user=nitika02&" alt="" />
          </motion.div>
          <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [150,0], opacity: 1 }}
          transition={{duration: 1}}
          className="github-stat-2"
        
        >
          <img src="https://github-readme-stats.vercel.app/api?username=nitika02&show_icons=true&locale=en" alt="" />
        </motion.div>
        </motion.div>
        </motion.div>
    </div>
  )
}

export default Portfolio