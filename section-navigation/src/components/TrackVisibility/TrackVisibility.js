import React, { useEffect, useRef, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';

import './styles.scss';

const TrackVisibility = (props) => {
  
    const pageHeight = window.innerHeight;
    const observerMargin = Math.floor(pageHeight / 2);
   
    const section = useRef(null)
  
  
    const activeCharacter = useSelector(state => state.characters.activeCharacter);
    const dispatch = useDispatch()
  

    const { name } = props;
    const activeClass = activeCharacter === name ? 'characters-content--active' : ''; 
    
    useEffect(() => {
      const handleIntersection = function(entries) {
          entries.forEach((entry) => {
            if (entry.intersectionRatio * 100 > 0) {
              dispatch({ type: 'SET_ACTIVE_CHARACTER', payload: name })
            }
          });
        };
        const observer = new IntersectionObserver(
          handleIntersection,
          {
            root: null,
            rootMargin: `-${pageHeight % 2 === 0 ? observerMargin - 1 : observerMargin}px 0px -${observerMargin}px 0px`,
            threshold: 0,
       }
        );
        observer.observe(section.current);
        return () => observer.disconnect();
      }, [ observerMargin, pageHeight, name, dispatch]);

        return (
            <div className={`characters-content_section ${activeClass}`} ref={section}>{props.children}</div>
        )
}

export default TrackVisibility;