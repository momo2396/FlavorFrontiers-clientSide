const Contact = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-5 py-10">
      <h3 className="font-serif text-center text-xl lg:text-4xl text-[#a294cd] font-bold pb-5">
        GET IN TOUCH WITH US
      </h3>
      <form className="card-body text-black bg-slate-100 rounded-lg">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="your name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input
            type="text"
            placeholder="phone-number"
            className="input input-bordered"
            name="number"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Message</span>
          </label>
          <textarea
            placeholder="message"
            name="message"
            className="textarea textarea-bordered"
            required
          />
        </div>
        <div className="flex sm:flex-row flex-col gap-5 form-control mt-6">
          <input
            type="submit"
            value="Contact Us"
            className="btn bg-[#a294cd] border-[#a294cd] hover:bg-[#a294cd] text-white flex-1"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
