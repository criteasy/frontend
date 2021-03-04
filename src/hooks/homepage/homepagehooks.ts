import { useContext, useEffect, useRef } from 'react'
import { SearchContext } from '../../screen/maincontainer/maincontainer';

export const useFixSearchBarToTop = () => {
    const searchContext = useContext(SearchContext);
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const fixNavToTopWhenItReachesToTop = () => {
            if (ref && ref.current && ref.current.getBoundingClientRect()) {
                if (ref.current.getBoundingClientRect().bottom <= window.screenTop +105) {
                    searchContext.setShowSearch(true);
                } else {
                    searchContext.setShowSearch(false);


                }
            }
        }
        if (ref && ref.current && ref.current.getBoundingClientRect()) {
            if (ref.current.getBoundingClientRect().bottom <= window.screenTop +105) {
                searchContext.setShowSearch(true);

            } else {
                searchContext.setShowSearch(false);
            }
        }
        window.addEventListener('scroll', fixNavToTopWhenItReachesToTop);
        return () => {
            window.removeEventListener('scroll', () => fixNavToTopWhenItReachesToTop);
        };

    }, [searchContext])

    return ref

}