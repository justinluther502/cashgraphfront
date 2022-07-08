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
                '#9C27B0',
                '#E91E63',
                '#F44336',
                '#2196F3',
                '#3F51B5',
                '#673AB7',
                '#009688',
                '#00BCD4',
                '#03A9F4',
                '#CDDC39',
                '#8BC34A',
                '#4CAF50',
                '#FF9800',
                '#FFC107',
                '#FFEB3B',
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
