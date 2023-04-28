//Déclarations
const form = document.querySelector("#form");
const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const email = document.querySelector("#email");
const subject = document.querySelector("#select");
const checkbox = document.querySelector("#checkbox");
const select = document.querySelector("select");
const button = document.querySelector("button");
const left = document.querySelector(".left");

//Déclarations Messages d'erreurs
const [small1, small2, small3, small4, small5] =
  document.querySelectorAll("small");

//Déclaration Input
const inputs = document.querySelectorAll("input");

button.addEventListener("click", () => {
  button.classList.add("scale");

  setTimeout(() => {
    button.classList.remove("scale");
  }, 0150);
});
//Input foreach
/*----------------------------------*/
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    const inputValue = input.value.trim();
    const placeholder = input.parentElement.querySelector(".placeholder");
    if (inputValue !== "") {
      placeholder.classList.add("input-active");
    } else {
      placeholder.classList.remove("input-active");
    }
  });
});

select.addEventListener("input", () => {
  const subjectValue = subject.value;
  if (subjectValue !== "choose") {
    select.style.color = "var(--primary-color)";
  } else {
    select.style.color = "var(--second-color)";
  }
});

//form verify
/*----------------------------------*/

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form_verify();
  if (
    small1.classList.contains("active") ||
    small2.classList.contains("active") ||
    small3.classList.contains("active") ||
    small4.classList.contains("active") ||
    small5.classList.contains("active")
  ) {
  } else {
    window.location.href = "config.php";
  }
});

//Fonction from verify
function form_verify() {
  const nameValue = name.value.trim();
  const surnameValue = surname.value.trim();
  const emailValue = email.value.trim();
  const subjectValue = subject.value;

  //Surname
  /*----------------------------------*/
  if (surnameValue === "") {
    let message = "*required";
    small1.classList.add("active");
    setError(surname, message);
  } else if (!name_verify(surnameValue)) {
    let message = "*must not contain a number";
    small1.classList.add("active");
    setError(surname, message);
  } else {
    let letter = surnameValue.length;
    if (letter < 3) {
      let message = "*must know at least three characters";
      small1.classList.add("active");
      setError(surname, message);
    } else {
      setSuccess(surname);
      small1.classList.remove("active");
    }
  }

  //Name
  /*----------------------------------*/
  if (nameValue === "") {
    let message = "*required";
    small2.classList.add("active");
    setError(name, message);
  } else if (!name_verify(nameValue)) {
    let message = "*must not contain a number";
    small2.classList.add("active");
    setError(name, message);
  } else {
    let letter = nameValue.length;
    if (letter < 3) {
      let message = "*must know at least three characters";
      small2.classList.add("active");
      setError(name, message);
    } else {
      setSuccess(name);
      small2.classList.remove("active");
    }
  }

  //Email
  /*----------------------------------*/
  if (emailValue === "") {
    let message = "*required";
    small3.classList.add("active");
    setError2(email, message);
  } else if (!email_verify(emailValue)) {
    let message = "Invalid email";
    small3.classList.add("active");

    setError2(email, message);
  } else {
    setSuccess2(email);
    small3.classList.remove("active");
  }

  //suject
  /*----------------------------------*/
  if (subjectValue === "choose") {
    let message = "*required";
    small4.classList.add("active");
    setError2(subject, message);
  } else {
    setSuccess2(subject);
    small4.classList.remove("active");
  }

  //checkbox
  /*----------------------------------*/
  if (checkbox.checked) {
    setSuccess3(checkbox);
    small5.classList.remove("active");
  } else {
    let message = "*please accept our terms and conditions";
    small5.classList.add("active");
    setError3(checkbox, message);
  }
}
//fonctions
/*----------------------------------*/
//fonction name
function setError(elem, message) {
  const formControl = elem.parentElement;
  const small = formControl.querySelector("small");
  small.classList.add("animation");
  small.innerText = message;
  formControl.className = "inputBox input-wrap ";

  setTimeout(() => {
    small.classList.remove("animation");
  }, 1000);
}

function setSuccess(elem) {
  const formControl = elem.parentElement;
  formControl.className = "inputBox input-wrap";
}

//fonction email & tel
function setError2(elem, message) {
  const formControl = elem.parentElement;
  const small = formControl.querySelector("small");
  small.classList.add("animation");
  small.innerText = message;
  formControl.className = "inputBox input-wrap2";
  setTimeout(() => {
    small.classList.remove("animation");
  }, 1000);
}

function setSuccess2(elem) {
  const formControl = elem.parentElement;
  formControl.className = "inputBox input-wrap2";
}

//fonction email & tel
function setError3(elem, message) {
  const formControl = elem.parentElement;
  const small = formControl.querySelector("small");
  small.classList.add("animation");
  small.innerText = message;
  formControl.className = "rgpd checkboxtext padding";
  setTimeout(() => {
    small.classList.remove("animation");
  }, 1000);
}

function setSuccess3(elem) {
  const formControl = elem.parentElement;
  formControl.className = "rgpd checkboxtext";
}

//fonctions verify
function name_verify(name) {
  return /^[a-zA-Z]/.test(name);
}

function email_verify(email) {
  return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
}
