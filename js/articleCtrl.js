myApp.controller('ArticleCtrl', ['$scope','Article','$stateParams','$firebaseArray','$timeout', function($scope, Article, $stateParams, $firebaseArray, $timeout){
  var test = $stateParams.contactId;
  $scope.imageTest = [test];
  // console.log($scope.imageTest);


  // Hämtar artiklar (de första källorna som visas i "view")
  $scope.get_article = function() {
    // $scope.loading = "images/loading-animated.gif";
    Article.getArticle.get({contactId:test},function(data){
      // $scope.loading = "";
      $scope.article = data.articles;
      console.log($scope.article);
    });
  }

  // Hämtar sourses + artiklar (de andra källorna som visas i "view")
  $scope.get_article_category = function(category) {
    console.log(category);
    Article.getArticleCategory.get({category:category},function(data){
      $scope.article_category = data.sources;
      console.log($scope.article_category);
    });
  }

  // Firebase test
  $scope.test_fb = function(){
    console.log("this is firebase" + $scope.selected);
    Article.test_firebase($scope.selected);
  }
    // Article.return_firebase_data(function(articles){
    //   $timeout(function(){
    //     $scope.lynn = articles;
    //     // console.log($scope.lynn);
    //   })
    //   // return articles;
    //
    // });

    //dataabas --> ctrl --> kallar på ctrl i veiwen

    // Lägger till artiklar från databasen till en array
  $scope.lynn = [];
  Article.article_added(function(article){
    $timeout(function(){
      $scope.lynn.push(article);
    });
  });

  $scope.likes = [];
   Article.like_added(function(article){
    $timeout(function(){
      $scope.likes.push(article);
    });
  }); 

  $scope.likes2 = []; 
  Article.like2_added(function(article){
    $timeout(function(){
      $scope.likes2.push(article);
    });
  }); 

  $scope.likes3 = []; 
  Article.like3_added(function(article){
    $timeout(function(){
      $scope.likes3.push(article);
    });
  }); 

  $scope.likeName1 = []; 
  Article.likeName1_added(function(article){
    $timeout(function(){
      $scope.likeName1.push(article);
      console.log("likename1 ", $scope.likeName1);
    });
  }); 

  $scope.likeName2 = []; 
  Article.likeName2_added(function(article){
    $timeout(function(){
      $scope.likeName2.push(article);
      console.log("likename2 ", $scope.likeName2);
    });
  }); 

  $scope.likeName3 = []; 
  Article.likeName3_added(function(article){
    $timeout(function(){
      $scope.likeName3.push(article);
      console.log("likename3 ", $scope.likeName3);
    });
  }); 



  // loopar igenom listan och tar bort artiklar
  Article.article_removed(function(article){
    $timeout(function(){
      for (var i = 0; i < $scope.lynn.length; i++) {
        if(article.key == $scope.lynn[i].key) {
          $scope.lynn.splice(i,1);
        }
      }
    });
  });

    // loopar igenom listan och tar bort artiklar
  Article.like_removed(function(article){
    $timeout(function(){
      for (var i = 0; i < $scope.likes.length; i++) {
        if(article.key == $scope.likes[i].key) {
          $scope.likes.splice(i,1);
        }
      }
    });
  });

  // loopar igenom listan och tar bort artiklar
  Article.like2_removed(function(article){
    $timeout(function(){
      for (var i = 0; i < $scope.likes2.length; i++) {
        if(article.key == $scope.likes2[i].key) {
          $scope.likes2.splice(i,1);
        }
      }
    });
  });

  // loopar igenom listan och tar bort artiklar
  Article.like3_removed(function(article){
    $timeout(function(){
      for (var i = 0; i < $scope.likes3.length; i++) {
        if(article.key == $scope.likes3[i].key) {
          $scope.likes3.splice(i,1);
        }
      }
    });
  });

    //Ordering for favorites

    //A-Z
    $scope.orderArticles = function(){
        $scope.lynn.sort(function(a,b){
        console.log("sorterar");
        var x = a.val().title.toLowerCase();
        var y = b.val().title.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });

      $scope.likes.sort(function(a,b){
        console.log("sorterar");
        var x = a.val().title.toLowerCase();
        var y = b.val().title.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });

      $scope.likes2.sort(function(a,b){
        console.log("sorterar");
        var x = a.val().title.toLowerCase();
        var y = b.val().title.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });

        $scope.likes3.sort(function(a,b){
        console.log("sorterar");
        var x = a.val().title.toLowerCase();
        var y = b.val().title.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });
    }

    //Z-A
    $scope.orderArticlesZ = function(){
        $scope.lynn.sort(function(a,b){
        console.log("sorterar");
        var x = a.val().title.toLowerCase();
        var y = b.val().title.toLowerCase();
        if (x < y) {return 1;}
        if (x > y) {return -1;}
        return 0;
      });

      $scope.likes.sort(function(a,b){
        console.log("sorterar");
        var x = a.val().title.toLowerCase();
        var y = b.val().title.toLowerCase();
        if (x < y) {return 1;}
        if (x > y) {return -1;}
        return 0;
      });

      $scope.likes2.sort(function(a,b){
        console.log("sorterar");
        var x = a.val().title.toLowerCase();
        var y = b.val().title.toLowerCase();
        if (x < y) {return 1;}
        if (x > y) {return -1;}
        return 0;
      });

        $scope.likes3.sort(function(a,b){
        console.log("sorterar");
        var x = a.val().title.toLowerCase();
        var y = b.val().title.toLowerCase();
        if (x < y) {return 1;}
        if (x > y) {return -1;}
        return 0;
      });
    }

    //DATUM VERKAR EJ FUNKA, eller kanske jo
    //By date
    $scope.orderArticlesDate = function(){
        $scope.lynn.sort(function(a,b){
        console.log("sorterar");
        var x = new Date(a.val().publishedAt).getTime();
        var y = new Date(b.val().publishedAt).getTime();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });

      $scope.likes.sort(function(a,b){
        console.log("sorterar");
        var x = new Date(a.val().publishedAt).getTime();
        var y = new Date(b.val().publishedAt).getTime();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });

      $scope.likes2.sort(function(a,b){
        console.log("sorterar");
        var x = new Date(a.val().publishedAt).getTime();
        var y = new Date(b.val().publishedAt).getTime();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });

      $scope.likes3.sort(function(a,b){
        console.log("sorterar");
        var x = new Date(a.val().publishedAt).getTime();
        var y = new Date(b.val().publishedAt).getTime();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });
    }

    //Oldest
    $scope.orderArticlesDate = function(){
        $scope.lynn.sort(function(a,b){
        console.log("sorterar");
        var x = new Date(a.val().publishedAt).getTime();
        var y = new Date(b.val().publishedAt).getTime();
        if (x < y) {return 1;}
        if (x > y) {return -1;}
        return 0;
      });
      $scope.likes.sort(function(a,b){
        console.log("sorterar");
        var x = new Date(a.val().publishedAt).getTime();
        var y = new Date(b.val().publishedAt).getTime();
        if (x < y) {return 1;}
        if (x > y) {return -1;}
        return 0;
      });
      $scope.likes2.sort(function(a,b){
        console.log("sorterar");
        var x = new Date(a.val().publishedAt).getTime();
        var y = new Date(b.val().publishedAt).getTime();
        if (x < y) {return 1;}
        if (x > y) {return -1;}
        return 0;
      });
      $scope.likes3.sort(function(a,b){
        console.log("sorterar");
        var x = new Date(a.val().publishedAt).getTime();
        var y = new Date(b.val().publishedAt).getTime();
        if (x < y) {return 1;}
        if (x > y) {return -1;}
        return 0;
      });
    }

  $scope.set_logo = function(){
    Article.setArticleLogo($scope.selected);
  }

// GET LOGO
    Article.getArticleLogo(function(logos){
      $timeout(function(){
        $scope.logos = logos;
      })
    });


  $scope.remove_article = function(key){
    Article.removeArticle(key);
  }

  $scope.remove_like = function(key){
    Article.removeLike(key);
  } 

  $scope.remove_like2 = function(key){
    Article.removeLike2(key);
  } 

  $scope.remove_like3 = function(key){
    Article.removeLike2(key);
  } 

  // tar ut shitset (logga, eller t.ex. innehåll i artikel) och kastar i scopet
  // När man klickar på en artikel i "articles" så hämtar den innehållet så att man kan spara dem i favroites
  $scope.select = function(selected) {
        $scope.selected = selected
        console.log(selected);
    }

  $scope.likeDrop = function(event, ui, article){
    $scope.p = [];
    $scope.p.push(article);
    console.log("article: ", article);
    for (var i=0; i<$scope.p.length; i++) {
      if ($scope.p[i]){
        console.log("Likeeee");
        Article.setLike($scope.p[i]);
        Article.removeArticle($scope.p[i].key);
      }
    }
  }

  $scope.like2Drop = function(event, ui, article){
    $scope.p = [];
    $scope.p.push(article);
    for (var i=0; i<$scope.p.length; i++) {
      if ($scope.p[i]){
        Article.setLike2($scope.p[i]);
        Article.removeArticle($scope.p[i].key);
      }

    }
  }

  $scope.like3Drop = function(event, ui, article){
    $scope.p = [];
    $scope.p.push(article);
    for (var i=0; i<$scope.p.length; i++) {
      if ($scope.p[i]){
        Article.setLike3($scope.p[i]);
        Article.removeArticle($scope.p[i].key);
      }

    }
  }

  $scope.setLikeName1 = function(name){
    Article.setLikeName1(name);
  }
  $scope.setLikeName2 = function(name){
    Article.setLikeName2(name);
  }
  $scope.setLikeName3 = function(name){
    Article.setLikeName3(name);
  }

  // Slänger in selected info i en lista(lokal)
  // $scope.saveArticle = function() {
  //   Article.saveArticle($scope.selected);
  // }

  // $scope.savedArticles = Article.getSavedArticles();

}]);
