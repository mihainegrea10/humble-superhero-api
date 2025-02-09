import { Controller, Get, Post, Body, Module, BadRequestException } from '@nestjs/common';


interface Superhero {
  name: string;
  superpower: string;
  humilityScore: number;
}

const superheroes: Superhero[] = [];

@Controller('superheroes')
export class SuperheroController {
  @Post()
  addSuperhero(@Body() superhero: Superhero): string {
    if (!superhero.name || !superhero.superpower || typeof superhero.humilityScore !== 'number') {
      throw new BadRequestException('Invalid data! Please provide name, superpower, and humilityScore as a number.');
    }
    if (superhero.humilityScore < 1 || superhero.humilityScore > 10) {
      throw new BadRequestException('Humility score must be between 1 and 10.');
    }
    superheroes.push(superhero);
    return `Superhero ${superhero.name} added successfully!`;
  }

  @Get()
  getSuperheroes(): Superhero[] {
    return superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
