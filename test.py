import os
import tweepy as tw
import pandas as pd
import re
import nltk
from nltk.corpus import stopwords


access_token = '2744193833-l4Qm2mX57buKN7nLRcoASs3O69Of8F5kqYb9EB1'
access_token_secret = 'KhTKPNRmwyWzL9q5KtKICnjhHnzzsuH4spPWImWzOusXp'
consumer_key = 'Ekv8W4q3cqht2pzHigAG3sE2m'
consumer_secret ='ge74In0pUixsEFihvUv8HCYZASSIDVvafeJvTwg5bogDCIPk4z'

auth = tw.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tw.API(auth, wait_on_rate_limit=True)


search_term = "#" + input("Enter hashtag:")

tweets = tw.Cursor(api.search,
                  q=search_term,
                  lang="en",
                  since='2018-01-01').items(100)

all_tweets = [tweet.text for tweet in tweets]

all_tweets[:5]

def remove_url(txt):
   return " ".join(re.sub("([^0-9A-Za-z \t])|(\w+:\/\/\S+)", "", txt).split())

all_tweets_no_urls = [remove_url(tweet) for tweet in all_tweets]
all_tweets_no_urls[:5]

lower_case = [word.lower() for word in all_tweets_no_urls]
words_in_tweet = [tweet.lower().split() for tweet in all_tweets_no_urls]
words_in_tweet[:2]



nltk.download('stopwords')
stop_words = set(stopwords.words('english'))

tweets_nsw = [[word for word in tweet_words if not word in stop_words]
             for tweet_words in words_in_tweet]

tweets_nsw[0]

print(tweets_nsw)
