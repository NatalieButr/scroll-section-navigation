import React, { useEffect } from 'react';

import './styles.scss';

const TrackVisibility = (props) => {
  
    const pageHeight = window.innerHeight;
    const observerMargin = Math.floor(pageHeight / 2);
  
    const { name, refs, activeCharacter, onVisible } = props;
    
    const activeClass = activeCharacter === name ? 'characters-content--active' : ''; 
  
    useEffect(() => {
      const handleIntersection = function(entries) {
          entries.forEach((entry) => {
            if (entry.intersectionRatio * 100 > 0) {
              onVisible(name)
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
      }, [ observerMargin, pageHeight, name, refs, activeCharacter, onVisible ]);

        return (
            <div className={`characters-content_section ${activeClass}`} ref={refs[name]}>{props.children}</div>
        )
}

export default TrackVisibility;