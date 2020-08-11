
const path = "../consumer/test"
async function consumerHtml() {
  console.log("-- consumerHtml ---")
  let response = await fetch(`${path}.html`)
  let data = await response.text()
  console.log(data)
}
async function consumerJson() {
  console.log("-- consumerJson ---")
  let response = await fetch(`${path}.json`)
  let data = await response.json()
  console.log(data)
}
async function consumerTxt() {
  console.log("-- consumerTxt ---")
  let response = await fetch(`${path}.txt`)
  let data = await response.text()
  console.log(data)
}