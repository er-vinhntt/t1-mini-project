import { UserEntity } from '@/entities';
import { hash } from 'bcrypt';
import { setSeederFactory } from 'typeorm-extension';

export default setSeederFactory(UserEntity, async (faker) => {
  const user = new UserEntity();
  user.firstName = faker.person.firstName('male');
  user.lastName = faker.person.lastName('male');
  user.email = faker.internet.email({
    firstName: user.firstName,
    lastName: user.lastName,
  });
  user.phoneNumber = faker.string.numeric(10);
  user.password = await hash('Asdf123!@#', 10);
  user.avatar = faker.image.avatar();
  user.isVerify = faker.datatype.boolean();
  return user;
});
