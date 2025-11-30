import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty({ message: 'Le nom complet est requis' })
  @IsString()
  fullName: string;

  @IsNotEmpty({ message: "L'email est requis" })
  @IsEmail({}, { message: 'Email invalide' })
  email: string;

  @IsNotEmpty({ message: 'Le mot de passe est requis' })
  @IsString()
  @MinLength(6, { message: 'Le mot de passe doit contenir au moins 6 caractères' })
  password: string;

  @IsNotEmpty({ message: 'La confirmation du mot de passe est requise' })
  @IsString()
  confirmPassword: string;
}
