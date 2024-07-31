export default function getStudentIdsSum(student) {
  return student.reduce((acc, s) => acc + s.id, 0);
}
