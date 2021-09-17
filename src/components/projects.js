import React, { useState } from 'react';
import Project from './project';
import './projects.css';

export default function Projects() {
    const [ displayProjects, setDisplayProjects ] = useState(true)

    const user_projects = [
        {
            title: 'Project Title1', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus rutrum molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut sit amet justo vel est semper laoreet. Sed ut euismod diam, quis eleifend dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum dignissim ante at enim lacinia fringilla. Proin vitae aliquet orci. Quisque vehicula augue ligula, venenatis imperdiet metus fermentum quis. Nullam odio est, molestie a finibus vel, faucibus quis lectus. Fusce eu odio in elit convallis tristique. Integer consequat ac arcu vitae faucibus. In sagittis ac eros id luctus. Quisque sed malesuada nulla.', // describe what the application/project does and why its useful
            contributions: [    // list how your contributions to the project
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
            ],
            gitHub: '', // add a link to repo here (leave blank to not display icon)
            deployed_site: '', //if you have a deployed site then feel free to add it (leave blank to not display icon)
        },
        {
            title: 'Project Title2', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus rutrum molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut sit amet justo vel est semper laoreet. Sed ut euismod diam, quis eleifend dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum dignissim ante at enim lacinia fringilla. Proin vitae aliquet orci. Quisque vehicula augue ligula, venenatis imperdiet metus fermentum quis. Nullam odio est, molestie a finibus vel, faucibus quis lectus. Fusce eu odio in elit convallis tristique. Integer consequat ac arcu vitae faucibus. In sagittis ac eros id luctus. Quisque sed malesuada nulla.', // describe what the application/project does and why its useful
            contributions: [    // list how your contributions to the project
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
            ],
            gitHub: '', // add a link to repo here (leave blank to not display icon)
            deployed_site: '', //if you have a deployed site then feel free to add it (leave blank to not display icon)
        },
        {
            title: 'Project Title3', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus rutrum molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut sit amet justo vel est semper laoreet. Sed ut euismod diam, quis eleifend dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum dignissim ante at enim lacinia fringilla. Proin vitae aliquet orci. Quisque vehicula augue ligula, venenatis imperdiet metus fermentum quis. Nullam odio est, molestie a finibus vel, faucibus quis lectus. Fusce eu odio in elit convallis tristique. Integer consequat ac arcu vitae faucibus. In sagittis ac eros id luctus. Quisque sed malesuada nulla.', // describe what the application/project does and why its useful
            contributions: [    // list how your contributions to the project
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
            ],
            gitHub: '', // add a link to repo here (leave blank to not display icon)
            deployed_site: '', //if you have a deployed site then feel free to add it (leave blank to not display icon)
        },
        {
            title: 'Project Title4', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus rutrum molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut sit amet justo vel est semper laoreet. Sed ut euismod diam, quis eleifend dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum dignissim ante at enim lacinia fringilla. Proin vitae aliquet orci. Quisque vehicula augue ligula, venenatis imperdiet metus fermentum quis. Nullam odio est, molestie a finibus vel, faucibus quis lectus. Fusce eu odio in elit convallis tristique. Integer consequat ac arcu vitae faucibus. In sagittis ac eros id luctus. Quisque sed malesuada nulla.', // describe what the application/project does and why its useful
            contributions: [    // list how your contributions to the project
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
            ],
            gitHub: '', // add a link to repo here (leave blank to not display icon)
            deployed_site: '', //if you have a deployed site then feel free to add it (leave blank to not display icon)
        },
    ]

    return (
        <div id='Projects'>
            <h3 className='section_title'>- PROJECTS -</h3>
            {displayProjects && <div className='projects_wrapper'>
                {user_projects.map((proj, index) => {
                    return(
                        <Project proj={proj} setDisplayProjects={setDisplayProjects} key={index} /> 
                    )
                })}
            </div>}
        </div>
    )
}
