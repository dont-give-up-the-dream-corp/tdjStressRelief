$(document).ready(function () {
  const k = kyanite
  let question = ''
  let possAnswers = []
  let correctAnswer = ''
  let correct = 0
  let incorrect = 0

  const percentage = k.curry((x, y) => y > 0 ? x / (x + y).toLocaleString('en-US', { style: 'percent' }) : Number('0').toLocaleString('en-US', { style: 'percent' }))

  const concat = (x, y) => k.concat([x, y])
  const forEach = (x, y) => x.forEach(y)
  const getVal = x => $(x).val()
  const setText = (x, y) => $(x).text(y)
  const getText = (x) => $(x).text()
  const append = (x, y) => $(x).append(y)
  const setAttr = (x, y, z) => $(x).attr(y, z)
  const addClass = (x, y) => $(x).addClass(y)
  const empty = (x) => $(x).empty()
  const show = x => $(x).show()
  const hide = x => $(x).hide()

  const createList = function (x, y) {
    const $option = setAttr('<option>', 'value', x.value)
    setText($option, x.category)
    append('select', $option)
  }

  const shuffleArray = function (array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  }

  const getQuestion = function () {
    let qCategory = getVal('select :selected')
    const qQueryUrl = 'https://opentdb.com/api.php?amount=1&category=' + qCategory + '&encode=url3986'
    $.ajax({
      url: qQueryUrl,
      method: 'GET'
    }).then(function (x) {
      const response = x.results[0]
      question = decodeURIComponent(response.question)
      correctAnswer = decodeURIComponent(response.correct_answer)
      possAnswers = shuffleArray(concat(response.incorrect_answers, correctAnswer))
      setText('#question', question)
      empty('ul')
      displayAnswers()
    })
  }

  // const getJoke = function () {
  $.ajax({
    url: 'https://icanhazdadjoke.com/',
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  }).then(function (response) {
    setText('#joke', response.joke)
    console.log(response.joke)
  })

  const qArray = [
    {
      category: 'Any Category',
      value: ''
    },
    {
      category: 'Animals',
      value: 27
    },
    {
      category: 'Art',
      value: 25
    },
    {
      category: 'Celebrities',
      value: 26
    },
    {
      category: 'Entertainment: Board Games',
      value: 16
    },
    {
      category: 'Entertainment: Books',
      value: 10
    },
    {
      category: 'Entertainment: Cartoon & Animation',
      value: 32
    },
    {
      category: 'Entertainment: Comics',
      value: 29
    },
    {
      category: 'Entertainment: Film',
      value: 11
    },
    {
      category: 'Entertainment: Japanese Anime & Manga',
      value: 31
    },
    {
      category: 'Entertainment: Music',
      value: 12
    },
    {
      category: 'Entertainment: Musicals & Theatre',
      value: 13
    },
    {
      category: 'Entertainment: Television',
      value: 14
    },
    {
      category: 'Entertainment: Video Games',
      value: 15
    },
    {
      category: 'General Knowledge',
      value: 9
    },
    {
      category: 'Geography',
      value: 22
    },
    {
      category: 'History',
      value: 23
    },
    {
      category: 'Mythology',
      value: 20
    },
    {
      category: 'Politics',
      value: 24
    },
    {
      category: 'Science & Nature',
      value: 17
    },
    {
      category: 'Science: Computers',
      value: 18
    },
    {
      category: 'Science: Gadgets',
      value: 30
    },
    {
      category: 'Science: Mathematics',
      value: 19
    },
    {
      category: 'Sports',
      value: 21
    },
    {
      category: 'Vehicles',
      value: 28
    }
  ]

  const initialize = () => {
    forEach(qArray, createList)
    hide('#correct')
    hide('#wrong')
  }

  const getAnswers = function (x) {
    const $li = addClass('<li>', 'answer list-group-item list-group-item-action')
    setText($li, decodeURIComponent(x))
    append('ul', $li)
  }

  const displayAnswers = () => forEach(possAnswers, getAnswers)

  // Put correct div classes when added to HTML file

  const checkAnswer = k.curry((cAnswer, gAnswer) => gAnswer === cAnswer ? show('#correct') : show('#wrong'))

  $(document).on('click', '.answer', function () {
    k.pipe([
      getText,
      checkAnswer(correctAnswer)
    ], this)
  })
  $(document).on('change', 'select', getQuestion)

  $(document).on("click",".answer", checkAnswer )
})
