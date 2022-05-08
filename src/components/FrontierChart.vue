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

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    PointElement,
    LinearScale,
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
        default: () => [],
      },
      asset_points: Array,
      port_points: Array,
    },
    data() {
      return {
        chartData: {
          datasets: [
            {
              label: 'Original Assets',
              fill: false,
              borderColor: '#f87979',
              backgroundColor: '#f87979',
              data: this.asset_points,
            },
            {
              label: 'Optimized Portfolios',
              fill: false,
              borderColor: '#000000',
              backgroundColor: '#000000',
              data: this.port_points,
            },
          ],
        },
        chartOptions: {
          responsive: true,
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