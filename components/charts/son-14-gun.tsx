import ReactEChartsCore from "echarts-for-react/lib/core";
import colors from "tailwindcss/colors";
import { DateTime } from "luxon";
import { echarts } from "./index";

export default function Son14Gun({
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
        style={{ height: 160, fontFamily: "inherit" }}
        option={{
          tooltip: {
            formatter: '%{c}'
          },
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
              fontFamily: "inherit",
              rotate: 45,
              formatter: function (value: string) {
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
