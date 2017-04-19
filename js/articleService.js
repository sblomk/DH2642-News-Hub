myApp.factory('Article', function($resource){
  console.log("HEJ");
  var favorites = [];
  var logos = [];
  var array = [];
  var database = firebase.database().ref();


  this.getArticle = $resource('https://newsapi.org/v1/articles?source=:contactId',{},{
    get: {
      headers: {
        'X-Api-Key': 'cf655ffc034e436eb3be862b12045066'
      }
    }
  });

  this.getArticleCategory = $resource('https://newsapi.org/v1/sources?language=en&category=:category',{}, {
    get: {
      headers: {
        'X-Api-Key': 'cf655ffc034e436eb3be862b12045066'
      }
    }
  });
  //lägger till användarens folder namn i firebase
  this.setLikeName1 = function(name) {
    console.log(name);
    database.child('likeName1').set({
      name: name
      });
    }
  

  this.setLikeName2 = function(name) {
    database.child('likeName2').set({
      name: name
      });
    }

  this.setLikeName3 = function(name) {
    database.child('likeName3').set({
      name: name
      });
    }

  // Visar addade likeNames
  this.likeName1_added = function(cb){
    var test = firebase.database().ref('likeName1/');
    test.on('child_added', function(snapshot){
      console.log(snapshot.val());
      cb(snapshot.val());
    });
  }

    // Visar addade likeNames
  this.likeName2_added = function(cb){
    var test = firebase.database().ref('likeName2/');
    test.on('child_added', function(snapshot){
      cb(snapshot.val());
    });
  }

    // Visar addade likeNames
  this.likeName3_added = function(cb){
    var test = firebase.database().ref('likeName3/');
    test.on('child_added', function(snapshot){
      cb(snapshot.val());
    });
  }

  this.updater = function(list){
    console.log(list);
    return list[0];
  }


  //sätter NewsLoggan i article views
  this.setArticleLogo = function(logo){
    database.child('logo').set({
      logo: logo
    });
  }

  this.getArticleLogo = function(cb) {
    var logo = firebase.database().ref('logo/');
    var logoArray = [];
    logo.once('value', function(snapshot){
      // var logoImage = snapshot.val()
      logoArray.push(snapshot.val());
      // console.log("LYnn");
      // console.log(snapshot.val());
    });
    cb(logoArray);

  }

  //set Article (lägger till article i databasen)
  this.test_firebase = function(test) {
    // console.log("TEST" + test);
    var newArticle = database.child('article').push();
    newArticle.set({
      title: test.title,
      author: test.author,
      description: test.description,
      url: test.url,
      urlToImage: test.urlToImage,
      date: test.publishedAt
    });
    // firebase.database().ref().child("article")
  }

  this.removeArticle = function(remove_key){
    var remove = firebase.database().ref('article/' + remove_key);
    console.log("You just removed an article!");
    remove.remove();
    // return array;
    // console.log(array);
  }

  
  //set Like, försöker göra det i firebase men funkar ej
  this.setLike = function(test) {
    var newLike = database.child('likes').push();
    if (test.val().author && test.val().date){
    newLike.set({
      title: test.val().title,
      author: test.val().author,
      description: test.val().description,
      url: test.val().url,
      urlToImage: test.val().urlToImage,
      date: test.val().date
      });
    } else if (test.val().author){
      newLike.set({
      title: test.val().title,
      author: test.val().author,
      description: test.val().description,
      url: test.val().url,
      urlToImage: test.val().urlToImage
      });
    } else if (test.val().date){
      newLike.set({
      title: test.val().title,
      description: test.val().description,
      url: test.val().url,
      urlToImage: test.val().urlToImage,
      date: test.val().date
      });
    } else{
      newLike.set({
      title: test.val().title,
      description: test.val().description,
      url: test.val().url,
      urlToImage: test.val().urlToImage,
      });
    }
  }


  this.removeLike = function(remove_key){
    var remove = firebase.database().ref('likes/' + remove_key);
    console.log("You just removed an article!");
    remove.remove();
  }

  this.setLike2 = function(test) {
    var newLike2 = database.child('likes2').push();
      if (test.val().author && test.val().date){
    newLike2.set({
      title: test.val().title,
      author: test.val().author,
      description: test.val().description,
      url: test.val().url,
      urlToImage: test.val().urlToImage,
      date: test.val().date
      });
    } else if (test.val().author){
      newLike2.set({
      title: test.val().title,
      author: test.val().author,
      description: test.val().description,
      url: test.val().url,
      urlToImage: test.val().urlToImage
      });
    } else if (test.val().date){
      newLike2.set({
      title: test.val().title,
      description: test.val().description,
      url: test.val().url,
      urlToImage: test.val().urlToImage,
      date: test.val().date
      });
    } else{
      newLike2.set({
      title: test.val().title,
      description: test.val().description,
      url: test.val().url,
      urlToImage: test.val().urlToImage,
      });
    }
  }


  this.removeLike2 = function(remove_key){
    var remove = firebase.database().ref('likes2/' + remove_key);
    console.log("You just removed an article!");
    remove.remove();
  }

  this.setLike3 = function(test) {
    var newLike3 = database.child('likes3').push();
      if (test.val().author && test.val().date){
    newLike3.set({
      title: test.val().title,
      author: test.val().author,
      description: test.val().description,
      url: test.val().url,
      urlToImage: test.val().urlToImage,
      date: test.val().date
      });
    } else if (test.val().author){
      newLike3.set({
      title: test.val().title,
      author: test.val().author,
      description: test.val().description,
      url: test.val().url,
      urlToImage: test.val().urlToImage
      });
    } else if (test.val().date){
      newLike3.set({
      title: test.val().title,
      description: test.val().description,
      url: test.val().url,
      urlToImage: test.val().urlToImage,
      date: test.val().date
      });
    } else{
      newLike3.set({
      title: test.val().title,
      description: test.val().description,
      url: test.val().url,
      urlToImage: test.val().urlToImage,
      });
    }
  }


  this.removeLike3 = function(remove_key){
    var remove = firebase.database().ref('likes3/' + remove_key);
    console.log("You just removed an article!");
    remove.remove();
  }


// not wokring
  /*
  this.orderArticles = function(cb){
    console.log("Trying to order.. ");
    list = [];
    var articlesInDatabse = firebase.database().ref('article/');
    articlesInDatabse.orderByChild("title").on('value',function(snapshot){
      snapshot.forEach(function(data){
        console.log("Data: ",data);
        list.push(data);
      });
    });
    console.log("list ", list)
    return list;
  }
  */

  // this.return_firebase_data = function(cb) {
  //   var test = firebase.database().ref('article/');
  //   // var array = [];
  //     test.once('value', function(snapshot){
  //       snapshot.forEach(function(child){
  //         var article = child;
  //         array.push(article);
  //       });
  //       // var test_remove = removeArticle(snapshot.key);
  //       console.log(array);
  //       cb(array);
  //
  //       // document.getElementById("favorite").innerHTML += '<div class="article-container">' + '<h1>' + article.title + '</h1>' +'<button type="button" onclick="removeArticle()">X</button>' + '</div>';
  //       // return a;
  //     });
  // }

// Visar addade artiklar
  this.article_added = function(cb){
    var test = firebase.database().ref('article/');
    test.on('child_added', function(snapshot){
      cb(snapshot);
    });
  }

  // visar artiklar efter man har raderat en artikel
  this.article_removed = function(cb){
    var test = firebase.database().ref('article/');
    test.on('child_removed', function(snapshot){
      cb(snapshot);
    });
  }

  // Visar addade likes
  this.like_added = function(cb){
    var test = firebase.database().ref('likes/');
    test.on('child_added', function(snapshot){
      cb(snapshot);
    });
  }

  // visar artiklar efter man har raderat en artikel
  this.like_removed = function(cb){
    var test = firebase.database().ref('likes/');
    test.on('child_removed', function(snapshot){
      cb(snapshot);
    });
  }

    // Visar addade likes
  this.like2_added = function(cb){
    var test = firebase.database().ref('likes2/');
    test.on('child_added', function(snapshot){
      cb(snapshot);
    });
  }

  // visar artiklar efter man har raderat en artikel
  this.like2_removed = function(cb){
    var test = firebase.database().ref('likes2/');
    test.on('child_removed', function(snapshot){
      cb(snapshot);
    });
  }

      // Visar addade likes
  this.like3_added = function(cb){
    var test = firebase.database().ref('likes3/');
    test.on('child_added', function(snapshot){
      cb(snapshot);
    });
  }

  // visar artiklar efter man har raderat en artikel
  this.like3_removed = function(cb){
    var test = firebase.database().ref('likes3/');
    test.on('child_removed', function(snapshot){
      cb(snapshot);
    });
  }

  return this;
});
