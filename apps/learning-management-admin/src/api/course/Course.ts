import { Enrollment } from "../enrollment/Enrollment";

export type Course = {
  createdAt: Date;
  description: string | null;
  enrollments?: Array<Enrollment>;
  id: string;
  publishedDate: Date | null;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
