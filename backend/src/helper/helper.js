function removeDuplicates(articles){
    const seenTitles = new Set();
    const uniqueArticles=[];
    for(const article of articles){
if( seenTitles.has(article.title))
{
    continue;
}
    seenTitles.add(article.title);
    uniqueArticles.push(article)
}
return uniqueArticles;
}
function sortByLatest (articles){
   return articles.sort((a,b)=> new Date(b.isoDate)- new Date(a.isoDate)
)
return articles;
}

module.exports= {removeDuplicates, sortByLatest}