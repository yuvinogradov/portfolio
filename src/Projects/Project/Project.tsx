import React from "react";
import s from "./Project.module.css";

function Project(props: any) {
    function handleClick(link: string) {
        window.open(link)
    }

    const styleImageUrl = {
        backgroundImage: 'url(' + props.imageLink + ')'
    }

    return (
        <div className={s.project}>
            <div
                className={s.image}
                style={styleImageUrl}
                onClick={() => {
                    handleClick('link')
                }}
            >


            </div>
            <div className={s.title}><h3>{props.title}</h3></div>
            <div className={s.description}><span className={s.description}>{props.description}</span></div>
        </div>
    );
}

export default Project;
