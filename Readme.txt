
Hello!

Welcome to our project from Group 42:
A simple news hub which lets you read news from your favorite news sources and even save articles on the site.


----------------------------------------------------------------------------------


Setup:
 - download the files
 - open command-line
 - cd the directory of the folder
 - npm install
 - npm start
 --> Good to go!

External plugins that we've used are
 - Drag and Drop: http://codef0rmer.github.io/angular-dragdrop/#!/
 - Editable text: https://vitalets.github.io/angular-xeditable/
 - News Api: https://newsapi.org/
(but you shouldn't need to install these)

One thing to note is that when layouting this site, we used 75% zoom on our laptop. Which means it doesn't look good in normal zoom. Of course we'd like to make this dynamic, but haven't had the time. Therefore please use 75% zoom when viewing the site.

Our specs:
1280px x 591px 
75% zoom

----------------------------------------------------------------------------------


A simple guide:

Once you enter the site you come directly to the general articles page. Here you can browse through different news sites like
BBC News, CNN or Reuters. If you scroll down you'll get to more specific categories like sports or business sites.
You can also use the handy sidebar to quickly get to a specific category. This provides a great overview that's
currently lacking in the news market of today. Making it work similarly to the news-app Omni, but from the top-down
perspective of news-sites to articles, instead of Omnis way of summarising individual articles and then linking
out to different news-sites from that article.

One thing that we'd like to note on this page is that we previously showed the actual logos for the different news sites,
which made browsing through the different sites incredibly much easier. But just a few days before we submitted the assignment,
the creators of the News API removed this feature, and thus we've left with little choice but to only display
the name of the site in a simple colored box. Check out our screencast for a quick show of how it looked before this:
https://www.youtube.com/watch?v=yl85Q6cz-Ek&feature=youtu.be

If you click on a news site, you'll get to the articles published by that site. Upon clicking an article you'll get
a short summary of that article, the headline and a picture, as well as a link to the actual article itself.
There's also a button for saving the article to your favorites.

The favorites section is acessed via the top navigation bar, where all your favorite articles are saved.
Here you can come back to older articles that you want to read again, and also sort them by alphabetical order
or by their date (keep in mind that this only sorts down to individual days)

To further categorise your favorites we've created custom categories that you can rename yourself. You can then place
your articles in these categories by dragging and dropping them over their folder on the sidebar.
After this, simply scroll down to your own category and read the articles again. It's not possible to rearrange
an article after placing it in a category. So if you're tired of an article, you can simply delete it with the delete button.

Thank you for using our News Hub!