
window.onload = () => {
  const studentDataJSON = localStorage.getItem("studentData");

  const studentData = JSON.parse(studentDataJSON);

  console.log(studentData);

  //Personal Info Part
  document.getElementById("name").innerHTML = `Name : ${studentData.name}`;
  document.getElementById(
    "f-name"
  ).innerHTML = `Father : ${studentData.father_name}`;
  document.getElementById(
    "m-name"
  ).innerHTML = `Mother : ${studentData.mother_name}`;

  //Birthday part
  const birthdayDate = new Date(studentData.birthday);
  const year = birthdayDate.getFullYear();
  const month = birthdayDate.getMonth() + 1;
  const day = birthdayDate.getDate();
  const formattedDate = `${day}-${month}-${year}`;
  document.getElementById("b-day").innerHTML = `Birthday : ${formattedDate}`;

  //Academic Part
  document.getElementById("dept").innerHTML = `Dept : ${studentData.dept}`;
  document.getElementById(
    "school"
  ).innerHTML = `School : ${studentData.school}`;
  document.getElementById(
    "grad-year"
  ).innerHTML = `Graduation : ${studentData.graduation}`;
  document.getElementById("cgpa").innerHTML = `CGPA : ${studentData.cgpa}`;
};

function go_back() {
  window.location.href = `index.html`;
}
