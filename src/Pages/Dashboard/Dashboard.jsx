import Box from "../../Components/Box/Box";
import * as React from "react"
import {BiUser, BiPieChartAlt, BiTrendingUp, BiChevronUp} from "react-icons/bi";
import Chart from 'react-apexcharts'
import {useState} from "react";
import {useResizeDetector} from "react-resize-detector";

export default function Dashboard() {

    const {width: width1, ref: ref1} = useResizeDetector()
    const {width: width2, ref: ref2} = useResizeDetector()
    const {width: width3, height: height3, ref: ref3} = useResizeDetector()
    const {width: width4, height: height4, ref: ref4} = useResizeDetector()

    console.log(width3, height3)

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

    const [subConvert, setSubConvert] = useState({
        series: [{
            data: [50, 100, 0, 60, 20, 30]
        }],
        options: {
            chart: {
                type: 'line',
                toolbar: false,
                sparkline: {
                    enabled: true
                }
            },
            stroke: {
                width: 3,
                curve: 'smooth'
            },
            grid: {
                show: false,
                padding: {
                    top: 0,
                }
            },
            yaxis: {
                show: false,
                labels: {
                    show: false
                },
                max: 110,
                min: -5,
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            title: {
                show: false
            },
            colors: ['rgb(90, 141, 238)'],
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'rgb(255, 255, 255)',
                    type: 'horizontal',
                    gradientToColors: undefined,
                    opacityFrom: 0,
                    opacityTo: 0.9,
                    stops: [0, 30, 70, 100]
                }
            },
            tooltip: {
                enabled: false
            }
        },
    })

    const [incomeData, setIncomeData] = useState({
        series: [{
            data: [40, 70, 38, 90, 40, 65]
        }],
        options: {
            chart: {
                type: 'line',
                toolbar: false,
                sparkline: {
                    enabled: true
                }
            },
            stroke: {
                width: 3,
                curve: 'smooth'
            },
            grid: {
                show: false,
                padding: {
                    top: 0,
                }
            },
            yaxis: {
                show: false,
                labels: {
                    show: false
                },
                max: 110,
                min: -5,
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            title: {
                show: false
            },
            colors: ['rgb(253, 126, 20)'],
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'rgb(255, 255, 255)',
                    type: 'horizontal',
                    gradientToColors: undefined,
                    opacityFrom: 0,
                    opacityTo: 0.9,
                    stops: [0, 30, 70, 100]
                }
            },
            tooltip: {
                enabled: false
            }
        },
    })

    const [convertData, setConvertData] = useState({
        series: [
            {
                name: 'مشتریان جدید',
                data: [75, 150, 225, 200, 35, 50, 150, 180, 50, 150, 240, 140, 75, 35, 60, 120]
            },
            {
                name: 'مشتریان قدیمی',
                data: [-100, -55, -40, -120, -70, -40, -60, -50, -70, -30, -60, -40, -50, -70, -40, -50]
            }
        ],
        options: {
            chart: {
                height: '100%',
                stacked: true,
                type: 'bar',
                toolbar: {
                    show: false
                },
                sparkline: {
                    enabled: true
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: '25%',
                    borderRadius: 2,
                    startingShape: 'rounded'
                },
                distributed: true
            },
            colors: ['rgba(90, 141, 238, 80%)', 'rgba(253, 126, 20, 70%)'],
            grid: {
                show: false,
                padding: {
                    top: 0,
                    bottom: -10,
                }
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            tooltip: {
                custom: function ({series, seriesIndex, dataPointIndex, w}) {
                    return (
                        `<div dir="rtl" class='bg-white rounded py-1 px-2 shadow-md shadow-black/20 !text-2xs !font-IranYekan-Bold'>
                            <div class="flex items-center gap-2">
                                <div class="w-3 h-3 rounded-full" style="background-color: ${w.globals.colors[seriesIndex]}"></div>
                                <div>${w.globals.initialSeries[seriesIndex].name}:</div>
                                <div dir="ltr">${series[seriesIndex][dataPointIndex]}</div>
                            </div>
                        </div>`
                    )
                }
            },
            yaxis: {
                show: false,
                labels: {
                    show: false
                },
                max: 250,
                min: -130,
            },
        }
    })

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
                                <h2 className='text-3xl font-IranYekan-Bold mb-3 text-title'>
                                    32,690
                                </h2>
                                <span className='font-IranYekan-Medium text-muted text-2sm'>ارجاع 40%</span>
                            </div>
                            <div ref={ref1} className='flex relative'>
                                <Chart options={referralData.options} height={100} width={width1} type='line'
                                       series={referralData.series}/>
                            </div>
                        </Box>
                    </div>
                    <div>
                        <Box>
                            <div className="flex flex-col justify-between h-full">
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h4 className='text-lg font-IranYekan-Medium mb-3'>
                                            تبدیل
                                        </h4>
                                        <div className='flex items-center gap-1'>
                                        <span className='text-2sm font-IranYekan-Medium text-muted'>
                                            60%
                                        </span>
                                            <span className='text-success'>
                                            <BiChevronUp size='20px'/>
                                        </span>
                                        </div>
                                    </div>
                                    <h2 className='text-3xl font-IranYekan-Bold mb-3 text-title'>
                                        89K
                                    </h2>
                                </div>
                                <div ref={ref2} className='flex relative'>
                                    <Chart options={convertData.options} height={100} width={width2} type='bar'
                                           series={convertData.series}/>
                                </div>
                            </div>
                        </Box>
                    </div>
                    <div>
                        <Box>

                        </Box>
                    </div>
                    <div className='grid grid-cols-1 grid-rows-2 gap-6'>
                        <Box>
                            <div className='flex justify-between items-center gap-4'>
                                <div className='flex items-center gap-4'>
                                    <span
                                        className='bg-blue/20 rounded-full flex items-center justify-center w-10 h-10 text-blue'>
                                        <BiUser size='22px'/>
                                    </span>
                                    <div className='flex flex-col items-start'>
                                        <h4 className='text-lg font-IranYekan-Bold text-title'>38,566</h4>
                                        <span className='text-2xs font-IranYekan-Bold text-muted'>تبدیل</span>
                                    </div>
                                </div>
                                <div ref={ref3} className='flex-1 min-w-0'>
                                    <Chart series={subConvert.series} options={subConvert.options} height={40} width={width3} type='line'/>
                                </div>
                            </div>
                        </Box>
                        <Box>
                            <div className='flex justify-between items-center gap-4'>
                                <div className='flex items-center gap-4'>
                                    <span
                                        className='bg-blue/20 rounded-full flex items-center justify-center w-10 h-10 text-blue'>
                                        <BiUser size='22px'/>
                                    </span>
                                    <div className='flex flex-col items-start'>
                                        <h4 className='text-lg font-IranYekan-Bold text-title'>53,659</h4>
                                        <span className='text-2xs font-IranYekan-Bold text-muted'>درآمد</span>
                                    </div>
                                </div>
                                <div ref={ref4} className='flex-1 min-w-0'>
                                    <Chart series={incomeData.series} options={incomeData.options} height={40} width={width4} type='line'/>
                                </div>
                            </div>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    )
}