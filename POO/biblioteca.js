class Livro {
    constructor(titulo, autor){
        this.titulo = titulo
        this.autor = autor
        this.disponivel = true
    }

    listarLivrosDisponiveis(){
         if (this.disponivel){
            console.log(`Os livros disponiveis são  : ${this.disponivel}`)      
        } else {
            console.log(`O livro ${this.disponivel}`)
        }
    }
}

class Biblioteca{
    constructor(){
    this.livros = []
    }
    
    adicionarLivro(livro){
        this.livros.push(livro)
        console.log(`Livro ${livro.titulo} adicionado com sucesso`)
    }
    
    listarLivros(){
               this.livros.forEach(livros => 
            console.log(`livro ${livros.titulo} - ${livros.autor}`)
        )
    }
        
    emprestarLivro(titulo){
        
       const emprestimo  = this.livros.find( livro => livro.titulo === titulo)
       if (emprestimo.disponivel) {
        emprestimo.disponivel = false;
        console.log(`Sucesso: Você pegou "${emprestimo.titulo}" emprestado.`);
    } else {
        console.log(`O livro "${emprestimo.titulo}" já está emprestado.`);
    }
    }

    desvolverLivro(titulo){
        const emprestimo  = this.livros.find( livro => livro.titulo === titulo)
       if(emprestimo){
        emprestimo.disponivel = true
        console.log(`Você devolveu o livro ${titulo}`)
       }
    }  

    contarDisponiveis(){
       let contador = 0
       this.livros.forEach(livro => {
          if (livro.disponivel === true) {
            contador++
          }
        })
         console.log(`Ainda tem ${contador} livro(s) disponiveil(s)`)
}


    listarLivrosDisponiveis(){
        this.livros.forEach(livro => {
            if (livro.disponivel === true) {
            console.log(`Livro -  ${livro.titulo} - Autor: ${livro.autor}`);
            
            }
        }); 
    }

}

const l1 = new Livro('Dom Casmurro', 'Machado de Assis');
const l2 = new Livro('Memórias Póstumas', 'Machado de Assis');


const minhaBiblioteca = new Biblioteca();

minhaBiblioteca.adicionarLivro(l1)
minhaBiblioteca.adicionarLivro(l2)

minhaBiblioteca.listarLivros()
minhaBiblioteca.emprestarLivro('Dom Casmurro')

minhaBiblioteca.contarDisponiveis()
minhaBiblioteca.desvolverLivro('Dom Casmurro')


minhaBiblioteca.emprestarLivro('Memórias Póstumas')
minhaBiblioteca.listarLivrosDisponiveis()