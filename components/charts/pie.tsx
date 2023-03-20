import ReactEChartsCore from "echarts-for-react/lib/core";
import { echarts } from "./index";

export default function Container({ className }: { className?: string }) {
  return (
    <div className="">
      <ReactEChartsCore
        echarts={echarts}
        lazyUpdate={true}
        style={{ height: 300, fontFamily: "inherit" }}
        option={{
          tooltip: {
            //trigger: "item",
          },
          legend: {
            bottom: "0",
            left: "center",
          },
          series: [
            {
              name: "Access From",
              type: "pie",
              radius: ["70%", "100%"],
              minAngle: 10,
              itemStyle: {
                borderRadius: 10,
                borderColor: "#fff",
                borderWidth: 2,
              },
              labelLine: {
                // show: false,
              },
              label: {
                // show: false,
                // position: "center",
              },
              emphasis: {
                // label: {
                //   show: true,
                //   fontSize: 10,
                //   fontWeight: "bold",
                // },
              },
              data: [
                {
                  value: 1048,
                  name: "Search Engine",
                  itemStyle: { color: "#ccc" },
                },
                { value: 735, name: "Direct" },
                { value: 580, name: "Email" },
                { value: 484, name: "Union Ads" },
                { value: 4, name: "Video Ads" },
              ],
            },
          ],
        }}
      />
    </div>
  );
}
