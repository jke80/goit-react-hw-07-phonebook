import { RotatingLines } from 'react-loader-spinner';

export const Loading = () => {
  return (
    <RotatingLines
      strokeColor="#aaa"
      strokeWidth="4"
      animationDuration="0,75"
      width="20"
      visible={true}
    />
  );
};