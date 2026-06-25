import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  try {
    return await bcrypt.hash(password, 10);
  } catch (error) {
    console.error("err at password :", error.message);
  }
};

export const comparePassword = async (pass1, pass2) => {
  return await bcrypt.compare(pass1, pass2);
};
