export default function LoginCard(): JSX.Element {
  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Clicked");
  };

  return (
    <div className="card w-96 glass">
      <div className="items-center text-center card-body">
        <h2 className="card-title">Sign in</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-white">Your Email</span>
          </label>
          <label className="input-group">
            <span>Email</span>
            <input
              type="text"
              placeholder="info@site.com"
              className="input input-bordered"
            />
          </label>
        </div>
        <div className="justify-end card-actions">
          <button onClick={handleLogin} className="btn bg-netflix-red">
            Login!
          </button>
        </div>
      </div>
    </div>
  );
}
