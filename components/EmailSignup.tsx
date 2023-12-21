export const EmailSignup = () => {
  return (
    <div className="join">
      <input
        type="email"
        className="input input-bordered input-primary w-48 sm:w-72 join-item"
        placeholder="Email"
      />
      <button className="btn btn-primary join-item rounded-r-lg">
        Subscribe
      </button>
    </div>
  );
};
