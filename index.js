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
    screen_name: 'aoc',
    trim_user: true, 
    exclude_replies: true, 
    include_entities: false,
    count: 1,
};
client.get('statuses/user_timeline', params, function(error, tweet, response) {
    if(error) throw error;

    //parsing tweet[] into one massive string of .text elms
    var arrayLength = tweet.length;

    for (var i = 0; i < arrayLength; i++) {

        var temp = tweet[i].text;
        var array = temp.split(" ");

        array.forEach(element => {
            wolfRamString += "\"" + element + "\"";
            if(i != arrayLength){
                wolfRamString += ",";
            }
        });
    }

    var status = genWoldRamStr(wolfRamString)
    console.log(status)

    client.post('statuses/update', {status: status}, function(error, tweet, response) {
        if (!error) {
          console.log(tweet);
        }else{
            console.log(error);
            console.log(status);
        }
    });


});

function genWoldRamStr(keywords){
    var str = "@wolframtap ";
    str += "WordCloud[" 
    + "DeleteStopwords[{" + keywords + "\"\"}]"
    +"]";
    return str;
}

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
  
*/