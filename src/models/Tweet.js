class TweetService {
    static getTweet() {
        const tweet = [
            {
                
                id:1,
                userId: 1,
                tweetText: "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era taritifs on aluminum and steel as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis.",
                tweetImage:"",
                tweetTimer:"7min",
                tweetMessageNbre : 57,
                tweetActualNbre: 144,
                tweetLikeNbre:184,               
            },
            {
                id:2,
                userId: 2,
                tweetAuthor: "The New York Times",
                tweetPseudo: "@nytimes",
                tweetProfilPhoto: "/src/images/nytimes.png",
                tweetText: "Gardening boomed during the pandemic. Six Black writers share how has helped them re-establish, and reimagine, a connection to cultivation and the land",
                tweetImage:"/src/images/tweet-image.png",
                tweetTimer:"2h",
                tweetMessageNbre : 19,
                tweetActualNbre: 48,
                tweetLikeNbre:482,
                compteCertif: "true",
                
            },
            {
                id:3,
                userId: 3,
                tweetAuthor: "Twitter",
                tweetPseudo: "@twitter",
                tweetProfilPhoto: "/src/images/twitter.png",
                tweetText: "BIG NEWS lol jk still Twitter",
                tweetImage:"",
                tweetTimer:"Oct 29",
                tweetMessageNbre : 6,
                tweetActualNbre: 36,
                tweetLikeNbre:267,
                compteCertif: "true",
                
            },
            {
                id:4,
                userId: 3,
                tweetAuthor: "Twitter",
                tweetPseudo: "@twitter",
                tweetProfilPhoto: "/src/images/twitter.png",
                tweetText: "hello literally everyone",
                tweetImage:"",
                tweetTimer:"Oct 4",
                tweetMessageNbre : 118,
                tweetActualNbre: 785,
                tweetLikeNbre:30,
                compteCertif: "true",
                
            },
            {
                id:5,
                userId: 3,
                tweetAuthor: "Twitter",
                tweetPseudo: "@twitter",
                tweetProfilPhoto: "/src/images/twitter.png",
                tweetText: "hello literally everyone",
                tweetImage:"/src/images/tweet-image.png",
                tweetTimer:"Oct 4",
                tweetMessageNbre : 118,
                tweetActualNbre: 785,
                tweetLikeNbre:35,
                compteCertif: "true",
                
            }
            
        ];
        return tweet;
    }
 }
 export default TweetService;