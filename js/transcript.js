window.onload = () => {

  const studentDataJSON = localStorage.getItem("studentData");
  const studentData = JSON.parse(studentDataJSON);


  console.log(studentData);


  var registrationNo = studentData.registration_no;


  var pdfUrl = 'http://localhost/pdf/' + registrationNo + '.pdf';


  var iframeElement = document.createElement('iframe');
  iframeElement.src = pdfUrl;
  iframeElement.className = 'pdf-iframe';

  document.getElementById("show-transcript").appendChild(iframeElement);
};

function go_back() {
  window.location.href = `index.html`;
}
