/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Enrollment as PrismaEnrollment,
  Course as PrismaCourse,
  Student as PrismaStudent,
} from "@prisma/client";

export class EnrollmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.EnrollmentCountArgs, "select">
  ): Promise<number> {
    return this.prisma.enrollment.count(args);
  }

  async enrollments(
    args: Prisma.EnrollmentFindManyArgs
  ): Promise<PrismaEnrollment[]> {
    return this.prisma.enrollment.findMany(args);
  }
  async enrollment(
    args: Prisma.EnrollmentFindUniqueArgs
  ): Promise<PrismaEnrollment | null> {
    return this.prisma.enrollment.findUnique(args);
  }
  async createEnrollment(
    args: Prisma.EnrollmentCreateArgs
  ): Promise<PrismaEnrollment> {
    return this.prisma.enrollment.create(args);
  }
  async updateEnrollment(
    args: Prisma.EnrollmentUpdateArgs
  ): Promise<PrismaEnrollment> {
    return this.prisma.enrollment.update(args);
  }
  async deleteEnrollment(
    args: Prisma.EnrollmentDeleteArgs
  ): Promise<PrismaEnrollment> {
    return this.prisma.enrollment.delete(args);
  }

  async getCourse(parentId: string): Promise<PrismaCourse | null> {
    return this.prisma.enrollment
      .findUnique({
        where: { id: parentId },
      })
      .course();
  }

  async getStudent(parentId: string): Promise<PrismaStudent | null> {
    return this.prisma.enrollment
      .findUnique({
        where: { id: parentId },
      })
      .student();
  }
}
