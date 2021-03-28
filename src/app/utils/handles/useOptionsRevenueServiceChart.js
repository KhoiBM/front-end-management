import React from 'react'
import { useFormat } from './useFormat'
import exportIcon from 'src/app/assets/image/exportIcon.png'

export const useOptionsRevenueServiceChart = (title) => {

    const xaxis = {
        type: 'category',
        // categories: ["Ảnh", "Đồ lưu niệm", "Quần áo", "Đồ sứ", "Tạo của riêng bạn"],
        // title: {
        //     text: 'Dịch vụ',
        // },
        labels: {
            formatter: function (val) {
                return `${useFormat().formatMoney(val)} đ`;
            },
            // show: false
            show: true

        }
    }

    const yaxis = {
        // title: {
        //     text: 'Doanh thu',
        // },

        labels: {
            formatter: function (val) {
                // return val + "test";
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
        },
        y: {
            formatter: function (val) {
                return `${useFormat().formatMoney(val)} đ`;

                // return `${ val.toPrecision(val.toString().length) } đ`;
                // return `${ val.toFixed(3) } đ`;


            },
            title: {
                formatter: function () {
                    return 'Doanh thu:'
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
            horizontal: true,


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
        width: 0,
        colors: ['#fff']
    }

    const titleChart = (title) => ({
        text: `DOANH THU TRÊN MỖI DỊCH VỤ ${title}`,
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
        // enabled: false,
        // dropShadow: {
        //     enabled: true,
        //     left: 2,
        //     top: 2,
        //     opacity: 0.5
        // },
        // enabledOnSeries: [1], // ẩn label in thanh bar với object đầu tiên trong series
        style: {
            fontSize: '14px',
            fontWeight: 'bold',
            // colors: ['#fff']
            colors: ['#000']
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
            return `${useFormat().formatMoney(val)} đ`;
        },
        // offsetX: 300

    }

    const toolbar = (title) => ({
        show: true,
        offsetX: 0,
        offsetY: 16,
        tools: {
            download: true,
            // download: `<img src="${exportIcon}" width="20" style={{color:"red"}}>`,

            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true,
            customIcons: []
        },
        export: {
            csv: {
                filename: "DOANH THU TRÊN MỖI DỊCH VỤ " + title,
                columnDelimiter: ',',
                headerCategory: 'Dịch vụ',
                headerValue: 'value',
                dateFormatter(timestamp) {
                    return new Date(timestamp).toDateString()
                }
            },
            svg: {
                filename: "DOANH THU TRÊN MỖI DỊCH VỤ " + title,
            },
            png: {
                filename: "DOANH THU TRÊN MỖI DỊCH VỤ " + title,
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
                // "selection": "Selection",
                // "selectionZoom": "Selection Zoom",
                // "zoomIn": "Zoom In",
                // "zoomOut": "Zoom Out",
                // "pan": "Panning",
                // "reset": "Reset Zoom"
            }
        }
    }]
    const grid = {
        // row: {
        //     colors: ['#e5e5e5', 'transparent'],
        //     opacity: 0.5
        // },
        // column: {
        //     colors: ['#f8f8f8', 'transparent'],
        // },
        xaxis: {
            lines: {
                show: false,
                // show: true
            }
        },
        yaxis: {
            lines: {
                show: false,
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


    const chart = {
        id: "DOANH THU TRÊN MỖI DỊCH VỤ",
        // type: "bar",
        // width: "100%",
        // animations: {
        //     initialAnimation: {
        //         enabled: false
        //     }
        // }
        toolbar: toolbar(title),
        locales: localesChart,
        defaultLocale: "vi"
    }

    // return {
    //     optionsChart: {
    //         chart: chart,
    //         xaxis: xaxis,
    //         yaxis: yaxis,
    //         tooltip: tooltip,
    //         plotOptions: plotOptions,
    //         colors: colors,
    //         stroke: stroke,
    //         title: titleChart(""),
    //         subtitle: subTitleChart,
    //         dataLabels: dataLabels,
    //         grid: grid,
    //         legend: legend
    //     },
    //     titleChart

    // }
    return {
        chart: chart,
        xaxis: xaxis,
        yaxis: yaxis,
        tooltip: tooltip,
        plotOptions: plotOptions,
        colors: colors,
        stroke: stroke,
        title: titleChart(title),
        subtitle: subTitleChart,
        dataLabels: dataLabels,
        grid: grid,
        legend: legend,
        theme: {
            mode: "light",
            // palette: 'palette1' // upto palette10
        }
    }
}
