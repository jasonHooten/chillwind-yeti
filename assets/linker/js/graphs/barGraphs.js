(function( chillwind, $, undefined ) {

    chillwind.barChart = function(element, data, options){
        var highchartsOptions = $.extend({}, {
            chart: {
                type: 'line',
                plotBackgroundColor: {
                    linearGradient: [0, 0, 500, 500],
                    stops: [
                        [0, 'rgba(255, 255, 255, 0.1)'],
                        [1, '#3399F3']
                    ]
                },
                backgroundColor:'rgba(255, 255, 255, 0.1)'
            },
            title: {
                text: 'title.text',
                margin: 5,
                style: {
                    color: '#2d2d2d',
                    fontSize: '14px',
                }
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            xAxis: {
                categories: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            },
            yAxis: {
                title: {
                    text: null
                },
                min: 0,
                allowDecimals: false,
                gridLineWidth: 0
            },
            plotOptions: {
                series: {
                    color: '#3399F3'
                },
                line:{
                    lineWidth: 4,
                    states: {
                        hover: {
                            lineWidth: 5
                        }
                    },
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.y +'</b> edit me <b>'+ this.x +'</b>.';
                }
            },
            series: [{
                name: 'series.name',
                data: data
            }],
        }, options);


        $(element).highcharts(highchartsOptions);
    };
}( window.Chillwind_graphs = window.Chillwind_graphs || {}, jQuery ));