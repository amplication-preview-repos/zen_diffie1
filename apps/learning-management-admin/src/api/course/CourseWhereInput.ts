import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EnrollmentListRelationFilter } from "../enrollment/EnrollmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type CourseWhereInput = {
  description?: StringNullableFilter;
  enrollments?: EnrollmentListRelationFilter;
  id?: StringFilter;
  publishedDate?: DateTimeNullableFilter;
  status?: "Option1";
  title?: StringNullableFilter;
};
