import React from "react";
import StackIcon from 'tech-stack-icons';
import BentoGrid from "./common/BentoGrid";

const items = [
    { 
        title: ".NET Core", 
        content: "", 
        icon: <StackIcon name="csharp" />, 
        size: "" 
    },
    { 
        title: "ReactJS", 
        content: "", 
        icon: <StackIcon name="reactjs" />, 
        size: "" 
    },
    { 
        title: "Redis", 
        content: "", 
        icon: <StackIcon name="redis" />
    },
    { 
        title: "BigQuery", 
        content: "", 
        icon: <StackIcon name="gcloud" />
    },
    { 
        title: "MySQL", 
        content: "", 
        icon: <StackIcon name="mysql" />
    },
    { 
        title: "MongoDB", 
        content: "", 
        icon: <StackIcon name="mongodb" />
    },
    { 
        title: "PostgreSQL", 
        content: "", 
        icon: <StackIcon name="postgresql" />
    },
    { 
        title: "GCP", 
        content: "", 
        icon: <StackIcon name="gcloud" />
    },
    { 
        title: "Azure", 
        content: "", 
        icon: <StackIcon name="azure" />
    },
];

const extraSkills = [
    { 
        title: "Java Spring", 
        content: "", 
        icon: <StackIcon name="spring" />
    },
    { 
        title: "Ruby on Rails", 
        content: "", 
        icon: <StackIcon name="ruby" />
    },
]

const Skill = () => {
  return (
    <>
        <h2 className="text-4xl font-extrabold mt-6 mb-6 text-[#5a3e1b] drop-shadow-lg text-center">Here is my stacks</h2>
        <BentoGrid items={items} />

        <h2 className="text-4xl font-extrabold mb-6 text-[#5a3e1b] drop-shadow-lg text-center">I do also interested in...</h2>
        <BentoGrid items={extraSkills} />
    </>
    
  );
};

export default Skill;
