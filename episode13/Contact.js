const Contact = () => {
  return (
    <div>
      <h2>Conatct Page</h2>
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
