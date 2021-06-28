import { Issue, License } from '../utils/types';

export default {
  state: {
    vulnerabilities: {
      metrics: {
        critical: 5,
        high: 0,
        medium: 1,
        low: 2,
        none: 0,
        criticalFixable: 2,
        highFixable: 0,
        mediumFixable: 0,
        lowFixable: 1,
        noneFixable: 0,
        criticalMature: 0,
        highMature: 0,
        highAction: 0,
      },
      actionVulns: [],
      updated: false,
      // vulnerability graph
      vulnsCharOptions: {
        series: [{
            data: [],
          }],
        chart: { type: 'pie' },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '{point.name}: <b>{point.percentage:.1f} %',
            },
          },
        },
        caption: {
          text: 'This chart display the current distribution of all vulnerabilities accross the board.',
        },
        title: {
          text: 'Vulnerabilities distribution',
        },
        tooltip: {
          pointFormat: '{point.name}: <b>{point.y}</b>',
        },
        accessibility: {
          point: {
            valueSuffix: '%',
          },
        },
      },
      // fixable vulnerability graph
      fixableVulnsCharOptions: {
        series: [{
            data: [],
          }],
        chart: { type: 'pie' },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '{point.name}: <b>{point.percentage:.1f} %',
            },
          },
        },
        caption: {
          text: 'This chart display the current distribution of fixable vulnerabilities accross the board.',
        },
        title: {
          text: 'Fixable vulnerabilities distribution',
        },
        tooltip: {
          pointFormat: '{point.name}: <b>{point.y}</b>',
        },
        accessibility: {
          point: {
            valueSuffix: '%',
          },
        },
      },
      // vulnerability language distribution graph
      langVulnsCharOptions: {
        series: [{
            data: [],
          }],
        chart: { type: 'pie' },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '{point.name}: <b>{point.percentage:.1f} %',
            },
          },
        },
        caption: {
          text: 'This chart display the current language distribution of vulnerabilities.',
        },
        title: {
          text: 'Vulnerabilities distribution by language',
        },
        tooltip: {
          pointFormat: '{point.name}: <b>{point.y}</b>',
        },
        accessibility: {
          point: {
            valueSuffix: '%',
          },
        },
      },
    },
    licUpdated: true,
    // license chart
    licenseChart: {
      series: [{
        data: [],
      }],
      chart: { type: 'pie' },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '{point.name}: <b>{point.percentage:.1f} %'
          }
        }
      },
      caption: {
        text: 'This chart display the current distribution of licenses accross all the dependencies.',
      },
      title: {
        text: 'Dependency distribution per license violation',
      },
      tooltip: {
        pointFormat: '{point.name}: <b>{point.y}</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
    },
    // package chart
    packageChart: {
      series: [{
        data: [],
      }],
      chart: { type: 'pie' },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '{point.name}: <b>{point.percentage:.1f} %'
          }
        }
      },
      caption: {
        text: 'This chart display the current distribution of your package managers.',
      },
      title: {
        text: 'Dependency distribution',
      },
      tooltip: {
        pointFormat: '{point.name}: <b>{point.y}</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
    },
    // dependencies metrics
    dependencies: {
      updated: false,
      outdated: 0,
      deprecated: 0,
      total: 0,
      vulnerable: 0,
      deprecatedAndVuln: 0,
      outdatedAndVuln: 0,
      updatedAndVuln: 0,
      duplicate: 0,
    },
    licenses: {
      high: 0,
      medium: 0,
      low: 0,
      total: 0,
    }
  },
  mutations: {
    updateVulnerabilities(state, payload) {
      state.vulnerabilities.metrics = payload.metrics;
      state.vulnerabilities.vulnsCharOptions.series[0].data = payload.data;
      state.vulnerabilities.fixableVulnsCharOptions.series[0].data = payload.dataFix;
      state.vulnerabilities.langVulnsCharOptions.series[0].data = payload.dataLang;
      state.vulnerabilities.updated = true;
    },
    updateLicense(state, licenses: License[]) {
      // Color to be used to render graph, gradient is used among similar severity
      const redColor = ["#FF0000", "#FF1A1A", "#FF3333", "#FF4D4D",
                        "#FF6666", "#FF8080", "#FF9999", "#FFB3B3",
                        "#FFCCCC", "#FFE6E6"];
      let red = 0;
      const orangeColor = ["#FFA500", "#FFAE1A", "#FFB733", "#FFC04D",
                           "#FFC966", "#FFD280", "#FFDB99", "#FFE4B3",
                           "#FFEDCC", "#FFF6E6"];
      let orange = 0;
      const greenColor = ["#008000", "#1A8D1A", "#339933", "#4DA64D",
                          "#66B366", "#80C080", "#99CC99", "#B3D9B3",
                          "#CCE6CC", "#E6F2E6"];
      let green = 0;       
      state.licUpdated = true;
      state.licenseChart.series[0].data = licenses
        .filter( l => l.severity != null && l.severity != "none")
        .map( l => { 
        return { 
          name: l.id, 
          y: l.dependencies.length, 
          color: l.severity == "high" ? redColor[red++ % redColor.length] : 
                  l.severity == "medium" ? orangeColor[orange++ % orangeColor.length] : 
                  l.severity == "low" ? greenColor[green++ % greenColor.length] : "grey"}
      });
      state.licenses.total = state.licenses.total + licenses.reduce( (sum, current) => sum + current.dependencies.length, 0 );
    },
    updateLicenseCount(state, payload) {
      state.licenses.high = payload.high;
      state.licenses.medium = payload.medium;
      state.licenses.low = payload.low;
      state.licenses.total = state.licenses.total - payload.low - payload.medium - payload.high;
    },
    updatePackage(state, packManager) {
      state.packageChart.series[0].data = Object.entries(packManager).sort(([key, value]: any,[key2, value2]: any) => value2 - value).map( ([key, value]) => { return { name: key, y: value}});
    },
    updateDependencies(state, dependencies) {
      state.dependencies = dependencies;
    },
    updateVulnAction(state, vulnerabilities: Issue[]) {
      state.vulnerabilities.actionVulns = vulnerabilities;
    }
  },
  getters: {
    chartOptions: state => state.vulnerabilities.vulnsCharOptions,
    licenseChart: state => state.licenseChart,
    packageChart: state => state.packageChart,
    vulnerabilities: state => state.vulnerabilities,
    updated: state => state.updated,
    licUpdated: state => state.licUpdated,
    dependencies: state => state.dependencies,
    licenses: state => state.licenses,
  },
  modules: {
  }
};
