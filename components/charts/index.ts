import * as _echarts from "echarts/core";
import { BarChart, GaugeChart, PieChart, TreemapChart } from "echarts/charts";
import {
  GridComponent,
  LegendComponent,
  TooltipComponent,
} from "echarts/components";
import { SVGRenderer } from "echarts/renderers";

_echarts.use([
  TooltipComponent,
  LegendComponent,
  GridComponent,
  SVGRenderer,
  BarChart,
  GaugeChart,
  PieChart,
  TreemapChart,
]);

export const echarts = _echarts;
