import { Container } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';

export function Layout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet /> 
      </Container>
    </>
  );
}