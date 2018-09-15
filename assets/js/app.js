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

  const createList = function (x, y) {
    const $option = setText(setAttr('<option>', 'value', y), x)
    append('select', $option)
  }

  const getQuestion = function () {
    let qCategory = getVal('select :selected')
    const qQueryUrl = 'https://opentdb.com/api.php?amount=1&category=' + qCategory + '&type=multiple'
    $.ajax({
      url: qQueryUrl,
      method: 'GET'
    }).then(function (x) {
      const response = x.results[0]
      type = response.type
      question = response.question
      correctAnswer = response.correctAnswer
      possAnswers = concat(response.incorrectAnswers, correctAnswer)
    }).error(
      console.log('AJAX request failed')
    )
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

  const displayQuestion = function () {
    getQuestion()
    displayAnswers()
    setText('#question', question)
  }

  const getAnswers = function (x) {
    const $li = setText('<li>', x)
    append('ul', $li)
  }

  const displayAnswers = () => forEach(possAnswers, getAnswers)

  $(document).on('click', '#submit', displayQuestion)
})
