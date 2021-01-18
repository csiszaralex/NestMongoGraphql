import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { createStudentInput } from './create-student.input';
import Student from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentR: Repository<Student>,
  ) {}

  async getLesson(id: string): Promise<Student> {
    return this.studentR.findOne({ id });
  }

  async getStudents(): Promise<Student[]> {
    return this.studentR.find();
  }

  async createStudent(
    createStudentInput: createStudentInput,
  ): Promise<Student> {
    const { firstName, lastName } = createStudentInput;

    const student = this.studentR.create({
      id: uuid(),
      firstName,
      lastName,
    });
    return this.studentR.save(student);
  }
}
