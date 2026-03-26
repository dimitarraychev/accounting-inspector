import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { useReportContext } from "../../context/ReportContext";
import { shortFormatDate } from "../../utils/date";
import { useMemo } from "react";
import { getColor } from "../../utils/colors";
import CustomTooltip from "./CustomTooltip";
import { useHoverClickTooltip } from "../../hooks/useHoverClickTooltip";
import { useConfig } from "../../context/ConfigContext";

const TotalBetsLineChart = () => {
  const { data, selectedEndpoints } = useReportContext();
  const { metric } = useConfig();
  const { tooltipTrigger, handleChartClick } = useHoverClickTooltip();

  const endpointColors = useMemo(() => {
    const map: Record<string, string> = {};
    selectedEndpoints.forEach((ep) => {
      map[ep] = getColor(ep);
    });
    return map;
  }, [selectedEndpoints]);

  const chartData = useMemo(() => {
    return data.periods.map((bucket) => {
      const endpointValues: Record<string, number> = {};

      selectedEndpoints.forEach((ep) => {
        const report = bucket.endpoints.find((e) => e.endpoint === ep);

        endpointValues[ep] = report?.[metric] ?? 0;
      });

      return {
        period: new Date(bucket.period),
        total: bucket[metric] ?? 0,
        ...endpointValues,
      };
    });
  }, [data.periods, selectedEndpoints, metric]);

  return (
    <LineChart
      width="100%"
      height="97%"
      data={chartData}
      margin={{ bottom: 80, right: 30, top: 30 }}
      responsive={true}
      onClick={handleChartClick}
    >
      <CartesianGrid
        stroke="rgba(255,255,255,0.2)"
        vertical={false}
        strokeDasharray="5 5"
      />
      <XAxis
        dataKey="period"
        interval="preserveStartEnd"
        angle={-90}
        textAnchor="end"
        dy={16}
        dx={-5}
        tickFormatter={(time) => shortFormatDate(time)}
        tick={{ fill: "var(--text-secondary)", fontSize: 12 }}
      />
      <YAxis
        tickCount={12}
        tick={{ fill: "var(--text-secondary)", fontSize: 12 }}
      />
      <Tooltip content={<CustomTooltip />} trigger={tooltipTrigger} />

      <Line
        type="monotone"
        dataKey="total"
        stroke="var(--orange)"
        strokeWidth={2.5}
        dot={false}
        filter="url(#glow)"
      />

      {selectedEndpoints.map((ep) => (
        <Line
          key={ep}
          type="monotone"
          dataKey={ep}
          stroke={endpointColors[ep]}
          strokeWidth={2.5}
          dot={false}
          filter="url(#glow)"
        />
      ))}

      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </LineChart>
  );
};

export default TotalBetsLineChart;
