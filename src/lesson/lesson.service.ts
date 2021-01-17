import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Lesson } from './lesson.entity';

@Injectable()
export class LessonService {
  constructor(@InjectRepository(Lesson) private lessonR: Repository<Lesson>) {}

  async getLesson(id: string): Promise<Lesson> {
    return this.lessonR.findOne({ id });
  }

  async createLesson(name, startDate, endDate): Promise<Lesson> {
    const lesson = this.lessonR.create({
      id: uuid(),
      name,
      startDate,
      endDate,
    });

    return this.lessonR.save(lesson);
  }
}
