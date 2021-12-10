import User from '../models/Users';

export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json({
            message: "",
            resultCode: 0,
            data: users
        })
    } catch (e) {
        res.satatus(500).json({
            message: e.message,
            resultCode: 1,
            data: {}
        })
    }
}


export const getUser = async (req, res) => {
    const { id } = req.params

    try {
        const user = await User.findOne({
            where: {
                id
            }
        })

        if(user) {
            res.status(200).json({
                message: "Usuario encontrado",
                resultCode: 0,
                data: user
            })
        }

    } catch (e) {
        res.status(500).json({
            message: e.message,
            resultCode: 1,
            data: {}
        })
    }
}

export const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let newUser = await User.create({
            name,
            email,
            password
        });
    
        if(newUser) {
            res.status(200).json({
                message: "Usuario creado exitosamente",
                resultCode: 0,
                data: newUser
            })
        }
    } catch (e) {
        res.status(500).json({
            message: e.message,
            resultCode: 1,
            data: {}
        })
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params

    try {
        let deleteRow = await User.destroy({
            where: {
                id
            }
        })

        if(deleteRow) {
            res.status(200).json({
                message: "Usuario eliminado exitosamente!",
                resultCode: 0,
                data: { UsersDeleted : deleteRow}
            })
        } else {
            res.status(404).json({
                message: "Usuario no encontrado",
                resultCode: 1,
                data: {}
            })
        }
    } catch (e) {
        res.status(500).json({
            message: e.message,
            resultCode: 1,
            data: {}
        })
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    try {
        let user = await User.findAll({
            attributes: ['id', 'name', 'email', 'password'],
            where: {
                id
            }
        });

        if(user.length > 0) {
            user.forEach(async user => {
                await user.update({
                    name,
                    email,
                    password
                })
            });
        }

        return res.status(200).json({
            message: "Usuario actualizado",
            resultCode: 0,
            data: { UsersUpdated : user}
        })
    } catch (e) {
        res.status(500).json({
            message: e.message,
            resultCode: 1,
            data: {}
        })
    }
}