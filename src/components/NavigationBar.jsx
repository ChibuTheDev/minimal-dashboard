import { useState } from 'react'
import Logo from '../assets/Logo.png'
import rightArrow from '../assets/rightArrow.svg'
import { motion } from 'framer-motion'
import {
    LayoutDashboard,
    Clock3,
    BarChart2,
    ArrowRightLeft,
    HelpCircleIcon
} from 'lucide-react'


const navLinks = [
    {
        name:'Dashboard',
        icon:LayoutDashboard
    },
    
    {
        name:'Activity',
        icon:Clock3
    },

    {
        name:'Analytics',
        icon: BarChart2
    },

    {
        name: 'Transactions',
        icon: ArrowRightLeft
    },

    {
        name:'Help Center',
        icon: HelpCircleIcon
    },
]

const variants = {
    expanded: {width:'20%'},
    nonExpanded: {width:'5%'}
}

function NavigationBar() {

    const [active,setActive] = useState(0)
    const [isExpanded,setIsExpanded] = useState(true)

  return (
    <motion.div 
    variants={variants}
    animate = {
        isExpanded ? 'expanded':'nonExpanded'
    }

    className='px-10 py-12 flex flex-col border border-r-2 w-1/5 h-screen relative'>


      <div className='logo-div flex space-x-3 items-center'>
        <img src={Logo} alt="" />
        <span className={(isExpanded?'block':'hidden') + 'font-bold' }  > Agba Tracker</span>
      </div>

        <div 
        onClick={()=> setIsExpanded(!isExpanded)}
        className=' flex items-center justify-center w-5 h-5 rounded-full bg-[#FF8C8C] text-white absolute top-14 -right-[10.5px]'>
            <img className='w-[6px]' src={rightArrow} />
            
        </div>

       
       <div className={' mt-11 flex flex-col space-y-8' }>
            {navLinks.map((item,index)=> <div className={'flex space-x-3 p-2 rounded-sm' +
             (active===index?
             ' text-white bg-[#FF8C8C]'
             :'')}
              key={index}
              onClick={()=> setActive(index)}>
            <item.icon/> 
              <span className=' font-bold cursor-pointer'> {item.name}</span>
            </div>)}
       </div>
    </motion.div>
  )
}












export default NavigationBar