<template>
  <Pie
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
  import {Pie} from 'vue-chartjs/legacy'

  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
  } from 'chart.js'

  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

  export default {
    name: 'PortPieChart',
    components: {
      Pie,
    },
    props: {
      chartId: {
        type: String,
        default: 'pie-chart',
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
      asset_labels: Array,
      asset_data: Array,
    },
    data() {
      return {
        chartData: {
          labels: this.asset_labels,
          datasets: [
            {
              backgroundColor: [
                '#dd0090',
                '#fc0af1',
                '#093bba',
                '#1172ca',
                '#87f0aa',
                '#72ed7f',
                '#32e339',
                '#e0fc52',
                '#f4cc65',
                '#aa5e21',
              ],
              data: this.asset_data,
              datalabels: {
                labels: {
                  title: null,
                },
              },
            },
          ],
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
        },
      }
    },
  }
</script>
