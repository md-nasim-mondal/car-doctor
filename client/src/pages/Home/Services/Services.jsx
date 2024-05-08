import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-16">
      <div className="text-center space-y-5 mt-4">
        <h3 className="text-2xl font-bold text-orange-500">Services</h3>
        <h2 className="text-5xl font-bold">Our Service Area</h2>
        <p className="w-1/2 mx-auto">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br />
          words which don&apos;t look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          services.map(service => <ServiceCard key={service._id} service={service}/>)
        }
      </div>
    </div>
  );
};

export default Services;
