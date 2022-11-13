import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";





const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div >
            <div className="text-center">
                <h1 className='text-5xl font-bold text-center text-orange-600'>My Services:{services.length}</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                        key={service.service_id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className="text-center  text-orange-700 my-10">
                <button className="btn px-12 font-bold btn-warning">
                    SEE MORE
                </button>
            </div>
        </div>
    );
};

export default Services;