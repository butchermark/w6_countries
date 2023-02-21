import { Link } from "react-router-dom";
const BackButton = () => {
  return (
    <div>
      <Link to="/countries">
        <button>Back</button>
      </Link>
    </div>
  );
};
export default BackButton;
