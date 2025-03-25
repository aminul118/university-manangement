import { z } from 'zod';
import {
  AcademicSemesterCodes,
  AcademicSemesterMonths,
  AcademicSemesterTitles,
} from './academicSemester.constdata';

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum([...AcademicSemesterTitles] as [string, ...string[]], {
      required_error: 'Title is required',
    }),
  }),

  year: z.number({
    required_error: 'Year is required',
  }),

  code: z.enum([...AcademicSemesterCodes] as [string, ...string[]], {
    required_error: 'Code is required',
  }),

  startMonth: z.enum([...AcademicSemesterMonths] as [string, ...string[]], {
    required_error: 'Start month is requires',
  }),

  endMonth: z.enum([...AcademicSemesterMonths] as [string, ...string[]], {
    required_error: 'End month is requires',
  }),
});

export const AcademicSemesterValidation = {
  createAcademicSemesterZodSchema,
};
