const submit = document.getElementById('btn')
submit.addEventListener('click', getValue)

const nameVal = document.getElementById('username')
const mailVal = document.getElementById('email')

function getValue() {
  const div2 = document.getElementById('mail')
  div2.innerText = mailVal.value
  const div = document.getElementById('name')
  div.innerText = nameVal.value
}
