# Using PHP
PHP stands for __Hypertext Preprocessor__ and was developed by Rasmus Lerdorf in `1994`. It is a server-side scripting language that is fast, flexible, and pragmatic. PHP can be embedded in to simple HTML:
```html
<body>
        <?php echo '<p>Hello World</p>'; ?>
</body>
```

The code is executed on a server and returned to a browser. 

Learning PHP can be split into 3 parts:
1. The PHP Language
2. Databases: Learning to manipulate databases
3. Security: Protected your website

To setup a server to run php:
- Download XAMPP from apachefriends.org
- Turn on MySQl and Apache WebServer
- Go to the htdoc folder to create
- Set executable path: /Applications/XAMPP/xamppfiles/bin/php
- Add php Intelephense

Comments in PHP
```php
// This is a single line comment

/* This is
a multi-line comment
*/
```
- [Variables and Datatypes](#variables-and-data-types)

## Variables and Data Types
Declaring variables in PHP uses the `$` symbol. It follows a camelCase convention:
```php
<?php
    $fullName = "Eba Arat";
    echo $fullName;
?>
```
__Scalar__ types contain one values and includes:
- numbers
- strings
- booleans: true/false
- floats

__Array__ Types have multiple data and can be used with `array()` or `[]`. __Object__ Types is based on a class.

Predefined variables can be accessed like `$_VARIABLENAME[]`.