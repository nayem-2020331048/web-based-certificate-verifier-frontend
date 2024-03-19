const submitBtn = document.getElementById("submit-form");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const regNo = document.getElementById("registrationNumber").value;
  const dob = document.getElementById("dateOfBirth").value;
  const docType = document.getElementById("documentType").value;

  console.log({ regNo, dob, docType });

  fetch("http://localhost:5500/verify", {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      registrationNumber: regNo,
      dateOfBirth: dob, 
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: data.error,
        });
      } else {
        const studentDataJSON = JSON.stringify(data[0]);

        localStorage.setItem("studentData", studentDataJSON);

        if (docType == "certificate")
        {
          window.location.href = `View.html`;
        }
        else 
        {
          window.location.href = `Transcript.html`;
        }

        
      }
    });
});
