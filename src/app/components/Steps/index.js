import { GiSettingsKnobs } from 'react-icons/gi';
import ReactApexChart from 'react-apexcharts'
import { useState } from 'react';

const OPTIONS = {
  chart: {
    type: 'area',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'month',
    categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
  yaxis: {
    opposite: false
  },
  colors: ['#5FD6CF']
}

const Steps = () => {
  const [series, setSeries] = useState([{
    name: "Steps",
    data: [45, 12, 300, 200, 475, 280, 400, 250, 470]
  }])

  return (
    <div className="card xl:w-[48%] w-full flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div className="flex items-center md:gap-8 gap-5">
          <h2 className="card-title">Steps</h2>
          <GiSettingsKnobs
            className="md:text-3xl sm:text-2xl text-secondary cursor-pointer"
            onClick={() => setSeries([{
              name: "Steps",
              data: [20, 350, 130, 400, 300, 156, 950, 300, 290]
            }])}
          />
        </div>
        <span className="card-short-info my-0">
          15% up
        </span>
      </div>
      <div className="flex-1 mt-3">
        {/* <img src="/images/chart.jpg" alt="" /> */}
        <ReactApexChart options={OPTIONS} series={series} type="area" height={200} />
      </div>
    </div>
  )
}

export default Steps