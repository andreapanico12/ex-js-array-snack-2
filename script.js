// Array di libri iniziale

const books = [
  { 
	  title: "React Billionaire", 
	  pages: 250, 
	  author: {
		  name: 'Alice',
		  age: 35
	  },
	  available: false,
	  price: '101€',
	  tags: ['advanced', 'js', 'react', 'senior']
  },
  { 
	  title: "Advanced JS", 
	  pages: 500, 
	  author: {
		  name: 'Bob',
		  age: 20
	  },
	  available: true,
	  price: '25€',
	  tags: ['advanced', 'js', 'mid-senior']
  },
  { 
	  title: "CSS Secrets", 
	  pages: 320, 
	  author: {
		  name: 'Alice',
		  age: 17
	  },
	  available: true,
	  price: '8€',
	  tags: ['html', 'css', 'junior']
  },
  { 
	  title: "HTML Mastery", 
	  pages: 200, 
	  author: {
		  name: 'Charlie',
		  age: 50
	  },
	  available: false,
	  price: '48€',
	  tags: ['html', 'advanced', 'junior', 'mid-senior']
  },
];


/* Snack 1 - Filtra e Modifica

- Crea una funzione che somma due numeri.

- Crea un array (longBooks) con i libri che hanno più di 300 pagine;

- Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.

- Stampa in console ogni titolo nella console. */


const longBooks = books.filter(book => book.pages > 300)
console.log(longBooks)

const longBooksTitles = longBooks.map(book => book.title)
console.log(longBooksTitles)


/* Snack 2 - Il primo libro scontato

- Creare un array (availableBooks) che contiene tutti i libri disponibili.

- Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del
  20% (mantieni lo stesso formato e arrotonda al centesimo)

- Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).
*/


const availableBooks = books.filter(book => book.available === true)
console.log(availableBooks)

const discountedBooks = availableBooks.map(book => {
  let discountedPrice = Math.round((parseInt(book.price) - parseInt(book.price) * 0.2) * 100) / 100;
  console.log(discountedPrice)
  
  book = {
    ...book,
    price : `${discountedPrice}€`
  }
  return book
})
console.log(discountedBooks)

const fullPricedBook = discountedBooks.find(book => parseInt(book.price) === Math.floor(parseInt(book.price)))

console.log(fullPricedBook)


/* Snack 3 - Ordinare gli Autori

- Creare un array (authors) che contiene gli autori dei libri.

- Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.

- Ordina l’array authors in base all’età, senza creare un nuovo array.
  (se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente) */

  const authors = books.map(book => book.author)
  console.log(authors)

  const areAuthorsAdults = authors.every(author => author.age > 18);

  authors.sort((a,b) => {
    return areAuthorsAdults === true ? (a.age - b.age) : (b.age - a.age)
  })
  console.log (authors)
  

