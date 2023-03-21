import ReactEChartsCore from "echarts-for-react/lib/core";
// import { ECharts } from "echarts";
import colors from "tailwindcss/colors";
// import { useState } from "react";
import { echarts } from "./index";

export default function BarajSuDagilimi({
  data = [],
}: {
  data: [string, number][];
}) {
  // const [chart, setChart] = useState<ECharts | null>(null);
  // const [isDirty, setIsDirty] = useState<boolean>(false);

  // const onChartReadyCallback = (ch: ECharts) => {
  //   if (chart) return;
  //   setChart(ch);
  // };
  //
  // const eventsMap = {
  //   selectchanged: (params: any) => {
  //     const { dataIndexInside } = params.fromActionPayload;
  //     setIsDirty(dataIndexInside !== 0);
  //   },
  // };

  return (
    <div className="text-left">
      {/*{isDirty && (
        <button
          type="button"
          onClick={() => {
            chart?.dispatchAction({
              type: "downplay",
              dataIndex: 1,
            });
            setIsDirty(false);
          }}
        >
          Geri Dön
        </button>
      )}*/}

      <ReactEChartsCore
        style={{ height: 200, fontFamily: "inherit" }}
        echarts={echarts}
        // onEvents={eventsMap}
        // onChartReady={onChartReadyCallback}
        lazyUpdate={true}
        option={{
          tooltip: {
            formatter: "{b}<br />%{c}",
          },
          series: {
            type: "treemap",
            name: "Barajlar",
            width: "100%",
            height: "84%",
            top: "top",
            left: "center",
            squareRatio: 1,
            leafDepth: 1,
            roam: false,
            breadcrumb: {
              itemStyle: {
                color:  colors.emerald["50"],
                textStyle: {
                  color:  colors.emerald["900"]
                }
              }
            },
            levels: [
              {
                colorMappingBy: "index",
                color: [
                  colors.emerald["400"],
                  colors.emerald["300"],
                  colors.emerald["300"],
                  colors.emerald["200"],
                  colors.emerald["200"],
                  colors.emerald["200"],
                  colors.emerald["100"],
                  colors.emerald["100"],
                  colors.emerald["100"],
                  colors.emerald["50"],
                ],
                itemStyle: {
                  borderColor: "transparent",
                  gapWidth: 6,
                },
              },
            ],
            data: data.map(([name, value]) => {
              return {
                name,
                value,
                label: {
                  fontFamily: "inherit",
                  color: colors.emerald["900"],
                },
                itemStyle: {
                  borderRadius: 4,
                  borderColor: "transparent",
                },
              };
            }),
          },
        }}
      />
    </div>
  );
}
