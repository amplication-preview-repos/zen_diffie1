import { EnrollmentUpdateManyWithoutCoursesInput } from "./EnrollmentUpdateManyWithoutCoursesInput";

export type CourseUpdateInput = {
  description?: string | null;
  enrollments?: EnrollmentUpdateManyWithoutCoursesInput;
  publishedDate?: Date | null;
  status?: "Option1" | null;
  title?: string | null;
};
