import React from "react";

export default class Chart extends React.Component {
        constructor() {
            super();

            this.images = [];

            // Load the Visualization API and the corechart package.
            google.charts.load('current', {'packages':['corechart','gauge']});

            this.state = {
                chart_count: 6,
                images: this.images
            }

        }


        /**
         * display chart
         */
        displayChart() {

            // Set a callback to run when the Google Visualization API is loaded.
            google.charts.setOnLoadCallback(this.drawChart);

        }



      // Callback that creates and populates a data table,
      // instantiates multiple charts, passes in the data and
      // draws them.
      drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Player');
        data.addColumn('number', 'TD');
        data.addColumn('number', 'YPC');
        data.addRows([
          ['L Blount', 18, 3.9],
          ['J Edelman', 3, 11.3],
          ['M Bennet', 7, 12.7],
          ['C Hogan', 4, 17.9],
          ['J White', 5, 9.2],
          ['R Gronkowski', 3, 21.6],
          ['M Mitchell', 4, 12.5],
          ['D Amendola', 4, 10.6],
          ['M Floyd', 1, 10.5],
          ['M Lengel', 1, 11],
          ['J Brissett', 1, 5.2]
        ]);

        // Set chart options
        var options = {'width':470,
                       'height':350};

        // pie chart
        var chart = new google.visualization.PieChart(document.getElementById('pie_chart'));
        options.title = 'Pie Chart';
        chart.draw(data, options);

        // bar chart
        var chart = new google.visualization.BarChart(document.getElementById('bar_chart'));
        options.title = 'Bar Chart';
        chart.draw(data, options);

        // column chart
        var chart = new google.visualization.ColumnChart(document.getElementById('column_chart'));
        options.title = 'Column Chart';
        chart.draw(data, options);

        // line chart
        var chart = new google.visualization.LineChart(document.getElementById('line_chart'));
        options.title = 'Line Chart';
        chart.draw(data, options);

        // area chart
        var chart = new google.visualization.AreaChart(document.getElementById('area_chart'));
        options.title = 'Area Chart';
        chart.draw(data, options);

        // combo chart
        var chart = new google.visualization.ComboChart(document.getElementById('combo_chart'));
        options.title = 'Combo Chart';
        options.seriesType = 'bars';
        options.series = {1: {type:'line'}};
        chart.draw(data, options);

        // gauge
        var chart = new google.visualization.Gauge(document.getElementById('gauge'));
        options.title = 'Gauge';
        chart.draw(data, options);
      }
      
      render() {
          this.displayChart();

            return ( <div>
                    <div id="pie_chart" className="left" />
                    <div id="bar_chart" className="left" />
                    <div id="column_chart" className="left" />
                    <div id="line_chart" className="left" />
                    <div id="area_chart" className="left" />
                    <div id="combo_chart" className="left" />
                    <div id="gauge" className="left" />
                </div>
                )

            }
        }

