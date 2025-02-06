import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experiences() {

    const API_URL = process.env.REACT_APP_API_URL;
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/experiences`)
            .then(response => {
                setExperiences(response.data)
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div className="p-6">
            <VerticalTimeline>
                {experiences.map((exp, index) => (
                    <VerticalTimelineElement
                        key={index}
                        date={`${exp.startDate} - ${exp.endDate || "Present"}`}
                        icon={exp.type === "education" ? <GraduationCap size={24} /> : <Briefcase size={24} />}
                        iconStyle={{
                            background: exp.type === "education" ? "#ddafa1" : "#7d4f50",
                            color: "#fff"
                        }}
                    >
                        <h3 className="text">{exp.title}</h3>
                        <h5 className="text">{exp.organization}</h5>
                        <ul className="paragraph">{exp.description.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                        </ul>

                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
}