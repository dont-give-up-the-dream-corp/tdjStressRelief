$(document).ready(function () {
  const k = kyanite
  let question = ''
  let possAnswers = []
  let correctAnswer = ''
  const gifs = {
    correct: ['https://via.placeholder.com/350x150'],
    incorrect: ['https://via.placeholder.com/250x150']
  }

  const touch = k.curryN(2, (method, [el, val = false]) => val ? $(el)[method](val) : $(el)[method]())

  const createList = x => {
    const $option = $(`<option value="${x.value}">`)
    touch('text', [$option, x.category])
    touch('append', ['select', $option])
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
    let qCategory = touch('val', ['select :selected'])
    const qQueryUrl = 'https://opentdb.com/api.php?amount=1&category=' + qCategory + '&encode=url3986'
    $.ajax({
      url: qQueryUrl,
      method: 'GET'
    }).then(function (x) {
      const response = x.results[0]
      console.log(response)
      question = decodeURIComponent(response.question)
      correctAnswer = decodeURIComponent(response.correct_answer)
      possAnswers = shuffleArray(k.concat([response.incorrect_answers, correctAnswer]))
      touch('text', ['#question', question])
      touch('empty', ['ul'])
      displayAnswers(possAnswers)
    })
  }

  const getJoke = function () {
    $.ajax({
      url: 'https://icanhazdadjoke.com/',
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    }).then(function (response) {
      touch('text', ['#joke', response.joke])
      touch('show', ['#jokeDisplay'])
      touch('hide', ['#questionDisplay'])
    })
  }

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

  const initialize = x => {
    x.forEach(createList)
    touch('hide', ['#correct'])
    touch('hide', ['#wrong'])
    touch('hide', ['#jokeDisplay'])
  }

  const getAnswers = function (x) {
    const $li = touch('addClass', ['<li>', 'answer list-group-item-action list-group-item'])
    touch('text', [$li, decodeURIComponent(x)])
    touch('append', ['ul', $li])
  }

  const displayAnswers = x => x.forEach(getAnswers)

  const checkAnswer = k.curry((cAnswer, gAnswer) => gAnswer === cAnswer)

  const getGif = x => x ? shuffleArray(gifs.correct) : shuffleArray(gifs.incorrect)

  const displayGif = k.curry(function (ans, x) {
    touch('text', ['#answer', ans])
    $('img').attr('src', getGif(x))
  })

  $(document).on('click', '.answer', function () {
    k.pipe([
      touch('text'),
      checkAnswer(correctAnswer),
      displayGif(correctAnswer),
      getJoke
    ], [this])
  })

  $(document).on('change', 'select', getQuestion)

  initialize(qArray)

  $(document).on('click', '.answer', checkAnswer)
})
