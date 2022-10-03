# Password Generator

# Description
I have created a functional password generator to show off what I have learned so far with Javascript. My motivation behind this project is to create a place to easily come up with passwords given certain criteria. I always had the issue of using the same passwords over and over for anything and everything I would register or sign up for. Now I can finally put that issue in the past. There was an outline of the HTML and CSS provided for me here, so I just had to create the Javascript behind it. I started by erasing the starter code provided, which connected the button to the function, and adding the function to the button itself. I then created the length prompt box, which only accepts numbers from 8 to 128. Afterwards, I was able to put in a bunch of confirm boxes to fit the other criteria of the password generator. I was then able to make a probability tree out of conditional statements. Then after that, I was able to generate the passwrod by using math random and math floor, followed by the length of the variable. All that was left was to debug the code and make sure it ran smoothly.

# Usage
The website itself is pretty simple. It is simply a red button that says "Generate Password", and once clicked, a series of prompt and confirm boxes will show up. The first box will ask for the preferred length of the password. Next it will either move forward or tell you to put in a valid number. Moving forward, it will then ask if special characters are wanted in the password, then numbers, uppercase letters; and lastly, lowercase letters. It will then provide a password with the requested length, and at least one character of every criteria requested, on the page. 

#License
MIT License

Copyright (c) 2022 BrettGlerum

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

