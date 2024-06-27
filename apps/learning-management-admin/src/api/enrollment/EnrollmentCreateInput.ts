import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type EnrollmentCreateInput = {
  course?: CourseWhereUniqueInput | null;
  enrollmentDate?: Date | null;
  status?: "Option1" | null;
  student?: StudentWhereUniqueInput | null;
};
