import { useEffect } from 'react';

const DocTitle = (title) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
};

export default DocTitle;
