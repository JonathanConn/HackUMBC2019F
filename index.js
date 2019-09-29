var Twitter = require('twitter');
var keyword = {Word: "", Count: 0};
var wolfRamString = "";

var client = new Twitter({
    consumer_key: 'EkThYMeteBowInnRcE014hN47',
    consumer_secret: 'WWJMH1WMcdmnkh5vZJUtQTS5fecCF8QstrLB3Ara2rrJNB8sKK',
    access_token_key: '3692376076-t4pNeulz7BTBtBNdGrBYIkxqqjcXQke1SquPkrx',
    access_token_secret: 'E0Xg8ejLaRz9uB0lmmof2W5fB6dwNXRhOr23FGBaPeXVZ'
});

var params = {
    screen_name: 's_imone29',
    trim_user: true, 
    exclude_replies: true, 
    include_entities: false,
    count: 200,
};
client.get('statuses/user_timeline', params, function(error, tweet, response) {
    if(error) throw error;

    //parsing tweet[] into one massive string of .text elms
    var arrayLength = tweet.length;
    for (var i = 0; i < arrayLength; i++) {
        wolfRamString += tweet[i].text;
    }

    console.log(wolfRamString);

});



/*
client.stream('statuses/filter', {track: 'twitter'},  function(stream) {
    stream.on('data', function(tweet) {
        keywords
      console.log(tweet.text);
    });
  
    stream.on('error', function(error) {
      console.log(error);
    });
  });
  

client.post('statuses/update', {status: '@wolframtap GeoGraphics[Text[Style["hello!",150]],GeoRange->"World"]'}, function(error, tweet, response) {
    if (!error) {
      console.log(tweet);
    }
});

function genWoldRamStr(keywords){

}
*/