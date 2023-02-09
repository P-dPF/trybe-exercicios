with open('students-grades.txt', mode='w') as file:
    students_grades = [
        'Marcos ', '10\n',
        'Felipe ', '4\n',
        'José ', '6\n',
        'Ana ', '10\n',
        'Maria ', '9\n',
        'Miguel ', '5\n',
    ]
    file.writelines(students_grades)

reproved_students = []
with open('students-grades.txt', mode='r') as file:
    for line in file:
        student_stats = line.split()
        if int(student_stats[1]) < 6:
            reproved_students.append(student_stats[0] + '\n')

with open('reproved-students.txt', mode='w') as rep_file:
    rep_file.writelines(reproved_students)
