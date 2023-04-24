import style from './index.module.scss'
import cl from 'classnames'
import { useLayoutEffect, useMemo, useRef, useState } from "react";

const getPhotoByRef = (ref, index) => (
    ref.current.querySelector(`img:nth-of-type(${index + 1})`)
);
const hidePhoto = (element) => {
    if (!element) {return}
    element.dataset.active= 'false'

    if (element.previousSibling) {
        // @js-ignore
        element.previousSibling.dataset.active = 'prepared'
    }
    if (element.nextSibling) {
        // @js-ignore
        element.nextSibling.dataset.active = 'prepared'
    }
}
const showPhoto = (element) => {
    if (!element) {return}
    element.dataset.active = 'true'
}


export const TransitionPhoto= ({
    photos,
    indexActivePhoto,
    className,
}) => {
    const [prevActiveIndexPhoto, setPrevActivePhoto] = useState(indexActivePhoto); 
    const containerRef = useRef(null);
    useLayoutEffect(()=> {
        if(!containerRef.current) {
            return;
        }
        const activePhoto = getPhotoByRef(
            containerRef,
            prevActiveIndexPhoto,
        );
        const nextActivePhoto = getPhotoByRef(
            containerRef,
            indexActivePhoto,
        );
        if (prevActiveIndexPhoto !== indexActivePhoto) {
            hidePhoto(activePhoto);
            showPhoto(nextActivePhoto);
        } else {
            showPhoto(activePhoto);
        }
        setPrevActivePhoto(indexActivePhoto);
    }, [indexActivePhoto]);
    return useMemo(() =>(
        <div
            className={cl(className, style.TransitionPhoto)}
            ref={containerRef}

        >
            {photos.map((photo, id) => (
                <img 
                data-active={id===indexActivePhoto}
                key={photo.id}
                className={style.TransitionPhoto__Image} 
                src={photo.src} 
                alt={photo.description} 
                />
            ))}
            
        </div>
    ),[])}  ;
