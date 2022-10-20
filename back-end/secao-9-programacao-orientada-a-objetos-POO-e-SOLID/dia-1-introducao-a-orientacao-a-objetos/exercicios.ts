class EnrolledStudents {
  private _enrollment: number;
  private _name: string;
  private _examsGrades: number[];
  private _assignmentsGrades: number[];

  constructor (
    enrollment: number,
    name: string,
    examsGrades: number[],
    assignmentsGrades: number[],
  ) {
    this._enrollment = enrollment;
    this._name = name;
    this._examsGrades = examsGrades;
    this._assignmentsGrades = assignmentsGrades;
  }

  get enrollment() { return this.enrollment; }
  get name() { return this.name; }
  get examsGrades() { return this.examsGrades; }
  get assignmentsGrades() { return this.assignmentsGrades; }

  sumGrades = (): number => {
    const examsGrades = this._examsGrades.reduce((acc, curr) => acc + curr);
    const assignmentsGrades = this._assignmentsGrades.reduce((acc, curr) => acc + curr);

    return examsGrades + assignmentsGrades;
  }

  averageOfGrades = (): number => {
    const sum = this.sumGrades()

    return sum / 6;
  }
}