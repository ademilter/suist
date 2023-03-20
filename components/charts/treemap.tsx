import * as echarts from "echarts/core";
import { TreemapChart } from "echarts/charts";
import { SVGRenderer } from "echarts/renderers";
import ReactEChartsCore from "echarts-for-react/lib/core";
import { ECharts } from "echarts";
import colors from "tailwindcss/colors";
import { useState } from "react";

echarts.use([SVGRenderer, TreemapChart]);

export default function Container({ className }: { className?: string }) {
  const [chart, setChart] = useState<ECharts | null>(null);
  const [isDirty, setIsDirty] = useState<boolean>(false);

  const onChartReadyCallback = (ch: ECharts) => {
    if (chart) return;
    setChart(ch);
  };

  const eventsMap = {
    selectchanged: (params: any) => {
      const { dataIndexInside } = params.fromActionPayload;
      setIsDirty(dataIndexInside !== 0);
    },
  };

  return (
    <div className="">
      {isDirty && (
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
      )}

      <ReactEChartsCore
        style={{ height: 180, fontFamily: "inherit" }}
        onEvents={eventsMap}
        echarts={echarts}
        onChartReady={onChartReadyCallback}
        lazyUpdate={true}
        option={{
          series: {
            type: "treemap",
            name: "Barajlar",
            width: "100%",
            height: "100%",
            top: "top",
            left: "center",
            squareRatio: 1,
            roam: false,
            leafDepth: 1,
            visibleMin: 10,
            breadcrumb: {
              show: false,
            },
            labelLayout: {
              draggable: false,
            },
            levels: [
              {
                color: [
                  colors.emerald["700"],
                  colors.emerald["600"],
                  colors.emerald["500"],
                  colors.emerald["400"],
                  colors.emerald["300"],
                  colors.emerald["300"],
                  colors.emerald["300"],
                  colors.emerald["300"],
                  colors.emerald["300"],
                  colors.emerald["300"],
                ],
                colorMappingBy: "index",
                itemStyle: {
                  borderColor: "transparent",
                  gapWidth: 6,
                },
              },
            ],
            data: [
              {
                name: "Ömerli",
                value: 40.3,
                label: {
                  fontFamily: "inherit",
                },
                itemStyle: {
                  // borderRadius: 8,
                  borderColor: "transparent",
                },
              },
              {
                name: "Terkos",
                value: 16,
                label: {
                  fontFamily: "inherit",
                },
                itemStyle: {
                  // borderRadius: 8,
                  borderColor: "transparent",
                },
              },
              {
                name: "Darlık",
                value: 15.2,
                label: {
                  fontFamily: "inherit",
                },
                itemStyle: {
                  // borderRadius: 8,
                  borderColor: "transparent",
                },
              },
              {
                name: "Büyükçekmece",
                value: 14.2,
                label: {
                  fontFamily: "inherit",
                },
                itemStyle: {
                  // borderRadius: 8,
                  borderColor: "transparent",
                },
              },
              {
                name: "Sazlıdere",
                value: 9.2,
                label: {
                  fontFamily: "inherit",
                },
                itemStyle: {
                  // borderRadius: 8,
                  borderColor: "transparent",
                },
              },
              {
                name: "Pabuçdere",
                value: 1.7,
                label: {
                  fontFamily: "inherit",
                },
                itemStyle: {
                  // borderRadius: 8,
                  borderColor: "transparent",
                },
              },
              {
                name: "Alibey",
                value: 1.2,
                label: {
                  fontFamily: "inherit",
                },
                itemStyle: {
                  // borderRadius: 8,
                  borderColor: "transparent",
                },
              },
              {
                name: "Elmalı",
                value: 1,
                label: {
                  fontFamily: "inherit",
                },
                itemStyle: {
                  // borderRadius: 8,
                  borderColor: "transparent",
                },
              },
              {
                name: "Istrancalar",
                value: 0.6,
                label: {
                  fontFamily: "inherit",
                },
                itemStyle: {
                  // borderRadius: 8,
                  borderColor: "transparent",
                },
              },
              {
                name: "Kazandere",
                value: 0.5,
                label: {
                  fontFamily: "inherit",
                },
                itemStyle: {
                  // borderRadius: 8,
                  borderColor: "transparent",
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}
