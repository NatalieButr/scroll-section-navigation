import React, { Component, useRef } from 'react';


import './styles.scss';

const TrackVisibility = (props) => {
    const pageHeight = window.innerHeight;
    const observerMargin = Math.floor(pageHeight / 2);
    const section = useRef(null)
    // const activeClass =  activeCharacter === data.id ? 'character-block--active' : '';  
    // useEffect(() => {
    //     const observerConfig = {
    //       rootMargin: `-${
    //         pageHeight % 2 === 0 ? observerMargin - 1 : observerMargin
    //       }px 0px -${observerMargin}px 0px`,
    //     };
    //     const handleIntersection = function(entries) {
    //       entries.forEach((entry) => {
    //         if (entry.target.id !== activeCharacter && entry.isIntersecting) {
    //           setActiveCharacter(entry.target.id);
    //         }
    //       });
    //     };
    //     const observer = new IntersectionObserver(
    //       handleIntersection,
    //       observerConfig
    //     );
    //     observer.observe(refs[data.name].current);
    //     return () => observer.disconnect(); // Clenaup the observer if component unmount.
    //   }, [
    //     activeCharacter,
    //     setActiveCharacter,
    //     observerMargin,
    //     refs,
    //     data,
    //     pageHeight,
    //   ]);

//    ref = React.createRef();

//    componentDidMount() {
//        const observerMargin = Math.floor(window.innerHeight / 2);
//        if (!this.ref.current) return;

//        this.observer = new IntersectionObserver(this.interSectionCallback, {
//             root: null,
//             rootMargin: `-${window.innerHeight % 2 === 0 ? observerMargin - 1 : observerMargin}px 0px -${observerMargin}px 0px`,
//             threshold: 0,
//        });
//        this.observer.observe(this.ref.current);

//     }

//     interSectionCallback = (entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.intersectionRatio * 100 > 0) {
//                 this.props.onVisible();
//             }
//         });
//     };

        return (
            <div className='characters-content_section' ref={section}>{props.children}</div>
        )
}

export default TrackVisibility;