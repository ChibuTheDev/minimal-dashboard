

import Chart from "../components/Chart.jsx"

function Dashboard() {
  return (
    <div className='flex flex-col py-12 px-10'>
      <h1 className=" font-bold">Dashboard</h1>


     <div className="flex space-x-8">

      <div className=" flex  w-[350px] h-[150px] border rounded border-gray-600 flex-col justify-center mt-6 p-4">
        <span>Joan Arinze </span>
        <span className=" text-gray-400">Your balance is $250</span>
      </div>

      <div className=" flex  w-[350px] h-[150px] border rounded border-gray-600 flex-col justify-center mt-6 p-4">
        <span>Joan Arinze </span>
        <span className=" text-gray-400">Your balance is $250</span>
      </div>

     </div>   


     <div className=" w-4/5 flex flex-col">
     <h2 className=" font-bold mt-6">Expenses Chart</h2>

       <Chart/>
     </div>


     <div className="flex space-x-8">

      <div className=" flex  w-[350px] h-[150px] border rounded border-gray-600 flex-col justify-center mt-6 p-4">
        <span>What you spent today </span>
        <li className=" text-gray-400">$10 on Pringles</li>
      </div>

      <div className=" flex  w-[350px] h-[150px] border rounded border-gray-600 flex-col justify-center mt-6 p-4">
        <span>What you spent in a month </span>
        <span className=" text-gray-400">You spent $20,000 this month (you get money o)</span>
      </div>

     </div>   

     

    


    </div>
  )
}

export default Dashboard
