const createTokenUser = (user) => ({
    name: user.name,
    userId: user._id,
    role: user.role,
    status:user.status,
});

export default createTokenUser;
