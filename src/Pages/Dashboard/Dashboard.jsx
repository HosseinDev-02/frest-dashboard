import Box from "../../Components/Box/Box";
import * as React from "react"
import {
    BiUser,
    BiPieChartAlt,
    BiTrendingUp,
    BiChevronUp,
    BiChevronDown,
    BiArrowFromBottom,
    BiUpArrowAlt, BiDownArrow, BiDownArrowAlt, BiCheck, BiChat
} from "react-icons/bi";
import Chart from 'react-apexcharts'
import {useState} from "react";
import {useResizeDetector} from "react-resize-detector";
import '../../custom.css'
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import TimeActivityBox from "../../Components/TimeActivityBox/TimeActivityBox";
import UserBox from "../../Components/UserBox/UserBox";

export default function Dashboard() {

    const {width: width1, ref: ref1} = useResizeDetector()
    const {width: width2, ref: ref2} = useResizeDetector()
    const {width: width3, ref: ref3} = useResizeDetector()
    const {width: width4, ref: ref4} = useResizeDetector()
    const {width: width5, ref: ref5} = useResizeDetector()
    const {width: width6, ref: ref6, height: height6} = useResizeDetector()
    const [showYears, setShowYears] = useState(false)
    const [selectedYear, setSelectedYear] = useState('1400')


    const [usersData, setUsersData] = useState(
        {
            series: [60],
            options: {
                colors: ['rgb(57, 218, 138)'],
                chart: {
                    type: 'radialBar',
                    width: '100%', // تنظیم عرض چارت
                    height: '100%', // تنظیم عرض چارت
                },
                dataLabels: {
                    enabled: false,
                    dropShadow: {
                        enabled: false
                    }
                },
                grid: {
                    padding: {
                        top: -6,
                        bottom: -6,
                        left: -6,
                        right: -6
                    }
                },
                legend: {
                    show: false
                },
                tooltip: {
                    enabled: false
                },
                stroke: {
                    lineCap: 'round'
                },
                plotOptions: {
                    radialBar: {
                        // size: 100,
                        hollow: {
                            size: '25%',
                        },
                        dataLabels: {
                            show: false
                        },
                    },
                },
            },
        }
    )

    const [sessionsData, setSessionsData] = useState(
        {
            series: [75],
            options: {
                colors: ['rgb(253, 126, 20)'],
                chart: {
                    type: 'radialBar',
                    width: '100%', // تنظیم عرض چارت
                    height: '100%', // تنظیم عرض چارت
                },
                dataLabels: {
                    enabled: false,
                    dropShadow: {
                        enabled: false
                    }
                },
                grid: {
                    padding: {
                        top: -6,
                        bottom: -6,
                        left: -6,
                        right: -6
                    }
                },
                legend: {
                    show: false
                },
                tooltip: {
                    enabled: false
                },
                stroke: {
                    lineCap: 'round'
                },
                plotOptions: {
                    radialBar: {
                        // size: 100,
                        hollow: {
                            size: '25%',
                        },
                        dataLabels: {
                            show: false
                        },
                    },
                },
            },
        }
    )

    const [fluctuation, setFluctuation] = useState(
        {
            series: [65],
            options: {
                colors: ['rgb(255, 91, 92)'],
                chart: {
                    type: 'radialBar',
                    width: '100%', // تنظیم عرض چارت
                    height: '100%', // تنظیم عرض چارت
                },
                dataLabels: {
                    enabled: false,
                    dropShadow: {
                        enabled: false
                    }
                },
                grid: {
                    padding: {
                        top: -6,
                        bottom: -6,
                        left: -6,
                        right: -6
                    }
                },
                legend: {
                    show: false
                },
                tooltip: {
                    enabled: false
                },
                stroke: {
                    lineCap: 'round'
                },
                plotOptions: {
                    radialBar: {
                        // size: 100,
                        hollow: {
                            size: '25%',
                        },
                        dataLabels: {
                            show: false
                        },
                    },
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

    const [viewsData, setViewsData] = useState(
        {
            series: [80, 30, 60],
            options: {
                states: {
                    active: {
                        filter: {
                            type: 'none' /* none, lighten, darken */
                        }
                    }
                },
                labels: ['اجتماعی', 'ایمیل', 'جستجو'],
                colors: ['rgb(90, 141, 238)', "rgb(0, 207, 221)", 'rgb(253, 126, 20)'],
                chart: {
                    type: 'donut',
                    height: '100%',
                    width: '100%',
                    fontFamily: 'IranYekan Bold',
                    foreColor: 'rgb(103, 119, 136)',
                },
                stroke: {
                    colors: ["transparent"],
                },
                legend: {
                    position: 'bottom',
                    markers: {
                        size: 7,
                        shape: undefined,
                        strokeWidth: 1,
                        fillColors: undefined,
                        customHTML: undefined,
                        onClick: undefined,
                    },
                },
                tooltip: {
                    custom: function ({series, seriesIndex, w}) {
                        return (
                            `<div class='p-2 rounded flex items-center gap-1 !text-xs !font-IranYekan-Bold' style="background-color: ${w.globals.colors[seriesIndex]}">
                                <span>
                                    ${w.globals.labels[seriesIndex]} :
                                </span>
                                <span>
                                    ${series[seriesIndex]}
                                </span>
                            </div>`
                        )
                    }
                },
                dataLabels: {
                    enabled: false
                },
                plotOptions: {
                    pie: {
                        expandOnClick: false,
                        donut: {
                            size: '90%', // تنظیم اندازه حلقه,
                            labels: {
                                show: true,
                                name: {
                                    show: true,
                                    fontSize: '16px',
                                    fontFamily: 'IranYekan Medium',
                                    offsetY: 25,
                                },
                                value: {
                                    show: true,
                                    fontSize: '24px',
                                    fontFamily: 'IranYekan Bold',
                                    color: 'rgb(81, 99, 119)',
                                    offsetY: -20,
                                },
                                total: {
                                    show: true,
                                    label: 'بازدید',
                                    showAlways: false,
                                    color: 'rgb(103, 119, 136)',
                                    fontFamily: 'IranYekan Bold'
                                }
                            },
                        }
                    },
                },
            },
        }
    )

    const [lastYearProfit, setLastYearProfit] = useState(
        {

            series: [60],
            options: {
                colors: ['rgb(255, 91, 92)'],
                chart: {
                    type: 'radialBar',
                    width: '100%', // تنظیم عرض چارت
                    height: '100%', // تنظیم عرض چارت
                },
                dataLabels: {
                    enabled: false,
                    dropShadow: {
                        enabled: false
                    }
                },
                grid: {
                    padding: {
                        top: -6,
                        bottom: -6,
                        left: -6,
                        right: -6
                    }
                },
                legend: {
                    show: false
                },
                tooltip: {
                    enabled: false
                },
                stroke: {
                    lineCap: 'round'
                },
                plotOptions: {
                    radialBar: {
                        // size: 100,
                        hollow: {
                            size: '25%',
                        },
                        dataLabels: {
                            show: false
                        },
                    },
                },
            },
        }
    )
    const [newYearProfit, setNewYearProfit] = useState(
        {

            series: [38],
            options: {
                colors: ['rgb(0, 207, 221)'],
                chart: {
                    type: 'radialBar',
                    width: '100%', // تنظیم عرض چارت
                    height: '100%', // تنظیم عرض چارت
                },
                dataLabels: {
                    enabled: false,
                    dropShadow: {
                        enabled: false
                    }
                },
                grid: {
                    padding: {
                        top: -6,
                        bottom: -6,
                        left: -6,
                        right: -6
                    }
                },
                legend: {
                    show: false
                },
                tooltip: {
                    enabled: false
                },
                stroke: {
                    lineCap: 'round'
                },
                plotOptions: {
                    radialBar: {
                        // size: 100,
                        hollow: {
                            size: '25%',
                        },
                        dataLabels: {
                            show: false
                        },
                    },
                },
            },
        }
    )

    const [registerData, setRegisterData] = useState({

        series: [{
            name: 'سری 1',
            data: [30, 55, 45, 95, 70, 50, 65]
        }],
        options: {
            colors: ['rgba(253, 126, 20, 15%)', 'rgba(253, 126, 20, 15%)', 'rgba(253, 126, 20, 15%)', 'rgba(253, 126, 20, 15%)', 'rgba(253, 126, 20, 60%)', 'rgba(253, 126, 20, 15%)', 'rgba(253, 126, 20, 15%)'],
            chart: {
                type: 'bar',
                width: '100%',
                height: 350,
                toolbar: {
                    show: false
                },
            },
            grid: {
                show: false,
                padding: {
                    top: -10,
                    bottom: -10,
                    left: -10
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '50%',
                    borderRadius: 1,
                    distributed: true, // برای تنظیم رنگ هر میله به صورت جداگانه
                    barHeight: '80%'
                },
                expandOnClick: false
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 0,
            },
            xaxis: {
                categories: ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'],
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
                min: 0,
                max: 100,
                labels: {
                    show: false
                }
            },
            legend: {
                show: false
            },
            tooltip: {
                custom: function ({series, seriesIndex, dataPointIndex, w}) {
                    return (
                        `<div dir="rtl" class='bg-white rounded py-1 px-2 shadow-md shadow-black/20 !text-2xs !font-IranYekan-Bold'>
                            <div class='pb-1 !border-b !border-b-secondary mb-1'>
                                <span class=''>${w.globals.labels[dataPointIndex]}</span>
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


    });

    const [salesData, setSalesData] = useState({

        series: [{
            name: 'سری 1',
            data: [60, 35, 25, 75, 15, 42, 85]
        }],
        options: {
            colors: ['rgb(90, 141, 238)'],
            chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                    show: false
                },
            },
            grid: {
                show: false,
                padding: {
                    left: -10
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '25%',
                    borderRadius: 4,
                    borderRadiusApplication: 'around',
                    distributed: true, // برای تنظیم رنگ هر میله به صورت جداگانه
                    barHeight: '80%',
                    colors: {
                        backgroundBarColors: ['rgba(90, 141, 238, 20%)'],
                        backgroundBarRadius: 4,
                    }
                },
                expandOnClick: false
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 0,
            },
            xaxis: {
                categories: ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'],
                labels: {
                    show: true,
                    style: {
                        fontFamily: 'IranYekan Bold',
                        colors: 'rgb(168, 177, 187)'
                    }
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
            },
            yaxis: {
                min: 0,
                max: 100,
                labels: {
                    show: false
                }
            },
            legend: {
                show: false
            },
            tooltip: {
                custom: function ({series, seriesIndex, dataPointIndex, w}) {
                    return (
                        `<div dir="rtl" class='bg-white rounded py-1 px-2 shadow-md shadow-black/20 !text-2xs !font-IranYekan-Bold'>
                            <div class='pb-1 !border-b !border-b-secondary mb-1'>
                                <span class=''>${w.globals.labels[dataPointIndex]}</span>
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


    });


    const [increaseData, setIncreaseData] = useState(
        {
            series: [78],
            options: {
                states: {
                    active: {
                        filter: {
                            type: 'none' /* none, lighten, darken */
                        }
                    }
                },
                chart: {
                    type: 'radialBar',
                    fontFamily: 'IranYekan Bold',
                    width: '100%',
                    height: '100%'
                    // foreColor: 'rgb(103, 119, 136)',
                },
                legend: {
                    show: false
                },
                tooltip: {
                    enabled: false
                },
                dataLabels: {
                    enabled: false
                },
                colors: ['rgba(90, 141, 238, 50%)'],
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        type: 'horizontal',
                        gradientToColors: ['rgba(255, 91, 92, 50%)'],
                        shadeIntensity: 0.5,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100],
                        inverseColors: false
                    },
                },
                stroke: {
                    dashArray: 3, // تعریف فاصله نقطه‌چین (5 پیکسل نقطه، 5 پیکسل فاصله)
                },
                grid: {
                    show: false,
                    padding: {
                        top: -23,
                        bottom: -2
                    }
                },
                labels: ['رشد'],
                plotOptions: {
                    radialBar: {
                        size: 100,
                        startAngle: -135,
                        endAngle: 135,
                        track: {
                            background: '#fff',
                            strokeWidth: '50%',
                        },
                        hollow: {
                            size: '55%'
                        },
                        dataLabels: {
                            show: true,
                            name: {
                                offsetY: 20,
                                show: true,
                                color: '#888',
                                fontSize: '17px',
                            },
                            value: {
                                formatter: function (val) {
                                    return `${val}%`;
                                },
                                fontSize: '26px',
                                fontFamily: 'IranYekan Bold',
                                show: true,
                                color: 'rgb(103, 119, 136)',
                                offsetY: -25,
                            }
                        }
                    }
                },
            },
        }
    )


    return (
        <div className='container'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>
                <div className='col-span-6'>
                    <Box>
                        <div className='pb-[22px]'>
                            <h3 className='font-IranYekan-Medium text-title text-lg'>
                                آمار وب&zwnj;سایت
                            </h3>
                        </div>
                        <div className='flex items-center justify-around flex-wrap gap-4'>
                            <div>
                                <div className='flex items-center gap-2 mb-2'>
                                    <BiUser size='20px'/>
                                    <span className='font-IranYekan-Medium text-2sm text-caption'>کاربران</span>
                                </div>
                                <div className='flex items-center'>
                                    <div>
                                        <Chart options={usersData.options} series={usersData.series} type="radialBar"
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
                                        <Chart options={sessionsData.options} series={sessionsData.series} type="radialBar"
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
                                        <Chart options={fluctuation.options} series={fluctuation.series} type="radialBar"
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
                <div className='col-span-6 grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-6'>
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
                            <Chart series={viewsData.series} options={viewsData.options} height='100%' width='100%'
                                   type='donut'/>
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
                                    <Chart series={subConvert.series} options={subConvert.options} height={40}
                                           width={width3} type='line'/>
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
                                    <Chart series={incomeData.series} options={incomeData.options} height={40}
                                           width={width4} type='line'/>
                                </div>
                            </div>
                        </Box>
                    </div>
                </div>
            </div>
            <div className='mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
                <Box>
                    <div>
                        <div className='pb-[22px]'>
                            <h3 className='font-IranYekan-Medium text-title text-lg'>
                                فعالیت
                            </h3>
                        </div>
                        <div className='flex flex-col gap-8'>
                            <ProgressBar icon='BiCube' title='کل فروش' value='2,459' color='rgb(90, 141, 238)'
                                         bgColor='rgba(90, 141, 238, 20%)' percent='46%'/>
                            <ProgressBar icon='BiDollar' title='درآمد' value='8,478' color='rgb(57, 218, 138)'
                                         bgColor='rgba(57, 218, 138, 20%)' percent='77%'/>
                            <ProgressBar icon='BiTrendingUp' title='بودجه' value='2,459' color='rgb(253, 126, 20)'
                                         bgColor='rgba(253, 126, 20, 20%)' percent='80%'/>
                            <ProgressBar icon='BiCheck' title='وظایف' value='184' color='rgb(255, 91, 92)'
                                         bgColor='rgba(255, 91, 92, 20%)' percent='35%'/>
                        </div>

                    </div>
                </Box>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 grid-rows-2 gap-6'>
                    <Box>
                        <div className='pb-[22px]'>
                            <h3 className='font-IranYekan-Medium text-title text-lg'>
                                گزارش سود
                            </h3>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-start'>
                                <div className='flex flex-1 max-w-[50px] h-[50px] shrink-0'>
                                    <Chart options={lastYearProfit.options} series={lastYearProfit.series} type="radialBar"
                                           width={50} height={50}/>
                                </div>
                                <div className='flex flex-col items-start'>
                                    <h3 className='font-IranYekan-Bold text-lg text-title text-wrap'>
                                        12k تومان
                                    </h3>
                                    <span className='font-IranYekan-Bold text-2xs text-muted'>
                                        1400
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-start'>
                                <div className='flex flex-1 max-w-[50px] h-[50px] shrink-0'>
                                    <Chart options={newYearProfit.options} series={newYearProfit.series} type="radialBar"
                                           width={50} height={50}/>
                                </div>
                                <div className='flex flex-col items-start'>
                                    <h3 className='font-IranYekan-Bold text-lg text-title text-wrap'>
                                        16K تومان
                                    </h3>
                                    <span className='font-IranYekan-Bold text-2xs text-muted'>
                                        1401
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Box>
                    <Box>
                        <div>
                            <div className=''>
                                <h3 className='font-IranYekan-Medium text-title text-lg'>
                                    ثبت نام
                                </h3>
                            </div>
                            <div className='flex justify-between items-center gap-4'>
                                <div className='flex flex-col gap-1 items-start font-IranYekan-Bold'>
                                    <div className='flex items-center'>
                                        <span className='text-title text-lg'>58.4K</span>
                                        <span className='text-success'>
                                            <BiChevronUp size='20px'/>
                                        </span>
                                    </div>
                                    <span className='text-success text-xs'>
                                        12.8%
                                    </span>
                                </div>
                                <div ref={ref5} className='flex relative flex-1 min-w-0 max-w-[155px] h-[95px]'>
                                    <Chart options={registerData.options} series={registerData.series} type='bar'
                                           height='100%' width={width5}/>
                                </div>
                            </div>
                        </div>
                    </Box>
                </div>
                <Box>
                    <div className=''>
                        <h3 className='font-IranYekan-Medium text-title text-lg'>
                            فروش&zwnj;ها
                        </h3>
                        <span className='font-IranYekan-Bold text-muted text-2xs'>
                            محاسبه شده در 7 روز اخیر
                        </span>
                    </div>
                    <div className='h-[120px]'>
                        <Chart options={salesData.options} series={salesData.series} type='bar' height='100%'
                               width='100%'/>
                    </div>
                    <div className='pt-[22px] flex flex-col gap-4'>
                        <div className='flex items-center justify-between font-IranYekan-Bold'>
                            <div className='flex items-start gap-2'>
                                <BiUpArrowAlt size='20px' fill='rgb(var(--color-blue))'/>
                                <div className='flex flex-col items-start gap-1'>
                                    <span className='text-2sm text-title'>
                                        بیشترین فروش
                                    </span>
                                    <span className='text-2xs text-muted font-IranYekan-Medium'>
                                        شنبه
                                    </span>
                                </div>
                            </div>
                            <span className='text-2sm'>
                                28.6K
                            </span>
                        </div>
                        <div className='flex items-center justify-between font-IranYekan-Bold'>
                            <div className='flex items-start gap-2'>
                                <BiDownArrowAlt size='20px' fill='rgb(var(--color-title))'/>
                                <div className='flex flex-col items-start gap-1'>
                                    <span className='text-2sm text-title'>
                                        کمترین فروش
                                    </span>
                                    <span className='text-2xs text-muted font-IranYekan-Medium'>
                                        چهارشنبه
                                    </span>
                                </div>
                            </div>
                            <span className='text-2sm'>
                                24.6K
                            </span>
                        </div>
                    </div>
                </Box>
                <Box>
                    <div className='flex flex-col items-center gap-6'>
                        <div className='relative inline-block w-20'>
                            <button onClick={() => setShowYears(prevState => !prevState)}
                                    className={`flex items-center justify-between px-3 w-full text-2xs font-IranYekan-Bold border border-secondary rounded transition-colors duration-300 hover:bg-secondary hover:text-white ${showYears ? 'bg-secondary text-white' : ''}`}>
                                <span>{selectedYear}</span>
                                <BiChevronDown size='16px'/>
                            </button>
                            <div
                                className={`absolute left-0 top-full w-full bg-white shadow shadow-secondary/15 rounded z-50 transition-all duration-300 ${showYears ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                                <ul className='flex flex-col text-2xs font-IranYekan-Bold w-full bg-white rounded overflow-hidden'>
                                    <li onClick={(event) => {
                                        setSelectedYear(event.target.innerHTML)
                                        setShowYears(false)
                                    }}
                                        className='py-2 px-3 bg-white transition-colors duration-300 hover:bg-gray-light cursor-pointer'>1399
                                    </li>
                                    <li onClick={(event) => {
                                        setSelectedYear(event.target.innerHTML)
                                        setShowYears(false)
                                    }}
                                        className='py-2 px-3 bg-white transition-colors duration-300 hover:bg-gray-light cursor-pointer'>1401
                                    </li>
                                    <li onClick={(event) => {
                                        setSelectedYear(event.target.innerHTML)
                                        setShowYears(false)
                                    }}
                                        className='py-2 px-3 bg-white transition-colors duration-300 hover:bg-gray-light cursor-pointer'>1402
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div ref={ref6} className='h-[240px] relative flex flex-col text-center'>
                            <Chart options={increaseData.options} series={increaseData.series} type='radialBar'
                                   height={height6} width={width6}/>
                            <h3 className='font-IranYekan-Bold text-2sm'>
                                62% رشد در سال 1401
                            </h3>
                        </div>
                    </div>
                </Box>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-6 mt-6'>
                <div className='md:col-span-7'>
                    <Box>
                        <div className='flex flex-col justify-between gap-[22px] h-full'>
                            <div>
                                <div className='pb-[22px]'>
                                    <UserBox img='/images/avatars/1.png' title='گزارش مالی برای امیلیا کلارک' caption='یک برنامه عالی برای مدیریت پروژه' titleSize={18} imgSize={56} captionSize={13}/>
                                </div>
                                <div className='flex flex-wrap mt-6 gap-4 lg:gap-8'>
                                    <div className='flex flex-col items-start gap-4'>
                                    <span className='font-IranYekan-Bold text-title text-2sm'>
                                        تاریخ شروع
                                    </span>
                                        <div
                                            className='bg-success/20 text-success font-IranYekan-Bold text-xs rounded py-1 px-2.5 flex items-center justify-center'>
                                            2 فروردین 1401
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-start gap-4'>
                                    <span className='font-IranYekan-Bold text-title text-2sm'>
                                        تاریخ پایان
                                    </span>
                                        <div
                                            className='bg-red/20 text-red font-IranYekan-Bold text-xs rounded py-1 px-2.5 flex items-center justify-center'>
                                            6 اردیبهشت 1401
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-start gap-4'>
                                    <span className='font-IranYekan-Bold text-title text-2sm'>
                                        اعضا
                                    </span>
                                        <div
                                            className='relative flex'>
                                            <a className='flex items-center justify-center rounded-full border-2 border-white w-6 h-6 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:z-50 hover:shadow-md hover:shadow-secondary/50'
                                               href="#">
                                                <img className='w-full h-full object-cover' src="/images/avatars/1.png"
                                                     alt="member_name"/>
                                            </a>
                                            <a className='flex items-center justify-center rounded-full border-2 border-white w-6 h-6 overflow-hidden -mr-3 transition-all duration-300 hover:-translate-y-2 hover:z-50 hover:shadow-md hover:shadow-secondary/50'
                                               href="#">
                                                <img className='w-full h-full object-cover' src="/images/avatars/4.png"
                                                     alt="member_name"/>
                                            </a>
                                            <a className='flex items-center justify-center rounded-full border-2 border-white w-6 h-6 overflow-hidden -mr-3 transition-all duration-300 hover:-translate-y-2 hover:z-50 hover:shadow-md hover:shadow-secondary/50'
                                               href="#">
                                                <img className='w-full h-full object-cover' src="/images/avatars/5.png"
                                                     alt="member_name"/>
                                            </a>
                                            <a className='flex items-center justify-center rounded-full border-2 border-white w-6 h-6 overflow-hidden -mr-3 transition-all duration-300 hover:-translate-y-2 hover:z-50 hover:shadow-md hover:shadow-secondary/50'
                                               href="#">
                                                <img className='w-full h-full object-cover' src="/images/avatars/10.png"
                                                     alt="member_name"/>
                                            </a>
                                            <a className='flex items-center justify-center rounded-full border-2 border-white w-6 h-6 overflow-hidden -mr-3 transition-all duration-300 hover:-translate-y-2 hover:z-50 hover:shadow-md hover:shadow-secondary/50'
                                               href="#">
                                                <img className='w-full h-full object-cover' src="/images/avatars/12.png"
                                                     alt="member_name"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-start gap-4'>
                                    <span className='font-IranYekan-Bold text-title text-2sm'>
                                        بودجه
                                    </span>
                                        <span
                                            className='font-IranYekan-Bold text-2sm'>
                                        249 میلیارد تومان
                                    </span>
                                    </div>
                                    <div className='flex flex-col items-start gap-4'>
                                    <span className='font-IranYekan-Bold text-title text-2sm'>
                                        هزینه&zwnj;ها
                                    </span>
                                        <span
                                            className='font-IranYekan-Bold text-2sm'>
                                        82k تومان
                                    </span>
                                    </div>
                                </div>
                                <div className='mt-12'>
                                    <ProgressBar height='8' percent='80%' color='rgb(90, 141, 238)'
                                                 title='پیشرفت املیا کلارک'/>
                                </div>
                                <p className='text-2sm font-IranYekan-Bold mt-4 leading-[1.85]'>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                    گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
                                </p>
                            </div>
                            <div className='flex items-center gap-4 pt-[22px] border-t border-[#e9ecee]'>
                                <div className='flex items-center gap-1'>
                                    <BiCheck size='20px'/>
                                    <span className='font-IranYekan-Bold text-2sm'>74 وظیفه</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <BiChat size='20px'/>
                                    <span className='font-IranYekan-Bold text-2sm'>678 دیدگاه</span>
                                </div>
                            </div>
                        </div>
                    </Box>
                </div>
                <div className='md:col-span-5'>
                    <Box>
                        <div>
                            <div className='pb-[22px]'>
                                <h3 className='font-IranYekan-Medium text-title text-lg'>
                                    خط زمانی فعالیت
                                </h3>
                            </div>
                            <div className='flex flex-col gap-[28px] border-r border-zinc'>
                                <TimeActivityBox shapeColor='rgb(90,141,238)' date='12 دقیقه قبل' title='12 صورتحساب پرداخت شد' caption='صورتحساب ها به شرکت پرداخت شد'>
                                    <div>
                                        <a className='flex items-center gap-4' href="#">
                                        <span className='w-6 h-6 flex items-center justify-center'>
                                            <img className='w-full h-full object-cover' src="/images/icons/pdf.png"
                                                 alt="logo_icon"/>
                                        </span>
                                            <span className='font-IranYekan-Bold text-2sm'>Invoices.pdf</span>
                                        </a>
                                    </div>
                                </TimeActivityBox>
                                <TimeActivityBox shapeColor='rgb(253,126,20)' title='ملاقات با مشتری' date='45 دقیقه قبل' caption='ملاقات برای پروژه با استیو در 10:15 ق.ظ'>
                                    <UserBox img='/images/avatars/2.png' title='بیل گیتس (مشتری)' caption='بنیان‌گذار مایکروسافت' titleSize={15} imgSize={38} captionSize={15}/>
                                </TimeActivityBox>
                                <TimeActivityBox lastItem={true} shapeColor='rgb(0,207,221)' title='ایجاد یک پروژه جدید برای مشتری' date='2 روز قبل' caption='5 عضو تیم در یک پروژه'>
                                    <div
                                        className='relative flex pb-[22px]'>
                                        <a className='flex items-center justify-center rounded-full border-2 border-white w-8 h-8 overflow-hidden relative right-0 transition-all duration-300 hover:-translate-y-2 hover:z-50 hover:shadow-md hover:shadow-secondary/50'
                                           href="#">
                                            <img className='w-full h-full object-cover' src="/images/avatars/1.png"
                                                 alt="member_name"/>
                                        </a>
                                        <a className='flex items-center justify-center rounded-full border-2 border-white w-8 h-8 overflow-hidden relative -right-2 transition-all duration-300 hover:-translate-y-2 hover:z-50 hover:shadow-md hover:shadow-secondary/50'
                                           href="#">
                                            <img className='w-full h-full object-cover' src="/images/avatars/4.png"
                                                 alt="member_name"/>
                                        </a>
                                        <a className='flex items-center justify-center rounded-full border-2 border-white w-8 h-8 overflow-hidden relative -right-4 transition-all duration-300 hover:-translate-y-2 hover:z-50 hover:shadow-md hover:shadow-secondary/50'
                                           href="#">
                                            <img className='w-full h-full object-cover' src="/images/avatars/5.png"
                                                 alt="member_name"/>
                                        </a>
                                        <a className='flex items-center justify-center rounded-full border-2 border-white w-8 h-8 overflow-hidden relative -right-6 transition-all duration-300 hover:-translate-y-2 hover:z-50 hover:shadow-md hover:shadow-secondary/50'
                                           href="#">
                                            <img className='w-full h-full object-cover' src="/images/avatars/10.png"
                                                 alt="member_name"/>
                                        </a>
                                        <a className='flex items-center justify-center rounded-full border-2 border-white w-8 h-8 overflow-hidden relative -right-8 transition-all duration-300 hover:-translate-y-2 hover:z-50 hover:shadow-md hover:shadow-secondary/50'
                                           href="#">
                                            <img className='w-full h-full object-cover' src="/images/avatars/12.png"
                                                 alt="member_name"/>
                                        </a>
                                    </div>
                                </TimeActivityBox>
                            </div>
                        </div>
                    </Box>
                </div>
            </div>
        </div>
    )
}