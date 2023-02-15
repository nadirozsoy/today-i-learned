const CATEGORIES = [
  { name: 'technology', color: '#3b82f6' },
  { name: 'science', color: '#16a34a' },
  { name: 'finance', color: '#ef4444' },
  { name: 'society', color: '#eab308' },
  { name: 'entertainment', color: '#db2777' },
  { name: 'health', color: '#14b8a6' },
  { name: 'history', color: '#f97316' },
  { name: 'news', color: '#8b5cf6' },
]

const btnHeader = document.querySelector('.header__btn')
const form = document.querySelector('.fact-form')
const factsList = document.querySelector('.facts-list')

factsList.innerHTML = ''
loadFacts()

async function loadFacts() {
  const res = await fetch(
    'https://qlrcadttdhyrwmmymkea.supabase.co/rest/v1/facts',
    {
      headers: {
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFscmNhZHR0ZGh5cndtbXlta2VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYzOTIwNTAsImV4cCI6MTk5MTk2ODA1MH0.-G0x4MvTkRdRRGoYdGA_W227ipZsmczV5qEPWJNh5_g',
        authorization:
          ' Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFscmNhZHR0ZGh5cndtbXlta2VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYzOTIwNTAsImV4cCI6MTk5MTk2ODA1MH0.-G0x4MvTkRdRRGoYdGA_W227ipZsmczV5qEPWJNh5_g',
      },
    }
  )
  const data = await res.json()
  // const filteredData = data.filter((fact) => fact.category === 'science')
  createFactsList(data)
}

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `
    <li class="section__fact">
    <p class="section__text">
        ${fact.text}
        <a href="${fact.source}" target="_blank"
            class="section__text--source">(Source)</a>
    </p>
    <span class="section__tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    };">#${fact.category}#</span>
  </li>
  `
  )

  const html = htmlArr.join('')
  factsList.insertAdjacentHTML('afterbegin', html)
}

btnHeader.addEventListener('click', (e) => {
  //   form.classList.toggle('hidden') //same code
  if (form.classList.contains('hidden')) {
    form.classList.remove('hidden')
    btnHeader.textContent = 'Close'
  } else {
    form.classList.add('hidden')
    btnHeader.textContent = 'Share a fact'
  }
})
