import { useMemo } from 'react'
import { useAtomValue } from 'jotai'
import { appStore } from '../store'
import { Chart } from '../components/Chart'
import { makeDataToDisplay } from '../utils/data'

export function ChartPage() {
  const store = useAtomValue(appStore)
  const data = useMemo(() => {
    return makeDataToDisplay(store)
  }, [store])

  return (
    <>
      <h2>Chart Page</h2>

      <Chart data={data} />
    </>
  )
}
