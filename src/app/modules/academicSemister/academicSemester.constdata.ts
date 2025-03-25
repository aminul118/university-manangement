import {
  IAcademicCode,
  IAcademicSemesterMonth,
  ITitle,
} from './acdemicSemester.interface';

const AcademicSemesterMonths: IAcademicSemesterMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const AcademicSemesterTitles: ITitle[] = ['Autumn', 'Summer', 'Fall'];

const AcademicSemesterCodes: IAcademicCode[] = ['01', '02', '03'];

export {
  AcademicSemesterMonths,
  AcademicSemesterTitles,
  AcademicSemesterCodes,
};
