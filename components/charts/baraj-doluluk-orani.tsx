import ReactEChartsCore from "echarts-for-react/lib/core";
import colors from "tailwindcss/colors";
import { echarts } from "./index";

export default function BarChartBarajDolulukOrani({
  labels = [],
  values = [],
}: {
  labels?: string[];
  values?: number[] | string[];
}) {
  return (
    <div className="">
      <ReactEChartsCore
        echarts={echarts}
        lazyUpdate={true}
        style={{ height: 200, fontFamily: "inherit" }}
        option={{
          grid: {
            left: "4%",
            right: "0%",
            top: "4%",
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
              rotate: 45,
              fontFamily: "inherit",
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
            axisLabel: {
              fontFamily: "inherit",
              showMinLabel: false,
            },
          },
          series: [
            {
              type: "bar",
              showBackground: true,
              itemStyle: {
                color: colors.emerald[500],
              },
              backgroundStyle: {
                color: colors.gray[50],
              },
              data: values,
            },
          ],
        }}
      />
    </div>
  );
}
