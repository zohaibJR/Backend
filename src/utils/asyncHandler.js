const asynchandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err)=> next(err))
    }
}

export {asynchandler}


// const asyncHandler = () => {}
// const asyncHandler = (function) => () => {}  
// const asyncHandler = (function) => async () => {}           //same async with above function

// const asyncHandler = (fn) => async(req, res, next) => {
//     try{
//         await fn(req, res, next)

//     } catch (error)
//     {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }