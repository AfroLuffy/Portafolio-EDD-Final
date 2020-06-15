function isPalindrome(word) {
function Stack(){
var s = [];
for (var i = 0; i < word.length; ++i) {
s.push(word[i]);
}
var rword ="";
while (s.length() > 0) {
rword += s.pop();
}
if (word == rword) {
return true;
}
else {
	return false;
}
}
}
var word = "hello";
if (isPalindrome(word)) {
console.log(word + " es palindroma.");
}
else {
console.log(word + " no es palindroma.");
}
word = "civic"
if (isPalindrome(word)) {
console.log(word + " es palindroma.");
}
else {
console.log(word + "no es palindrome.");
}