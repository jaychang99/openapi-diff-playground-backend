import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';

export class UserDto {
  @ApiProperty({ description: 'User ID', example: 1 })
  id: number;

  @ApiProperty({ description: 'User name', example: 'John Doe' })
  name: string;

  @ApiProperty({ description: 'User email', example: 'johndoe@email.com' })
  email: string;

  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
  }
}

export class UserListDto {
  @ApiProperty({ description: 'User List', name: 'users', type: [UserDto] })
  users: UserDto[];

  constructor(users: UserDto[]) {
    this.users = users;
  }
}
