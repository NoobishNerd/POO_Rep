
        //definir array

        const movies = []

        //definir ano max para o coiso year 

        //listener para submição
        const myForm = document.querySelector("form")
        myForm.addEventListener("submit", function(event){
            //obter os valores de todos os elementos do form
            const txtTitle = document.querySelector("#txtTitle").value
            const sltGenre = document.querySelector("#sltGenre").value
            const txtYear = document.querySelector("#txtYear").value
            const txtCover = document.querySelector("#txtCover").value
            const txtTrailer = document.querySelector("#txtTrailer").value

            //verificar se filme já existe
            if(isMovie(txtTitle) === true){
                alert("Filme existente")
            }else{

            //criar objeto
            const newMovie{
                title: txtTitle,
                genre: sltGenre,
                year: txtYear,
                cover: txtCover,
                trailer: txtTrailer
            }

            //adicionar a array
            movies.push(newMovie)


            renderTable()

            //prevenir que o formulario seja submetido ao servidor
            event.preventDefault()
           
            }
        })

//#####################listeners##############################################
    const btnCloseCover = document.querySelector("#btnCloseCover")
    btnCloseCover.addEventListener("click", function(){
        const dlgCover = document.querySelector("#dlgCover")
        dlgCover.close()
    })
    

//######################funções##############################################
        //verificar se movie já existe
        function isMovie(txtTitle){

            for (const movie of movies) {
                if (movie.title === txtTitle) {
                    return true
                }

            }
            return false
        }

        function renderTable(){
             //obter tabela
             const myTable = document.querySelector("table")

            //injetar cabeçalho
            myTable.innerHTML = `
                <tr>
                    <th>Titulo</th>
                    <th>Genero</th>
                    <th>Opçoes</th>

                </tr>
            `

            //adicionar filmes como linhas independentes
            for (const movie of movies) {
                myTable.innerHTML += `
                <tr>
                    <td>${movie.title}</td>
                    <td>${movie.genre}</td>
                    <td>
                        <button onclick="showCover('${movie.cover}')">ver capa</button>
                        <button>ver trailer</button>
                        <button>remover filme</button>
                    </td>

                </tr>
            `

            }

            
        }
        
        //janela para display de cover
        function showCover(cover){
            //injetar imagem
            const imgCover = querySelector("#imgCover")
            imgCover.src = cover
            //display da janela
            const dlgCover = querySelector("#dlgCover")
            dlgCover.showModal()
        }

