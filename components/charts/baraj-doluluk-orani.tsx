import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";
import {
  GridComponent,
  LegendComponent,
  TooltipComponent,
} from "echarts/components";
import { SVGRenderer } from "echarts/renderers";
import ReactEChartsCore from "echarts-for-react/lib/core";
import colors from "tailwindcss/colors";
import { DateTime } from "luxon";

echarts.use([
  TooltipComponent,
  LegendComponent,
  GridComponent,
  SVGRenderer,
  BarChart,
]);

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
            top: "4%",
            left: "4%",
            right: "4%",
            bottom: "4%",
            containLabel: true,
            borderColor: "#fff",
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
