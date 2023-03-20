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

export default function BarChartSon14Gun({
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
        style={{ height: 160, fontFamily: "inherit" }}
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
              // margin: 0,
              showMinLabel: false,
              showMaxLabel: true,
              fontFamily: "inherit",
              rotate: 45,
              formatter: function (value: string) {
                console.log(value);
                return DateTime.fromFormat(value, "yyyy-MM-dd").toFormat(
                  "dd MMM"
                );
              },
            },
            axisTick: {
              show: false,
              // alignWithLabel: true,
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
              // margin: 14,
              // showMaxLabel: false,
              showMinLabel: false,
            },
          },
          series: [
            {
              type: "bar",
              showBackground: true,
              itemStyle: {
                color: colors.sky[500],
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
