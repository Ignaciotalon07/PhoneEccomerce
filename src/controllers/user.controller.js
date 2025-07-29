import { User } from "../models/User.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    if (!users)
      return res
        .status(400)
        .json({ message: "Aun no hay usuarios en la base de datos" });
    res.send(users);
  } catch (error) {
    res.status(404).json({ message: "Error al obtener los usuarios" });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email, password, address, phone } = req.body;
    const newUser = await User.create({
      name,
      email,
      password,
      address,
      phone,
    });
    res.send(newUser);
  } catch (error) {
    res.status(404).json({ message: "Error al crear el nuevo usuario" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(400).json({ message: "Usuario no encontrado" });
    }
    user.update(req.body);
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: "Error al actualizar el usuario" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.destroy({
      where: {
        id,
      },
    });
    res.send("El usuario con el id " + id + " fue eliminado exitosamente!");
  } catch (error) {
    res.status(404).json({ message: "Error al eliminar el usuario" });
  }
};

export const getUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await User.findByPk(id);
    if (!usuario)
      return res.status(404).json({ message: "El usuario no existe" });
    res.send(usuario);
  } catch (error) {
    res.status(404).json({ message: "Error al obtener el usuario" });
  }
};
