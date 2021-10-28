import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
}

export const createUser = (req, res) => {
  const user = req.body;
  
  users.push({ ...user, id: uuidv4() });

  res.send(`yo ${user.name} waddup`);
}

export const getUser = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find(user => user.id === id);

  res.send(foundUser);
}

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter(user => user.id !== id);

  res.send(`Cya ${id}`);
}

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, surname, age } = req.body;

  const user = users.find(user => user.id === id);

  if (name) user.name = name;
  if (surname) user.surname = surname;
  if (age) user.age = age;

  res.send(`got the update for ${id}`);

}