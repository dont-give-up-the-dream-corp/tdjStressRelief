$(document).ready(function () {
  let type = ''
  let question = ''
  let possAnswers = []
  let correctAnswer = ''

  const concat = (x, y) => kyanite.concat([x, y])
  const forEach = (x, y) => x.forEach(y)
  const getVal = x => $(x).val()
  const setText = (x, y) => $(x).text(y)
  const append = (x, y) => $(x).append(y)
  const setAttr = (x, y, z) => $(x).attr(y, z)
  const addClass = (x, y) => $(x).addClass(y)

  const createList = function (x, y) {
    const $option = setAttr('<option>', 'value', x.value)
    setText($option, x.category)
    append('select', $option)
  }

  let getQuestion = function () {
    let qCategory = getVal('select :selected')
    const qQueryUrl = 'https://opentdb.com/api.php?amount=1&category=' + qCategory + '&encode=url3986'
    $.ajax({
      url: qQueryUrl,
      method: 'GET'
    }).then(function (x) {
      const response = x.results[0]
      type = decodeURIComponent(response.type)
      question = decodeURIComponent(response.question)
      correctAnswer = decodeURIComponent(response.correct_answer)
      possAnswers = concat(response.incorrect_answers, correctAnswer)
      setText('#question', question)
      displayAnswers()
      console.log(response)
    })
  }

  const qArray = [
    {
      category: 'Any Category',
      value: 'any'
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

  forEach(qArray, createList)

  const getAnswers = function (x) {
    const $li = addClass('<li>', 'answer')
    setText($li, decodeURIComponent(x))
    append('ul', $li)
  }

  const displayAnswers = () => forEach(possAnswers, getAnswers)

  $(document).on('change', 'select', getQuestion)
})
