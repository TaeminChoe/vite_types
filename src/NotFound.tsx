import { useNavigate } from "react-router-dom";

const NotFound = (): JSX.Element => {
  const nav = useNavigate();

  return (
    <div>
      <h1>NOT FOUND</h1>
      <button
        type="button"
        onClick={() => {
          nav(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default NotFound;
