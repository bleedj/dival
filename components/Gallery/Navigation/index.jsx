import cl from 'classnames'
import style from './index.module.scss'

export const Naviganion = ({
    disabledPrev,
    disabledNext,
    onPrevClick,
    onNextClick,
    className,
}) => (
    <div className={cl(style.Naviganion, className)}>
        <button
            disabled={disabledPrev}
            className={cl(style.Naviganion__Btn, style.Naviganion__Btn_Left)}
            onClick={onPrevClick}
        >
            Previous photo
        </button>
        <button
            disabled={disabledNext}
            className={cl(style.Naviganion__Btn, style.Naviganion__Btn_Right)}
            onClick={onNextClick}
        >
            Next photo
        </button>
        
    </div> 
);