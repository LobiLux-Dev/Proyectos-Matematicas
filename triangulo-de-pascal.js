const number = document.getElementById('number')
const button = document.getElementById('button')
const result = document.getElementById('result')

// Filter
number.addEventListener('keydown', event => (['.', 'e', '-'].includes(event.key) ? event.preventDefault() : event))

// Function
button.addEventListener('click', () => {
  const n = parseInt(number.value)
  const pascal = []

  for (let i = 0; i < n; i++) {
    pascal[i] = []
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) pascal[i][j] = 1
      else pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j]
    }
  }

  result.innerHTML = ''

  for (let i = 0; i < pascal.length; i++) {
    const row = document.createElement('div')
    row.classList.add('text-center')

    for (let j = 0; j < pascal[i].length; j++) {
      row.innerHTML += `${pascal[i][j]} `
    }
    result.appendChild(row)
  }

  const final = document.createElement('div')
  final.classList.add('text-center')
  final.classList.add('bg-dark')
  final.classList.add('text-white')
  final.classList.add('mt-3')

  final.innerHTML = `El contenido de la columna ${number.value} es: <br />`

  for (let i = 0; i < pascal[pascal.length - 1].length; i++) {
    final.innerHTML += `${pascal[pascal.length - 1][i]}${i < pascal.length - 1 ? ' - ' : ''}`
  }

  result.appendChild(final)
})
