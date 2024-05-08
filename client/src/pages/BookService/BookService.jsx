import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const BookService = () => {
  
  const service = useLoaderData();
  const { title, _id, price, img} = service;
  const {user} = useContext(AuthContext);
  // console.log(user);

  const handleBookService = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const order = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      service_id: _id,
      price: price
    }

    console.log(order);

    fetch(`http://localhost:5000/bookings`, {
      method: 'POST',
      headers: {
        'content-type' : "application/json"
      },
      body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId) {
        alert('Service booked successfully')
      }
    })
  }

  return (
    <div>
      <h2 className="text-2xl">Book Service: {title} </h2>
      <form onSubmit={handleBookService}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              placeholder="date"
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
              name="email"
              defaultValue={user?.email}
              readOnly
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              placeholder="amount"
              defaultValue={'$' + price}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default BookService;