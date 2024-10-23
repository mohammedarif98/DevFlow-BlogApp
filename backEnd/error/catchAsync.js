

//! -------------------- use catchAsync instead of using try{},catch() in controller --------------------

export function catchAsync(fn) {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};