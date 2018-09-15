$(document).ready(function () {
  const qArray = [
    {
      category: 'Any Category',
      value: any
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

    < select name = "trivia_category" class="form-control" >
      
      <option value="9">General Knowledge</option> <option value="10">Entertainment: Books</option> <option value="11">Entertainment: Film</option> <option value="12">Entertainment: Music</option> <option value="13">Entertainment: Musicals &amp; Theatres</option> <option value="14">Entertainment: Television</option> <option value="15">Entertainment: Video Games</option> <option value="16">Entertainment: Board Games</option> <option value="17">Science &amp; Nature</option> <option value="18">Science: Computers</option> <option value="19">Science: Mathematics</option> <option value="20">Mythology</option> <option value="21">Sports</option> <option value="22">Geography</option> <option value="23">History</option> <option value="24">Politics</option> <option value="25">Art</option> <option value="26">Celebrities</option> <option value="27">Animals</option> <option value="28">Vehicles</option> <option value="29">Entertainment: Comics</option> <option value="30">Science: Gadgets</option> <option value="31">Entertainment: Japanese Anime &amp; Manga</option> <option value="32">Entertainment: Cartoon &amp; Animations</option>		</select >

        let qCategory


  $.ajax({
    url: ,//url//
    method:
  }).then(function (response) {
      //do stuff
    }).error(
      console.log(object))
})


