import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private lessonS: LessonService) {}

  @Query((returns) => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonS.getLesson(id);
  }

  @Mutation((returns) => LessonType)
  createLesson(
    @Args('name') name: string,
    @Args('startDate') startDate: string,
    @Args('endDate') endDate: string,
  ) {
    return this.lessonS.createLesson(name, startDate, endDate);
  }
}
