const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = document.getElementById("fname").value.trim();
  const lastName = document.getElementById("lname").value.trim();

  const entry = {
    fname: firstName,
    lname: lastName,
    submittedAt: new Date().toISOString(),
  };

  const existing = JSON.parse(localStorage.getItem("submissions")) || [];

  existing.push(entry);
  localStorage.setItem("submissions", JSON.stringify(existing));

  form.reset();
  console.log("Saved:", entry);
});
