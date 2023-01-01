const btns = document.querySelectorAll(".btn");
const error = document.querySelector(".error");
const textarea = document.querySelector("textarea");

let rating = undefined;
document.querySelector(".btns").addEventListener("click", (e) => {
  if (e.target.classList.contains("btns")) return;
  rating = e.target.innerHTML;

  textarea.classList.remove("hidden");

  btns.forEach((btn) => {
    btn.classList.remove("btn--active");
  });

  e.target.classList.add("btn--active");
});

document.querySelector(".btn__submit").addEventListener("click", () => {
  if (!rating) {
    error.classList.remove("hidden");
    return;
  }

  const state_ty = `
    <div
    class="flex justify-center items-center flex-col bg-gradient-to-br from-[var(--dark-blue-card)] to-[var(--very-dark-blue)] p-8 rounded-3xl mb-8"
    >
    <img class="m-auto" src="images/illustration-thank-you.svg" alt="" />
    <p
      class="text-[color:var(--orange)] bg-[color:var(--dark-blue)] rounded-full py-2 px-4 mt-8 mb-4"
    >
      You selected ${rating} out of 5
    </p>
    <h1 class="text-white">Thank you!</h1>
    <p class="desc text-center mb-3">
      We appreciate you taking the time to give a rating. If you ever need
      more support, don’t hesitate to get in touch!
    </p>
    </div>
    `;

  document.querySelector("body").innerHTML = state_ty;
});
