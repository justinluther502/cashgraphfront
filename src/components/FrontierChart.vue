<template>
  <scatter
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
  import {Scatter} from 'vue-chartjs/legacy'

  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    PointElement,
    LinearScale,
  } from 'chart.js'

  import ChartDataLabels from 'chartjs-plugin-datalabels'

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    PointElement,
    LinearScale,
    ChartDataLabels,
  )

  export default {
    name: 'ScatterChart',
    components: {
      Scatter,
    },
    props: {
      chartId: {
        type: String,
        default: 'scatter-chart',
      },
      datasetIdKey: {
        type: String,
        default: 'label',
      },
      width: {
        type: Number,
        default: 400,
      },
      height: {
        type: Number,
        default: 400,
      },
      cssClasses: {
        default: '',
        type: String,
      },
      styles: {
        type: Object,
        default: () => {
        },
      },
      plugins: {
        type: Array,
        default: () => [ChartDataLabels],
      },
      asset_points: Array,
      port_points: Array,
      asset_labels: Array,
    },
    data() {
      return {
        chartData: {
          datasets: [
            {
              label: 'Original Assets',
              labels: this.asset_labels,
              fill: false,
              borderColor: '#6BCFDC',
              backgroundColor: '#6BCFDC',
              data: this.asset_points,
            },
            {
              label: 'Optimized Portfolios',
              labels: null,
              fill: false,
              borderColor: '#4C3B55',
              backgroundColor: '#4C3B55',
              data: this.port_points,
              datalabels: {
                display: false,
              },
            },
          ],
        },
        chartOptions: {
          responsive: true,
          plugins: {
            // I don't understand why this works, just copied.
            datalabels: {
              formatter: function (value, context) {
                return context.dataset.labels[context.dataIndex]
              },
              align: 'bottom',
            },
          },
          maintainAspectRatio: false,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Risks',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Returns',
              },
            },
          },
        },
      }
    },
  }
</script>