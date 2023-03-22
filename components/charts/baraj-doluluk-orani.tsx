import ReactEChartsCore from "echarts-for-react/lib/core";
import colors from "tailwindcss/colors";
import { echarts } from "./index";

export default function BarajDolulukOrani({
  labels = [],
  values = [],
}: {
  labels?: string[];
  values?: number[] | string[];
}) {
  return (
    <div className="text-left">
      <ReactEChartsCore
        echarts={echarts}
        lazyUpdate={true}
        style={{ height: 120, fontFamily: "inherit" }}
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
              interval: 0,
              fontFamily: "inherit",
              formatter: (value: string) => value.slice(0, 4),
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
              show: false,
              fontFamily: "inherit",
              showMinLabel: false,
              formatter: (value: number) => `${value.toFixed(0)}%`,
            },
          },
          series: [
            {
              type: "bar",
              barCategoryGap: "10%",
              showBackground: true,
              itemStyle: {
                color: colors.emerald[400],
              },
              label: {
                show: true,
                color: colors.emerald[700],
                position: "top",
                formatter: (params: any) => `${params.value.toFixed(0)}%`,
              },
              backgroundStyle: {
                color: colors.emerald[50],
              },
              data: values,
            },
          ],
        }}
      />
    </div>
  );
}
