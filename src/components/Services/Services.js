import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ServiceCard from "./ServiceCard";





const Services = () => {

    const [services, setServices] = useState([]);

    const [currentServices, setCurrentServices] = useState([]);
    const navigate = useNavigate()
    const { limit } = useParams()
    useEffect(() => {
        fetch('http://localhost:5000/services?limit=' + limit)
            .then(res => res.json())
            .then(data => setCurrentServices(data))
    }, [limit])

    return (
        <div>
            <div className="text-center ">
                <h1 className='text-6xl font-bold text-center text-orange-600 my-10'>My Services</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
                {/* {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                } */}
                {
                    currentServices.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }


            </div>
            {
                limit === 'all' ||
                <div className="text-center  text-orange-700 my-10">
                    <button className="btn px-12 font-bold btn-warning" onClick={() => navigate('/services/all')}>
                        SEE MORE
                    </button>
                </div>
            }
        </div>
    );
};

export default Services;