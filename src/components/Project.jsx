import { motion } from "framer-motion";

const items = [
    { title: "OLAP Back-end services", description: "An analytical back-end system to extract business insights from post transaction data via ELT and also real time data analytics with UI visuailization.", achievements: ["Successfully migrated the services into GCP k8s", "Mitigated the server cost by optimizing the memory utilization"], front: "ReactJS", back: ".NET Core, ExpressJS", db: "Google BigQuery, MySQL, MongoDB", etc: "GCP, RabbitMQ, Redis" },
    { title: "Airline Booking System", description: "An airline booking system was built to ensure the robustness & availability of the booking journey for million of users.", achievements: ["API Gateway to authenticate & routing the request to correct API server", "Redis caching to sustain the high load from accessing into Database."], front: "VueJS", back: ".NET Core", db: "MySQL", etc: "Redis, AWS" },
    { title: "Airline Fare Middleware", description: "A fare middleware API to aggregate all airline fares and returned as one response to Online Travel Agent (OTA)", achievements: ["Enhanced Caching logic applied to reduce the server cost prevented duplicate call from our merchant (OTA)."], front: "-", back: "WCF, .NET Framework", db: "MySQL", etc: "Redis" },
    { title: "F&B Ordering system", description: "A web app to allow user to place their food order & track the delivery to the desired destination", achievements: ["As a MVP project, I have implemented core functionality from scratch (Inventory, Cart, Order Journey, etc)", "Integrate third party API for status tracking and drivers."], front: "ASP.NET MVC", back: ".NET Framework", db: "MySQL", etc: "-" },
];
const Project = () => {
    return (
        <>
            <h2 className="text-4xl font-extrabold mt-16 mb-6 text-[#5a3e1b] drop-shadow-lg text-center">Project Involvement in past experience</h2>
            <ProjectGrid items={items} />
        </>

    );
};

const ProjectGrid = ({ items }) => {
    return (
        <div className="grid grid-cols-2 gap-6 p-6 relative auto-rows-[minmax(120px,_1fr)]">
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    className={`p-8 rounded-3xl shadow-lg bg-white/40 backdrop-blur-xl hover:shadow-2xl transition-all relative z-10 border border-white/60 flex flex-col ${item.size}`}
                    whileHover={{ scale: 1.05 }}
                >
                    <h1 className="text-4xl font-bold text-[#5a3e1b] mb-4 text-center">{item.title}</h1>
                    <p className="text-lg text-gray-800 mb-6 " >{item.description}</p>
                    <ul className="list-disc mb-6 text-gray-800 mx-5">
                        {item.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                        ))}
                    </ul>
                    <b className="text-[#5a3e1b] text-2xl my-6">Tech Stacks</b>
                    <b className="text-[#5a3e1b] text-lg " >Front End: {item.front}</b>
                    <b className="text-[#5a3e1b] text-lg " >Back End: {item.back}</b>
                    <b className="text-[#5a3e1b] text-lg " >DB: {item.db}</b>
                    <b className="text-[#5a3e1b] text-lg " >Others: {item.etc}</b>
                </motion.div>
            ))}
        </div>
    );
};

export default Project;