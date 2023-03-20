import * as echarts from "echarts/core";
import { GaugeChart } from "echarts/charts";
import {
  GridComponent,
  LegendComponent,
  TooltipComponent,
} from "echarts/components";
import { SVGRenderer } from "echarts/renderers";
import ReactEChartsCore from "echarts-for-react/lib/core";
import colors from "tailwindcss/colors";

echarts.use([
  TooltipComponent,
  LegendComponent,
  GridComponent,
  SVGRenderer,
  GaugeChart,
]);

export default function Container({ value=0 }: { value?: number }) {
  return (
    <div className="h-[170px]">
      <ReactEChartsCore
        echarts={echarts}
        lazyUpdate={true}
        style={{ height: 300, fontFamily: "inherit" }}
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
                color: colors.sky["500"],
              },
              axisLine: {
                // roundCap: true,
                lineStyle: {
                  width: 40,
                  color: [[1, colors.sky["200"]]],
                },
              },
              progress: {
                // roundCap: true,
                show: true,
                width: 40,
              },
              detail: {
                valueAnimation: true,
                offsetCenter: [0, -20],
                fontSize: 40,
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
