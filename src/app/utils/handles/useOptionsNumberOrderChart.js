
import React from 'react'
import { useFormat } from './useFormat'
import exportIcon from 'src/app/assets/image/exportIcon.png'

export const useOptionsNumberOrderChart = (title) => {

    const xaxis = {
        type: 'category',

        // categories: [ "", ""],

        // title: {
        //     text: 'Thời gian',
        // },

        labels: {
            formatter: function (val) {
                return `${val}`;
            },
            // show: false
            show: true

        }
    }

    const yaxis = {
        // title: {
        //     text: 'Số lượng đơn hàng',
        // },

        labels: {
            formatter: function (val) {
                return val;
            },
            // show: false
            show: true
        }


    }

    const tooltip = {
        // theme: 'dark',
        x: {
            formatter: function (val) {
                return val;
            },
            // show: false
            title: {
                formatter: function () {
                    return ''
                }
            },
        },
        y: {
            formatter: function (val) {
                // return `${ val.toPrecision(val.toString().length) } đ`;
                // return `${ val.toFixed(3) } đ`;
                return `${val} ads`;


            },
            title: {
                formatter: function () {
                    return 'Số lượng đơn hàng: '
                }
            },
        }
    }


    const plotOptions = {
        bar: {
            dataLabels: {
                position: 'center',
                // position: 'top',
                // horizontal: true,
            },
            barHeight: '100%',
            distributed: true,
            horizontal: false,


        }
    }

    //mau thanh bar
    const colors = [
        "#5AA0F5",
        "#7EE3AB",
        "#F4BE60",
        "#EE6E7B",
        "#8878D1",
        "#33b2df",
        '#546E7A',
        '#d4526e',
        '#13d8aa',
        '#A5978B',
        '#2b908f',
        '#f9a3a4',
        '#90ee7e',
        '#f48024'
    ]

    //net border thanh bar
    const stroke = {
        width: 3,
        colors: ['#b6e2f3'],
        // curve: 'smooth',
        curve: 'straight',
    }

    const titleChart = (title) => ({
        text: `SỐ LƯỢNG ĐƠN HÀNG ${title}`,
        align: 'center',
        margin: 40,
        offsetX: 0,
        offsetY: 0,
        floating: true,
        style: {
            fontSize: '14px',
            fontWeight: 'bold',
            fontFamily: undefined,
            color: '#263238'
        },
    })

    const subTitleChart = {
        text: '',
        align: 'center',
    }



    const dataLabels = {
        enabled: true,
        // dropShadow: {
        //     enabled: true,
        //     left: 2,
        //     top: 2,
        //     opacity: 0.5
        // },
        // enabledOnSeries: [1], // ẩn label in thanh bar với object đầu tiên trong series
        style: {
            fontSize: '24px',
            fontWeight: 'bold',
            colors: ['#fff']
        },
        // background: {
        //     enabled: true,
        //     foreColor: '#000',
        //     borderRadius: 2,
        //     padding: 4,
        //     opacity: 0.9,
        //     borderWidth: 0,
        //     borderColor: '#fff'
        // },
        // textAnchor: 'start',
        formatter: function (val, opt) {
            // return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
            return `${val}`;
        },
        // offsetX: 0

    }

    const toolbar = (title) => ({
        show: true,
        offsetX: 0,
        offsetY: 16,
        tools: {
            download: true,
            // download: `<img src="${exportIcon}" width="20" style={{color:"red"}}>`,
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false,
            customIcons: []
        },
        export: {
            csv: {
                filename: `SỐ LƯỢNG ĐƠN HÀNG ${title}`,
                columnDelimiter: ',',
                headerCategory: 'Thời gian',
                headerValue: 'value',
                dateFormatter(timestamp) {
                    return new Date(timestamp).toDateString()
                }
            },
            svg: {
                filename: `SỐ LƯỢNG ĐƠN HÀNG ${title}`,
            },
            png: {
                filename: `SỐ LƯỢNG ĐƠN HÀNG ${title}`,
            }
        },
        autoSelected: 'zoom'
    })





    const localesChart = [{
        "name": "vi",
        "options": {
            "months": ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
            // "shortMonths": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            "days": ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"],
            // "shortDays": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            "toolbar": {
                "exportToCSV": "Xuất ra CSV",
                "exportToSVG": "Xuất ra SVG",
                "exportToPNG": "Xuất ra PNG",
                "menu": "Tuỳ chọn xuất ra tệp",
                "selection": "Chọn",
                "selectionZoom": "Chọn",
                "zoomIn": "Phóng to",
                "zoomOut": "Thu nhỏ",
                "pan": "Di chuyển",
                "reset": "Trở lại ban đầu"
            }
        }
    }]
    const grid = {
        row: {
            // colors: ['#e5e5e5', 'transparent'],
            // opacity: 0.5
        },
        // column: {
        //     colors: ['#f8f8f8', 'transparent'],
        // },
        xaxis: {
            lines: {
                // show: false,
                // show: true
            }
        },
        yaxis: {
            lines: {
                // show: false,
                // show: true
            }
        }
    }

    const legend = {
        // show: false,
        show: true,
        position: 'top',
        offsetY: 24,
        itemMargin: {
            horizontal: 5,
            vertical: 10
        },
        horizontalAlign: 'center',
        onItemClick: {
            toggleDataSeries: true
        },
        onItemHover: {
            highlightDataSeries: true
        },
    }

    const markers = {
        size: 5,
        colors: ['#fff'],
        strokeColors: "#478de3",
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: "circle",
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        onClick: undefined,
        onDblClick: undefined,
        showNullDataPoints: true,
        hover: {
            size: undefined,
            sizeOffset: 3
        }
    }


    const chart = {
        id: `SỐ LƯỢNG ĐƠN HÀNG ${title}`,
        // animations: {
        //     initialAnimation: {
        //         enabled: false
        //     }
        // }
        toolbar: toolbar(title),
        locales: localesChart,
        defaultLocale: "vi"
    }


    return {
        chart: chart,
        xaxis: xaxis,
        yaxis: yaxis,
        // tooltip: tooltip,
        plotOptions: plotOptions,
        // colors: colors,
        stroke: stroke,
        title: titleChart(title),
        subtitle: subTitleChart,
        // dataLabels: dataLabels,
        grid: grid,
        // legend: legend
        markers: markers
    }
}
