import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
import { useSetAtom } from 'jotai';
import { TablePage } from './pages/TablePage';
import { ChartPage } from './pages/ChartPage';
import { FormPage } from './pages/FormPage';
import { Layout } from './Layout';
import { appStore, fetchStateStore } from './store';
import { fetchDataForStore } from './utils/store';

const theme = createTheme({});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/', 
        element: <TablePage /> },
      {
        path: '/chart',
        element: <ChartPage />
      },
      {
        path: '/form',
        element: <FormPage />
      }
    ]
  },
]);

export default function App() {
  const setFetchStateStore = useSetAtom(fetchStateStore)
  const setStore = useSetAtom(appStore)

  useEffect(() => {
    async function fetchData() {
      try {
        setFetchStateStore({ type: 'loading' })
        const hydratedStore = await fetchDataForStore()
        setStore(hydratedStore)
        setFetchStateStore({ type: 'success' })
      } catch (error) {
        setFetchStateStore({ type: 'error', error: (error as Error).message })
      }
    }

    fetchData()
  }, [setFetchStateStore, setStore])

  return (
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}
