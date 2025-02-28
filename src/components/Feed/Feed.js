import Tweet from "../Tweet/Tweet"
import TweetInput from "../TweetInput/TweetInput"
import "./Feed.css"

const firstTweet = {
  id: -1,
  name: `Code Path`,
  handle: `codepath`,
  text: `This is a tweet about something that excites us greatly. We're going to proclaim our joy on social media and be showered with praise.`,
  comments: 445,
  retweets: 121,
  likes: 165000,
}

export default function Feed() {
  return (
    <div className="col feed">
      <TweetInput />

      <div className="see-new-tweets">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed">
        {/* example first tweet */}
        <Tweet tweet={firstTweet} />
        {/* */}
      </div>
    </div>
  )
}
