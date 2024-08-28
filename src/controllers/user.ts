const register = async (req: any, res: any) => {
    const body = req.body;

    try {
        res.status(200).json({
            message: 'Register',
            data: body,
        })
    } catch (error: any) {
        res.status(404).json({
            message: error.message,
        })
    }
}

export {
    register
}