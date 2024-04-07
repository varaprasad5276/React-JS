const Contact = () => {
  return (
    <div>
      <h2 className="font-bold p-2 m-2">
        Contact us Page
      </h2>

      <form>
        <input
          type="text"
          className="border border-black m-2 p-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black m-2 p-2"
          placeholder="message"
        />
        <button className="border border-black m-2 p-2 rounded-lg bg-blue-500">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
