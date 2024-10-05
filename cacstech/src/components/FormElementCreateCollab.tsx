export default function FormElementCreateCollab() {
    return (
      <form className="flex gap-[8px] flex-col">
        <label htmlFor="fullname" className="mt-8 text-white font-bold text-2xl">
          Full Name
        </label>
        <br />
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Enter Your full name"
          className="input-primary"
        />
  
        <label htmlFor="email" className="mt-8 text-white font-bold text-2xl">
          Email Address
        </label>
        <br />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter Your email"
          className="input-primary"
        />
  
        <label
          htmlFor="organization"
          className="mt-8 text-white font-bold text-2xl"
        >
          Organization
        </label>
        <br />
        <input
          type="text"
          name="organization"
          id="organization"
          placeholder="Enter your organization"
          className="input-primary"
        />
  
        <label
          htmlFor="organization"
          className="mt-8 text-white font-bold text-2xl"
        >
          Role/Position
        </label>
        <br />
        <input
          type="text"
          name="organization"
          id="organization"
          placeholder="Enter your role"
          className="input-primary"
        />
  
        <label
          htmlFor="organization"
          className="text-white font-bold text-2xl mt-8"
        >
          Bio
        </label>
        <br />
        <textarea
          className="input-primary"
          placeholder="Enter your bio"
          rows={10}
        />
  
        <button
          type="submit"
          className="bg-orangebutton text-white p-2 w-[40rem] rounded-[4px] hover:bg-orange-400 mt-8"
        >
          Submit
        </button>
      </form>
    );
  }