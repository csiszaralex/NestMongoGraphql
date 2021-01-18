import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { createStudentInput } from './create-student.input';
import Student from './student.entity';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentS: StudentService) {}

  @Query((returns) => StudentType)
  student(@Args('id') id: string) {
    return this.studentS.getLesson(id);
  }

  @Query((returns) => [StudentType])
  students() {
    return this.studentS.getStudents();
  }

  @Mutation((returns) => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: createStudentInput,
  ) {
    return this.studentS.createStudent(createStudentInput);
  }
}
