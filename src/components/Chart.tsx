import { BarChart } from '@mantine/charts'
import { Datum } from "../types";

export interface Props {
  data: Datum[];
}

export function Chart(props: Props) {
  return (
    <BarChart
      h={500}
      data={props.data}
      dataKey="user.name"
      withTooltip={false}
      withLegend
      series={[
        { name: "postsCount", color: 'violet.6' },
        { name: "commentsCount", color: 'yellow.6' },
        { name: "albumsCount", color: 'teal.6' },
        // { name: "photosCount", color: 'orange.6' },
        { name: "todosCount", color: 'red.6' },
      ]}
    />
  )
}
