import ReactEChartsCore from "echarts-for-react/lib/core";
import colors from "tailwindcss/colors";
import { DateTime } from "luxon";
import { echarts } from "./index";
import { ECharts } from "echarts";

export default function Son14Gun({
  labels = [],
  values = [],
}: {
  labels?: string[];
  values?: number[] | string[];
}) {
  const onChartReadyCallback = (ch: ECharts) => {
    setTimeout(() => {
      // refrehs
      ch.dispatchAction({
        type: "showTip",
        dataIndex: 0,
      });
    }, 1000);
  };

  const eventsMap = {};

  return (
    <div className="text-left">
      <ReactEChartsCore
        echarts={echarts}
        lazyUpdate={true}
        style={{ height: 120, fontFamily: "inherit" }}
        onEvents={eventsMap}
        onChartReady={onChartReadyCallback}
        option={{
          tooltip: {},
          grid: {
            left: "0%",
            right: "0%",
            top: "0%",
            bottom: "0%",
            containLabel: true,
          },
          xAxis: {
            type: "category",
            data: labels,
            axisLine: {
              show: false,
            },
            axisLabel: {
              margin: 6,
              interval: 0,
              fontFamily: "inherit",
              formatter: function (value: string) {
                return DateTime.fromFormat(value, "yyyy-MM-dd").toFormat(
                  "dd"
                );
              },
            },
            axisTick: {
              show: false,
            },
          },
          yAxis: {
            type: "value",
            max: 100,
            splitLine: {
              lineStyle: {
                width: 0.5,
                color: colors.gray[50],
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
              fontFamily: "inherit",
              showMinLabel: false,
              formatter: (value: number) => `${value.toFixed(0)}%`,
            },
          },
          series: [
            {
              type: "bar",
              barCategoryGap: "15%",
              showBackground: true,
              itemStyle: {
                color: colors.sky[400],
              },
              label: {
                show: true,
                color: colors.sky[700],
                position: "top",
                formatter: (params: any) => `${params.value.toFixed(0)}%`,
              },
              backgroundStyle: {
                color: colors.sky[50],
              },
              data: values,
            },
          ],
        }}
      />
    </div>
  );
}
