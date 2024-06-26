import { useMemo } from 'react'
import { useAtomValue } from 'jotai'
import { Table } from '../components/Table'
import { AppError } from '../components/Error'
import { makeDataToDisplay } from '../utils/data'
import { appStore, fetchStateStore } from '../store'
import { Box, LoadingOverlay } from '@mantine/core'

export function TablePage() {
  const fetchStore = useAtomValue(fetchStateStore)
  const store = useAtomValue(appStore)

  const data = useMemo(() => {
    return makeDataToDisplay(store)
  }, [store])

  if (fetchStore.type === 'error') {
    return (
      <>
        <h2>Table Page</h2>

        <AppError error={fetchStore.error} />
      </>
    )
  }

  return (
    <>
      <h2>Table Page</h2>

      <Box pos='relative'>
        <LoadingOverlay
          visible={fetchStore.type === 'loading'}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
        />

        <Table data={data} />
      </Box>
    </>
  )
}
