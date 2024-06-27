import { EnrollmentCreateNestedManyWithoutCoursesInput } from "./EnrollmentCreateNestedManyWithoutCoursesInput";

export type CourseCreateInput = {
  description?: string | null;
  enrollments?: EnrollmentCreateNestedManyWithoutCoursesInput;
  publishedDate?: Date | null;
  status?: "Option1" | null;
  title?: string | null;
};
