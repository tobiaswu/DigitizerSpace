export const ContactForm = () => {
  return (
    <form className="flex flex-col gap-4" action="">
      <input className="input input-bordered" type="text" placeholder="Name" />
      <input
        className="input input-bordered"
        type="email"
        placeholder="Email"
      />
      <input className="input input-bordered" type="tel" placeholder="Phone" />
      <textarea
        className="textarea textarea-bordered text-base textarea-md"
        placeholder="Tell us about your project"
      ></textarea>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};
