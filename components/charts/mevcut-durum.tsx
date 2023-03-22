import ReactEChartsCore from "echarts-for-react/lib/core";
import colors from "tailwindcss/colors";
import { echarts } from "./index";

export default function MevcutDurum({
  value = 0,
}: {
  value?: number;
}) {
  return (
    <div className="text-left h-[120px]">
      <ReactEChartsCore
        echarts={echarts}
        lazyUpdate={true}
        style={{ height: 240, fontFamily: "inherit" }}
        option={{
          series: [
            {
              type: "gauge",
              center: ["50%", "50%"],
              startAngle: 180,
              endAngle: 0,
              radius: "100%",
              min: 0,
              max: 100,
              itemStyle: {
                color: colors.sky["400"],
              },
              axisLine: {
                // roundCap: true,
                lineStyle: {
                  width: 34,
                  color: [[1, colors.sky["50"]]],
                },
              },
              progress: {
                // roundCap: true,
                show: true,
                width: 34,
              },
              detail: {
                valueAnimation: true,
                offsetCenter: [0, -14],
                fontSize: 26,
                fontWeight: "bolder",
                formatter: "% {value}",
                color: "inherit",
              },
              data: [
                {
                  value: value,
                },
              ],
              // other config
              pointer: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              splitLine: {
                show: false,
              },
              axisLabel: {
                show: false,
              },
              anchor: {
                show: false,
              },
              title: {
                show: false,
              },
            },
          ],
        }}
      />
    </div>
  );
}
