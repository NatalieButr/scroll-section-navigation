import React, { useEffect, useRef } from 'react';
import {useSelector, useDispatch} from 'react-redux';

import './styles.scss';

const TrackVisibility = (props) => {
  
    const pageHeight = window.innerHeight;
    const observerMargin = Math.floor(pageHeight / 2);
  
  
    const activeCharacter = useSelector(state => state.characters.activeCharacter);
    const dispatch = useDispatch()
  

    const { name, refs } = props;
    const activeClass = activeCharacter === name ? 'characters-content--active' : ''; 

    useEffect(() => {
      const handleIntersection = function(entries) {
          entries.forEach((entry) => {
            console.log(activeCharacter, name)
            if (name !== activeCharacter && entry.isIntersecting) {
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
        observer.observe(refs[name].current);
        return () => observer.disconnect();
      }, [ observerMargin, pageHeight, name, dispatch, refs, activeCharacter ]);

        return (
            <div className={`characters-content_section ${activeClass}`} ref={refs[name]}>{props.children}</div>
        )
}

export default TrackVisibility;