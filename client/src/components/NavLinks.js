import React, { useEffect } from 'react';





export default function NavLinks(props) {

    useEffect(() => {

    }, [])
    return (
        <>
            <div className="menu__item">
                <a className="menu__item-link">{props.linkHeader}</a>
                <img className="menu__item-img" src={props.linkImg} />
                <div className="marquee">
                    <div className="marquee__inner">
                        <span>{props.linkHeader} - {props.linkHeader} - {props.linkHeader} - {props.linkHeader} - {props.linkHeader} - {props.linkHeader}
                            - {props.linkHeader}</span
                        >
                    </div>
                </div>
            </div>
        </>
    );
}