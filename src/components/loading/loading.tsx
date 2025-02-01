import { ThreeDots } from "react-loader-spinner";

type props = {
  width?: string;
  height?: string;
};

export const Loading: React.FC<props> = ({ width = "90", height = "55" }) => {
  return (
    <ThreeDots
      height={height}
      width={width}
      radius={9}
      color='white'
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
      }}
      visible={true}
    />
  );
};
