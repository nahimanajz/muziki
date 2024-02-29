# Muziki
Muziki is a web application that allows users to search for artist's information and artist's albums related songs yet  authorized users can save into favorites buckets to review after 

### Installation guide

  Make sure you have  PHP > 8.0.0 version  with Mysql and composer are installed to then clone [this](https://github.com/nahimanajz/muziki.git) repository
  run 
  - cd muziki/
  - cp .env.example .env  ``// fill lastfm keys and url or preferably use  received env file received from task submission email``
  -  composer update
  - npm install
  - npm run dev
  - php artisan key:generate
  - php artisan serve // Run this within other tab of terminal
  yet in your browser open localhost:8080 or other link which can appear in your terminal once port `8000` is occupied by another computer process

### Running tests
This project is tested with (Pest)[https://pestphp.com/] and [dusk] [https://laravel.com/docs/10.x/dusk]

  *Test with pest*
 ``` ./vendor/bin/pest``` or ``` php artisan test ```
 *Test with Dusk*
 ``` php artisan dusk ```


 ## Testing pages with laravel dusk
 - Install `composer require laravel/dusk:* --ignore-platform-req=ext-zip`

 N.b: If you encounter ``Class "ZipArchive" not found ``
 1. You need to have chrome browser 122 or higher installed
 2. In terminal type php --ini, secondly open php.ini file and add `extension=zip` save and install by ` composer require laravel/dusk:* `
 3. Running test will truncate db thus you are encouraged to create new user in order to test functionality on browser

### Tools
- Sqlite  `` Feel free to can use Mysql`` 
- Laravel 10 and PHP 8.2.2
- Inertia with ReactJs
- Pest and Dusk for testing
- Composer package manager for PHP packages

### Features
- Search artist by name ``eg: cher``
- Search album by artist name and album name `` eg: artist:cher album:Believe``
- Register, Login, update profile and Logout
- Create, Read, Edit and delete favorite album
- Create, Read, Edit and delete favorite artist


### Developed by Janvier Nahimana