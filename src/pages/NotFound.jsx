import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="app-404">
        <h1>404</h1>
        <h3>Page Not Found</h3>
        <span className="material-icons icon">sentiment_dissatisfied</span>
        <br />
        <Link to='./' className='btn btn-404 deep-purple lighten-1'>
          <span>To Home</span>
        </Link>
      </div>
    </>
  );
}

export { NotFound };
