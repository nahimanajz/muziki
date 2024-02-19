# Question
ask for real endpoints to retreive album and artist because some of instructed keys are missing from response


[artistUrl](https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=taylorswift&api_key=8b238083d2af17e0a983a19782a88ddd&format=json)
https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=taylorswift&api_key=APIKEY&format=json

### Artist available fields:
-----------------------
name:string
listeners:number
mbid:string
url:url
sreamable:boolean,
images: [{

}]

### missing Fields
- top-tracks,
- albums,
- related artists

[albumUrl](https://ws.audioscrobbler.com/2.0/?method=album.search&album=lsd&api_key=8b238083d2af17e0a983a19782a88ddd&format=json)

### Album available fields
--------------------------
name:string,
artist:string
url:url,
streamable:boolean,
mbid:string
images: [
    {
        "#text": url,
        "size":medium
}
]

### Missing fields
- ReleaseDate
- Tracklist

# workflow
1. integrating app with react [this](https://bagisto.com/en/how-to-integrate-third-party-apis-in-laravel/) ✅
2. connect socialite ✅
3. making migrations based on available fields from api response 
4. connect third part in controller using [link](https://bagisto.com/en/how-to-integrate-third-party-apis-in-laravel/)
5. create git [repository](https://github.com/nahimanajz)


