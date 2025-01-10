import Box from "../../Components/Box/Box";
import * as React from "react"
import {BiUser, BiPieChartAlt, BiTrendingUp} from "react-icons/bi";
import Chart from 'react-apexcharts'
import {useState} from "react";
import {useResizeDetector} from "react-resize-detector";

export default function Dashboard() {

    const {width, ref} = useResizeDetector()

    const [usersData, setUsersData] = useState(
        {

            series: [60, 40],
            options: {
                colors: ['rgb(57, 218, 138)', 'rgb(242, 243, 245)'],
                chart: {
                    type: 'donut',
                    width: 44, // تنظیم عرض چارت
                    events: {
                        dataPointMouseEnter: function (event, chartContext, config) {
                            // جلوگیری از تعامل با فضای خالی
                            console.log(event, config)
                            if (config.dataPointIndex === 1) {
                                // event.target.style.backgroundColor = 'rgb(242, 243, 245)'
                                event.target.style.filter = 'none' // prevent hover effect
                                // event.target.style.cursor = "default";
                                // console.log('yes')
                            }
                        },
                        dataPointClick: function (event, chartContext, config) {
                            // غیرفعال کردن کلیک روی فضای خالی
                            if (config.seriesIndex === 1) {
                                event.preventDefault();
                            }
                        },
                    }
                },
                dataLabels: {
                    enabled: false,
                    dropShadow: {
                        enabled: false
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            show: false
                        },
                    }
                }],
                legend: {
                    show: false
                },
                tooltip: {
                    enabled: false
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '63%', // تنظیم اندازه حلقه
                            background: 'transparent'
                        }
                    },
                    expandOnClick: false,
                },
            },
        }
    )

    const [sessionsData, setSessionsData] = useState(
        {

            series: [92, 8],
            options: {
                colors: ['rgb(253, 126, 20)', 'rgb(242, 243, 245)'],
                chart: {
                    type: 'donut',
                    width: 44, // تنظیم عرض چارت
                    events: {
                        dataPointMouseEnter: function (event, chartContext, config) {
                            // جلوگیری از تعامل با فضای خالی
                            console.log(event, config)
                            if (config.dataPointIndex === 1) {
                                // event.target.style.backgroundColor = 'rgb(242, 243, 245)'
                                event.target.style.filter = 'none' // prevent hover effect
                                // event.target.style.cursor = "default";
                                // console.log('yes')
                            }
                        },
                        dataPointClick: function (event, chartContext, config) {
                            // غیرفعال کردن کلیک روی فضای خالی
                            if (config.seriesIndex === 1) {
                                event.preventDefault();
                            }
                        },
                    }
                },
                dataLabels: {
                    enabled: false,
                    dropShadow: {
                        enabled: false
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            show: false
                        },
                    }
                }],
                legend: {
                    show: false
                },
                tooltip: {
                    enabled: false
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '63%', // تنظیم اندازه حلقه
                            background: 'transparent'
                        }
                    },
                    expandOnClick: false,
                },
            },
        }
    )

    const [fluctuation, setFluctuation] = useState(
        {

            series: [72, 28],
            options: {
                colors: ['rgb(255, 91, 92)', 'rgb(242, 243, 245)'],
                chart: {
                    type: 'donut',
                    width: 44, // تنظیم عرض چارت
                    events: {
                        dataPointMouseEnter: function (event, chartContext, config) {
                            // جلوگیری از تعامل با فضای خالی
                            console.log(event, config)
                            if (config.dataPointIndex === 1) {
                                // event.target.style.backgroundColor = 'rgb(242, 243, 245)'
                                event.target.style.filter = 'none' // prevent hover effect
                                // event.target.style.cursor = "default";
                                // console.log('yes')
                            }
                        },
                        dataPointClick: function (event, chartContext, config) {
                            // غیرفعال کردن کلیک روی فضای خالی
                            if (config.seriesIndex === 1) {
                                event.preventDefault();
                            }
                        },
                    }
                },
                dataLabels: {
                    enabled: false,
                    dropShadow: {
                        enabled: false
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            show: false
                        },
                    }
                }],
                legend: {
                    show: false
                },
                tooltip: {
                    enabled: false
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '63%', // تنظیم اندازه حلقه
                            background: 'transparent'
                        }
                    },
                    expandOnClick: false,
                },
            },
        }
    )

    const [data, setData] = useState({

        series: [{
            name: '1400',
            data: [8, 9, 15, 20, 14, 22, 29, 27, 13]
        }, {
            name: '1401',
            data: [5, 7, 12, 17, 9, 17, 26, 21, 10]
        }],
        options: {
            colors: ['rgb(90, 141, 238)', 'rgba(90, 141, 238, 30%)'],
            chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                    show: false
                },
            },
            grid: {
                borderColor: '#e9ecee'
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '6px',
                    borderRadius: 2,
                    borderRadiusApplication: 'end',
                },
                expandOnClick: false
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 0,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر'],
                labels: {
                    style: {
                        colors: 'rgb(103, 119, 136)',
                        cssClass: '!font-IranYekan-Bold'
                    }
                }
            },
            yaxis: {
                title: {
                    text: undefined
                },
                min: 0,
                max: 30,
                stepSize: 10,
                labels: {
                    style: {
                        colors: 'rgb(103, 119, 136)',
                        cssClass: '!font-IranYekan-Bold'
                    }
                }
            },
            fill: {
                opacity: 1
            },
            legend: {
                show: false
            },
            tooltip: {
                custom: function ({series, seriesIndex, dataPointIndex, w}) {
                    return (
                        `<div dir="rtl" class='bg-white rounded py-1 px-2 shadow-md shadow-black/20 !text-2xs !font-IranYekan-Bold'>
                            <div class='pb-1 !border-b !border-b-secondary mb-1'>
                                <span class=''>${w.globals.labels[seriesIndex]}</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <div class="w-3 h-3 rounded-full" style="background-color: ${w.globals.colors[seriesIndex]}"></div>
                                <div>${w.globals.initialSeries[seriesIndex].name}:</div>
                                <div>${series[seriesIndex][dataPointIndex]} هزارتومان</div>
                            </div>
                        </div>`
                    )
                }
            }
        },


    });

    const [referralData, setReferralData] = useState(
        {

            series: [{
                name: "سری 1",
                data: [0, 150, 25, 100, 15, 149]
            }],
            options: {
                colors: ['rgb(57, 218, 138)'],
                chart: {
                    type: 'line',
                    parentHeightOffset: 0,
                    parentWidthOffset: 0,
                    height: '100%',
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: false
                    },
                },
                markers: {
                    size: 5,
                    colors: 'transparent',
                    strokeColors: 'transparent',
                    strokeWidth: 4,
                    discrete: [
                        {
                            fillColor: '#fff',
                            seriesIndex: 0,
                            dataPointIndex: 5,
                            strokeColor: 'rgb(57, 218, 138)',
                            strokeWidth: 4,
                            size: 5,
                            radius: 2
                        }
                    ],
                    hover: {
                        size: 7
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 4,
                    curve: 'smooth'
                },
                title: {
                    enabled: false,
                },
                grid: {
                    show: false,
                    padding: {
                        top: -25,
                        bottom: -20,
                    }
                },
                xaxis: {
                    labels: {
                        show: false
                    },
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                },
                yaxis: {
                    show: false,
                    labels: {
                        show: false
                    },
                    max: 155,
                    min: 0,
                    stepSize: 25,
                },
                legend: {
                    show: false
                },
                tooltip: {
                    custom: function ({series, seriesIndex, dataPointIndex, w}) {
                        return (
                            `<div dir="rtl" class='bg-white rounded py-1 px-2 shadow-md shadow-black/20 !text-2xs !font-IranYekan-Bold'>
                            <div class='pb-1 !border-b !border-b-secondary mb-1'>
                                <span class=''>${dataPointIndex + 1}</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <div class="w-3 h-3 rounded-full" style="background-color: ${w.globals.colors[seriesIndex]}"></div>
                                <div>${w.globals.initialSeries[seriesIndex].name}:</div>
                                <div>${series[seriesIndex][dataPointIndex]}</div>
                            </div>
                        </div>`
                        )
                    }
                }
            },


        }
    )

    return (
        <div className='container'>
            <div className='grid grid-cols-12 gap-6'>
                <div className='col-span-6'>
                    <Box>
                        <div className='pb-[22px]'>
                            <h6 className='font-IranYekan-Medium text-title text-lg'>
                                آمار وب&zwnj;سایت
                            </h6>
                        </div>
                        <div className='flex items-center justify-around'>
                            <div>
                                <div className='flex items-center gap-2 mb-2'>
                                    <BiUser size='20px'/>
                                    <span className='font-IranYekan-Medium text-2sm text-caption'>کاربران</span>
                                </div>
                                <div className='flex items-center'>
                                    <div>
                                        <Chart options={usersData.options} series={usersData.series} type="donut"
                                               height={44} width={44}/>
                                    </div>
                                    <h5 className='font-IranYekan-Medium text-2xl text-title'>61K</h5>
                                </div>
                            </div>
                            <div>
                                <div className='flex items-center gap-2 mb-2'>
                                    <BiPieChartAlt size='20px'/>
                                    <span className='font-IranYekan-Medium text-2sm text-caption'>جلسات</span>
                                </div>
                                <div className='flex items-center'>
                                    <div>
                                        <Chart options={sessionsData.options} series={sessionsData.series} type="donut"
                                               height={44} width={44}/>
                                    </div>
                                    <h5 className='font-IranYekan-Medium text-2xl text-title'>92K</h5>
                                </div>
                            </div>
                            <div>
                                <div className='flex items-center gap-2 mb-2'>
                                    <BiTrendingUp size='20px'/>
                                    <span className='font-IranYekan-Medium text-2sm text-caption'>نرخ نوسان</span>
                                </div>
                                <div className='flex items-center'>
                                    <div>
                                        <Chart options={fluctuation.options} series={fluctuation.series} type="donut"
                                               height={44} width={44}/>
                                    </div>
                                    <h5 className='font-IranYekan-Medium text-2xl text-title'>72.6%</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Chart options={data.options} series={data.series} type="bar"
                                   height={250}/>
                        </div>
                    </Box>
                </div>
                <div className='col-span-6 grid grid-cols-2 grid-rows-2 gap-6'>
                    <div className='text-center'>
                        <Box>
                            <div>
                                <h2 className='text-3xl font-IranYekan-Bold mb-3'>
                                    32,690
                                </h2>
                                <span className='font-IranYekan-Medium text-muted text-2sm'>ارجاع 40%</span>
                            </div>
                            <div ref={ref} className='w-full flex items-center justify-center'>
                                <Chart options={referralData.options} height={100} type='line'
                                       series={referralData.series}/>
                            </div>
                        </Box>
                    </div>
                    <div>
                        <Box/>
                    </div>
                    <div>
                        <Box/>
                    </div>
                    <div>
                        <Box/>
                    </div>
                </div>
            </div>
        </div>
    )
}