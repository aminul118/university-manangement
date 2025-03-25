import { Model } from 'mongoose';

type IAcademicSemesterMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

type ITitle = 'Autumn' | 'Summer' | 'Fall';

type IAcademicCode = '01' | '02' | '03';

type IAcademicSemester = {
  title: ITitle;
  year: number;
  code: IAcademicCode;
  startMonth: IAcademicSemesterMonth;
  endMonth: IAcademicSemesterMonth;
};

type AcademicSemesterModel = Model<IAcademicSemester>;

export {
  IAcademicSemester,
  AcademicSemesterModel,
  IAcademicSemesterMonth,
  ITitle,
  IAcademicCode,
};
