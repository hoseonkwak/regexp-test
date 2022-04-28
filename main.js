const str = `
010-1234-5678
thehoseon@email.com
http://www.omdbapi.com/?apikey=ef7c6dcd&s=frozen
The Lorem ipsum dolor sit amet consectetur adipisicing the elit.
abbcccdddd
`

console.log(
  str.match(/(?<=\@).{1,}/g)
);