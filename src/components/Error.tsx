import { Alert } from '@mantine/core';

export interface Props {
  error: string;
}

export function AppError(props: Props) {
  return (
    <Alert variant="light" color="red" title="Alert title">
      {props.error}
    </Alert>
  );
}