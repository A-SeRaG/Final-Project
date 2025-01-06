import { User } from './models/index.js';
import bcrypt from 'bcryptjs';

async function createUser(name, email, password, role) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
  } catch (err) {
    console.log(err);
  }
}

await createUser('serag', 'serag@gmail.com', 'serag', 'customer');
await createUser('serag', 'serag_admin@gmail.com', 'serag', 'admin');
await createUser('hager', 'hager@gmail.com', 'hager', 'customer');
await createUser('hager', 'hager_admin@gmail.com', 'hager', 'admin');
await createUser('omar', 'omar@gmail.com', 'omar', 'customer');
await createUser('omar', 'omar_admin@gmail.com', 'omar', 'admin');

process.exit();
